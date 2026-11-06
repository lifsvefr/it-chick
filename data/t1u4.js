/* Track 1 · Unit 4 · Networks and the internet */
ICA.addUnit({
  id:"t1u4", track:"t1", n:4, title:"Networks and the internet", icon:"🌐",
  blurb:"What really happens between your device and the rest of the world: packets, routers and undersea cables, IP addresses and DNS, your home Wi-Fi, how the web loads a page, and what “fast internet” actually means.",
  goals:[
    "Explain how data crosses the internet in packets, through routers, ISPs, cables and data centres",
    "Tell public from private IP addresses and explain what DNS does and how it fails",
    "Understand your modem, router and Wi-Fi, and secure a home router using current official advice",
    "Describe what happens when a web page loads, and use cookies, cache and extensions sensibly",
    "Read a speed test, tell bandwidth from latency, save mobile data and prepare to work offline"
  ],
  read:[
    {book:"wss", where:"Chapter 1, “Technology in Everyday Life and Business”, Section 1.2 “Computer Hardware and Networks” (subsection “Networks”) and Section 1.3 “The Internet, Cloud Computing, and the Internet of Things”", note:"Short and readable. Section 1.3 also covers the history of the internet and the web."},
    {book:"ics", where:"Chapter 11, “Web Applications Development”, Section 11.1 “Modern Web Applications Architectures”", note:"Written for computer science students. Read the opening and “Server-Side Rendering and MVC Patterns” for requests and responses; skip the framework details."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t1u4-l1", title:"How the internet moves data", minutes:50,
   hook:{q:"You send a photo to a friend on another continent. How does it travel?", options:["As one complete file along a single wire","Split into many small pieces that can take different routes and are put back together at the end","Beamed straight from your phone to a satellite and down to your friend","Through “the cloud”, which isn’t a physical place"], answer:1, reveal:"**In many small pieces**, called [[packet|packets]]. Each one carries part of the photo plus addresses, routers pass each packet a step closer, and they don’t all have to take the same path; your friend’s device puts them back in order. This lesson follows that journey over wires, light and radio, and shows how physical the internet really is."},
   goals:[
     "Explain what a network is and why the internet is called a network of networks",
     "Describe how data is split into packets and passed from router to router",
     "Name the physical parts: ISPs, fibre and mobile links, undersea cables and data centres",
     "Explain what “the cloud” physically is"
   ],
   learn:[
    {h:"A network of networks", body:[
      {lead:"When you send a message, it doesn’t fly through the air to the other person. It hops through dozens of machines, most of them joined by cables."},
      "A [[network]] is simply two or more devices connected so they can exchange data. Your phone, laptop and printer, all joined to your home Wi-Fi, form a small network. A school, a hospital or an office has a bigger one. Each of these is called a [[lan|local area network (LAN)]]: a network in one place.",
      "The [[internet]] is what you get when millions of these networks agree to connect to each other and pass data along. That’s why it’s often called a **network of networks**. No single company or government owns it. Thousands of organisations each run a piece, and they connect using shared rules called [[protocol|protocols]], so that a phone made by one company can talk to a server run by another on the far side of the world.",
      "Your way in is an [[isp|internet service provider (ISP)]]: the company you pay for home broadband or a mobile plan. Your ISP connects your home network or your phone to its own network, and it connects to other ISPs and networks, and so on outwards. Networks that span cities, countries or the world are called [[wan|wide area networks (WANs)]]; the internet is the biggest of all.",
      {table:[
        ["Word","Plain meaning","Example"],
        ["Network","Devices connected to share data","Everything on your home Wi-Fi"],
        ["LAN","A network in one place","A café’s Wi-Fi, an office"],
        ["ISP","The company that connects you to the internet","Your broadband or mobile provider"],
        ["WAN","A network spanning long distances","Your ISP’s national network"],
        ["Internet","All these networks joined together","The whole system"]
      ]},
      {key:"The internet isn’t one thing in one place. It’s a huge number of separately owned networks that agree to carry each other’s data."}
    ]},
    {h:"The internet and the web aren’t the same thing", body:[
      "People often use “the internet” and “the web” as if they meant the same. They don’t. The internet is the **delivery system**: the cables, radio links, routers and rules that move data. The World Wide Web is one **service** that uses it: pages you open in a [[web-browser|web browser]]. Lesson 4 looks at the web in detail.",
      "Many other services travel over the same internet: email in a mail app, video calls, messaging apps, online games, music streaming, app updates, smart-home gadgets talking to their makers, and your phone backing up photos. If the internet is the road network, the web is just one kind of traffic on it.",
      {tip:"This is why “the internet is down” and “a website is down” are different problems. If one site won’t load but your messaging app still works, the internet is fine and the problem is probably that site."}
    ]},
    {h:"Packets: the parcel analogy, then the real thing", body:[
      "Imagine you need to post a 600-page manuscript, but the post office only accepts small envelopes. You’d split it into numbered bundles, write the destination and your return address on each, and post them all. They might travel in different vans and arrive out of order, but the receiver can put them back together using the numbers, and ask you to resend any that went missing.",
      "That’s close to how the internet works. Data is split into small chunks called [[packet|packets]]. Each packet has two parts:",
      {list:[
        "A **header**, like the writing on the envelope: the sender’s and receiver’s [[ip-address|IP addresses]] (internet addresses, explained in Lesson 2), a number saying where this piece fits, and some details about which rules apply.",
        "A **payload**: the actual piece of your photo, message or video."
      ]},
      {ex:"Amara sends a 3 MB photo. Suppose each packet carries 1,500 bytes of the photo.\n3 MB = 3,000,000 bytes (decimal units, as in Unit 1).\n3,000,000 ÷ 1,500 = 2,000 packets.\nEach one is addressed and numbered. The receiving server collects all 2,000, puts them in order and rebuilds the photo.", label:"Worked example: how many packets?"},
      "Now let’s make the analogy accurate, because a few parts of it mislead:",
      {table:[
        ["The post office picture","What really happens"],
        ["You give away the parcel","The sender keeps the original. Packets are copies made of electrical, radio or light signals."],
        ["Delivery takes days","Each hop takes a tiny fraction of a second; a packet can cross the world in well under a second."],
        ["You notice a lost parcel and complain","Software notices automatically. For a file or a web page, the missing packet is quietly resent (this is the job of a protocol called **TCP**)."],
        ["Every parcel matters","For live calls and video, a late packet is useless, so it’s often just skipped. That’s the glitch or frozen frame you sometimes see."]
      ]},
      {key:"Everything you send online, from a text to a film, travels as many small, addressed, numbered packets that are reassembled at the other end."}
    ]},
    {h:"Routers: passing packets along", body:[
      "A [[router]] is a device whose job is to pass packets between networks. When a packet arrives, the router reads the destination address in the header, checks its routing table (a list of which direction leads where) and sends the packet one step closer. The next router does the same. This step-by-step forwarding is called **routing**.",
      "No single router knows the whole route. Each only knows the best **next step**, a bit like a series of road signs. That design makes the internet resilient: if a cable is cut or a router fails, routers learn about it and send traffic another way. Packets from the same photo can even take different paths and still arrive.",
      {fig:'<svg viewBox="0 0 340 470"><defs><marker id="u4a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="70" y="10" width="200" height="54" rx="10" stroke-width="2"/><text x="170" y="33" text-anchor="middle">Your phone</text><text class="s" x="170" y="52" text-anchor="middle">photo → packets 1, 2, 3</text><path class="d-ink" d="M170 64 L170 86" stroke-width="2" marker-end="url(#u4a1)"/><rect class="d-panel" x="70" y="90" width="200" height="54" rx="10" stroke-width="2"/><text x="170" y="113" text-anchor="middle">Home router</text><text class="s" x="170" y="132" text-anchor="middle">first hop: Wi-Fi to the line</text><path class="d-ink" d="M170 144 L170 166" stroke-width="2" marker-end="url(#u4a1)"/><rect class="d-gold" x="70" y="170" width="200" height="54" rx="10" stroke-width="2"/><text x="170" y="193" text-anchor="middle">Your ISP</text><text class="s" x="170" y="212" text-anchor="middle">your provider’s routers</text><path class="d-ink" d="M130 224 L92 256" stroke-width="2" marker-end="url(#u4a1)"/><path class="d-ink" d="M210 224 L248 256" stroke-width="2" marker-end="url(#u4a1)"/><rect class="d-panel" x="10" y="260" width="150" height="66" rx="10" stroke-width="2"/><text x="85" y="283" text-anchor="middle">Other networks</text><text class="s" x="85" y="301" text-anchor="middle">more routers</text><text class="s" x="85" y="317" text-anchor="middle">carry packets 1, 3</text><rect class="d-panel" x="180" y="260" width="150" height="66" rx="10" stroke-width="2"/><text x="255" y="283" text-anchor="middle">Undersea cable</text><text class="s" x="255" y="301" text-anchor="middle">light in glass fibre</text><text class="s" x="255" y="317" text-anchor="middle">carries packet 2</text><path class="d-ink" d="M85 326 L132 358" stroke-width="2" marker-end="url(#u4a1)"/><path class="d-ink" d="M255 326 L208 358" stroke-width="2" marker-end="url(#u4a1)"/><rect class="d-sage" x="70" y="362" width="200" height="54" rx="10" stroke-width="2"/><text x="170" y="385" text-anchor="middle">Server in a data centre</text><text class="s" x="170" y="404" text-anchor="middle">puts 1, 2, 3 back in order</text><text class="s" x="170" y="442" text-anchor="middle">Each packet may take its own route.</text><text class="s" x="170" y="460" text-anchor="middle">Missing ones are sent again.</text></svg>', alt:"A phone splits a photo into packets 1, 2 and 3. They go to the home router, then to the ISP. Packets 1 and 3 travel through other networks’ routers; packet 2 travels through an undersea cable. All arrive at a server in a data centre, which puts them back in order.", cap:"A photo’s journey. Routers pass each packet one step closer; the server reassembles them."},
      "Your home router is the first hop. It joins your home network to your ISP’s network. From there your packets may pass through ten, twenty or more routers belonging to different organisations before they reach their destination. You can see this for yourself in the Apply task.",
      {tip:"Routers read the **header**, the envelope, to decide where a packet goes. With [[https|HTTPS]] (see {{public-wifi-https}}), the payload of a web page is encrypted, so the routers along the way can’t read your messages or passwords."}
    ]},
    {h:"The physical internet: wires, light and radio", body:[
      "The internet is surprisingly physical. Your data usually reaches your ISP in one of these ways:",
      {table:[
        ["Connection","How it reaches you"],
        ["Fibre","Pulses of light in thin glass fibres, often all the way to the home"],
        ["Cable","Signals on the same kind of cable used for cable TV"],
        ["DSL (phone line)","Signals on a copper telephone line"],
        ["Mobile data (4G, 5G)","Radio to a nearby mobile mast, then by cable from the mast"],
        ["Satellite","Radio to a satellite and down to a ground station, useful where cables don’t reach"]
      ]},
      "Notice that even wireless connections usually stay wireless only for the first stretch. After the mast, the satellite ground station or your router, the data is almost always back on cables.",
      "Between countries and continents, data travels through [[undersea-cable|undersea cables]] laid across the sea floor. Inside, hair-thin glass fibres carry data as light. According to TeleGeography, a research company that maps them, there are more than 600 active and planned submarine cables, over 1.5 million kilometres in all, and along most of their route a cable is roughly as thick as a garden hose. Satellites carry only a tiny share of international traffic; cables carry far more data at lower cost.",
      "Cables do get damaged, roughly 200 times a year worldwide, mostly by fishing gear and ships’ anchors rather than sabotage or sharks. Because routers can send traffic around a broken cable, most people never notice, although places served by only one or two cables can see serious slowdowns until a repair ship fixes the break.",
      {warn:"Weather can affect the first wireless stretch (heavy rain can disrupt some satellite links, and walls weaken Wi-Fi), but “the internet” as a whole doesn’t depend on the sky. It runs mostly on cables in the ground and under the sea."}
    ]},
    {h:"What “the cloud” physically is", body:[
      "When your photos are “in the cloud” (see {{cloud-storage}}), they aren’t floating anywhere. [[cloud|The cloud]] means computers owned by a company, which you use over the internet instead of your own device. Those computers live in [[data-center|data centres]]: large, secure buildings full of racks of [[web-server|servers]] and storage drives.",
      {list:[
        "**Power and cooling.** Thousands of computers produce a lot of heat, so data centres have serious cooling systems and backup power such as batteries and generators.",
        "**Copies in more than one place.** Big providers usually keep data on several drives and often in more than one building or region, so one broken drive or one power cut doesn’t lose your files.",
        "**Fast links.** Data centres sit on very high-capacity connections, often close to where many networks meet."
      ]},
      {ex:"Mei opens a shared document on her phone in Lisbon. Her request travels over mobile data to her ISP, through several networks, perhaps through an undersea cable, to a data centre in another country. A server there reads the file from its drives, splits it into packets and sends them back. The whole round trip usually takes a fraction of a second.", label:"Worked example: opening a cloud document"},
      "Knowing this explains a few everyday things. Cloud files need a connection unless you’ve made them available offline (Lesson 5 and {{sync}}). A problem at a provider’s data centre can take a service down for millions of people at once. And because the computers are in real places, laws about data can depend on which country they’re in."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“The internet is mostly wireless.”** Only the last short stretch to your device is usually wireless. The rest is cables, many of them under the sea.",
        "**“Wi-Fi is the internet.”** Wi-Fi only links your device to your router. If the router’s connection to your ISP fails, you can have full Wi-Fi bars and no internet.",
        "**“The web and the internet are the same.”** The web is one service on the internet; email, calls and apps are others.",
        "**“My message travels as one piece along one wire.”** It’s split into packets that may take different routes and are reassembled at the end.",
        "**“The cloud is somewhere in the sky.”** It’s servers in data centres: physical buildings you could drive to.",
        "**“Someone owns and controls the whole internet.”** Thousands of organisations run parts of it and cooperate through shared protocols."
      ]}
    ]}
   ],
   try:[
    {id:"t1u4-l1-x1", type:"sort", q:"Sort each item: is it part of the internet itself (the delivery system), or a service that runs over it?", buckets:["The internet itself","A service that uses the internet"], items:[
      {t:"An undersea fibre-optic cable", b:0, why:"Cables are the physical links that carry packets. They’re part of the delivery system."},
      {t:"The routers in an ISP’s network", b:0, why:"Routers forward packets between networks. They’re the internet’s junctions."},
      {t:"A mobile phone mast", b:0, why:"A mast is the first link for mobile data, connecting your phone to the provider’s network."},
      {t:"The World Wide Web", b:1, why:"The web is one service (pages in a browser) that travels over the internet."},
      {t:"Email", b:1, why:"Email is a separate service using its own protocols over the same internet."},
      {t:"A video-call app", b:1, why:"Video calls are a service; their packets ride on the internet like everything else."}
    ]},
    {id:"t1u4-l1-x2", type:"order", q:"Kenji’s phone uploads a photo to his cloud storage. Put the steps in order.", items:[
      {t:"The phone splits the photo into numbered packets, each addressed to the cloud server.", why:"Data is always packetised first; each packet gets a header with addresses and a sequence number."},
      {t:"The packets go over Wi-Fi to his home router.", why:"The home router is the first hop out of his home network."},
      {t:"The router passes them to his ISP’s network.", why:"The ISP connects his home network to the rest of the internet."},
      {t:"Routers in other networks forward each packet one step closer, possibly by different routes.", why:"Each router only decides the next hop; packets can take different paths."},
      {t:"The server in the data centre collects the packets, asks again for any missing ones and rebuilds the photo.", why:"Reassembly happens at the destination, using the sequence numbers. Missing pieces are resent."}
    ]},
    {id:"t1u4-l1-x3", type:"mcq", q:"Priya is downloading a 200 MB file. One packet is damaged on the way. What happens?", options:[
      {t:"Only that packet is sent again, and the download carries on.", ok:true, why:"Right. Each packet is numbered, so the receiving device can spot the gap and ask for just that piece. This is what TCP does for files and web pages."},
      {t:"The whole 200 MB download starts again from the beginning.", why:"That would be very wasteful. Splitting data into packets means only the missing piece needs resending."},
      {t:"The file arrives with a hole in it, and she has to fix it herself.", why:"For files and web pages, the protocol checks and repairs gaps automatically. (Live video may skip late packets instead, but a download doesn’t.)"},
      {t:"Her router repairs the packet using a backup copy it keeps.", why:"Routers don’t keep copies to repair packets. The sender resends it when asked."}
    ]},
    {id:"t1u4-l1-x4", type:"number", q:"Lucía sends a 3 MB photo. If each packet carries 1,500 bytes of the photo, how many packets are needed? (Use 1 MB = 1,000,000 bytes, as in Unit 1.)", answer:2000, tol:0, unit:"packets", why:"3 MB = 3 × 1,000,000 = 3,000,000 bytes. 3,000,000 ÷ 1,500 = 2,000 packets. Real packets also carry a small header, but the payload count is what matters here.", wrongs:[
      {v:0.002, tol:0.0005, why:"That divides 3 by 1,500 without converting megabytes to bytes first. Convert to the same unit (bytes) before dividing."},
      {v:16000, tol:0, why:"That converts to bits (× 8). The packet size here is in bytes, so keep everything in bytes."},
      {v:2097, tol:1, why:"That uses 1 MB = 1,048,576 bytes (the binary mebibyte). The question uses decimal units: 1 MB = 1,000,000 bytes."},
      {v:4500000000, tol:1000, why:"That multiplies instead of dividing. You want how many 1,500-byte chunks fit into 3,000,000 bytes."}
    ], hint2:"First turn 3 MB into bytes, then divide by 1,500."},
    {id:"t1u4-l1-x5", type:"match", q:"Match each part of the internet to its job.", pairs:[
      ["ISP","Connects your home or phone to the rest of the internet","Your internet service provider is your on-ramp: the broadband or mobile company you pay."],
      ["Router","Reads each packet’s destination and sends it one step closer","Routers make the forwarding decisions, one hop at a time."],
      ["Undersea cable","Carries data between continents as light in glass fibres","Most international traffic crosses the sea floor in fibre-optic cables."],
      ["Data centre","A building full of servers where websites and cloud services run","The cloud is physically made of these buildings."],
      ["Packet","A small, addressed and numbered chunk of data","Everything you send is split into packets and reassembled at the destination."]
    ]},
    {id:"t1u4-l1-x6", type:"sort", q:"How good is the postal analogy? Sort each statement.", buckets:["Accurate about packets","Misleading about packets"], items:[
      {t:"Each piece carries a destination address and a return address.", b:0, why:"Every packet header holds the sender’s and receiver’s IP addresses."},
      {t:"Pieces can travel by different routes and arrive out of order.", b:0, why:"Routers choose the next hop for each packet, so paths can differ. The receiver reorders them."},
      {t:"A lost piece can be requested again from the sender.", b:0, why:"For files and web pages, missing packets are automatically resent."},
      {t:"Your message travels as one complete item from start to finish.", b:1, why:"Data is split into many packets; it’s never one item travelling whole."},
      {t:"Once sent, the sender no longer has the original.", b:1, why:"Packets are copies. The sender keeps the original file."},
      {t:"Delivery across the world takes days.", b:1, why:"Each hop takes a tiny fraction of a second; whole journeys are usually well under a second."}
    ]},
    {id:"t1u4-l1-x7", type:"mcq", q:"Mei’s photos are “stored in the cloud”. Where are they physically?", options:[
      {t:"On storage drives in servers in one or more data centres run by her provider", ok:true, why:"The cloud is other people’s computers. Her photos are on drives in data-centre buildings, often copied to more than one place."},
      {t:"In satellites orbiting the Earth", why:"Satellites can carry some internet traffic, but cloud data is stored in data centres on the ground."},
      {t:"Spread in small pieces across other users’ phones", why:"Mainstream cloud storage doesn’t use other people’s devices. It uses the provider’s own servers."},
      {t:"Only on her own phone, with the word “cloud” as a label", why:"If they were only on her phone, she couldn’t open them from another device. Cloud copies live on the provider’s servers (her phone may also keep copies)."}
    ]}
   ],
   apply:{intro:"See the physical internet for yourself. None of this changes any settings.", tasks:[
     {t:"Trace the route to a website", how:{
       win:["Open **Start**, type **cmd** and open **Command Prompt** (or open **Terminal**).","Type `tracert example.com` and press [[kbd:Enter]].","Each numbered line is one router (hop). Count the hops. The times in ms show how long each step took to reply. Lines of `*` just mean that router didn’t answer; that’s normal."],
       mac:["Open **Terminal** (search with [[kbd:Cmd]] + [[kbd:Space]]).","Type `traceroute example.com` and press [[kbd:Return]].","Each numbered line is one router (hop). Count them and look at the times in ms. Lines of `*` mean a router didn’t reply, which is normal."],
       chromeos:["ChromeOS doesn’t offer a beginner-friendly trace tool. If you’ve turned on the Linux development environment, you can install one there; otherwise do this task on another computer, or skip to the next task."],
       phone:["iPhone and Android don’t include a trace tool. Free network-tools apps can do it, but you don’t need one: do this task on a computer if you can, or skip to the next task."]
     }},
     {t:"Find the undersea cables near you", how:["Open TeleGeography’s free map at **submarinecablemap.com**.","Find the country or coast nearest to you and tap a cable to see where it lands and who owns it.","Notice how many cables connect your region to the rest of the world. Places with only one or two are more exposed to outages when a cable breaks."]},
     {t:"Work out how your home or phone connects", how:["Look at where your internet line enters your home (if you have one): is it fibre, a cable-TV style cable, a phone line, or a 4G/5G box?","Check your ISP’s app or account page, or the label on the box, for the connection type.","On your phone, note whether it shows 4G, 5G or another symbol when you’re not on Wi-Fi."]}
   ], proof:"You know roughly how many hops your data takes to reach a website (or have seen it on a map), and what kind of connection carries your data out of your home or phone."},
   read:[
     {book:"wss", where:"Section 1.2 “Computer Hardware and Networks”, subsections “Networks” and “Network Hardware”"},
     {book:"wss", where:"Section 1.3 “The Internet, Cloud Computing, and the Internet of Things”, subsections “The Internet: From Inception to Today” (packet switching) and “The Cloud and Cloud Computing”"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t1u4-l2", title:"Addresses and names: IP and DNS", minutes:55,
   hook:{q:"Someone has your IP address, the number websites see when you visit. What can it usually tell them?", options:["Your exact street address","Your internet provider and a rough area, such as your town","Your name and phone number","Nothing at all"], answer:1, reveal:"Usually just **your internet provider and a rough area**. Your provider does know which customer had which address at which time, so it’s less private than many assume, but far less precise than films suggest. This lesson explains what IP addresses are, why you usually have more than one, and how DNS turns names like `example.org` into those numbers."},
   goals:[
     "Read an IPv4 and an IPv6 address and explain why IPv6 exists",
     "Tell public from private addresses and explain why your address changes",
     "Explain DNS simply, then accurately: resolvers, caching and the lookup chain",
     "Recognise when “the internet is down” is really a DNS problem",
     "Identify a domain name’s top-level domain and what it does and doesn’t tell you"
   ],
   learn:[
    {h:"Every device needs an address", body:[
      {lead:"A packet can only be delivered if it has an address on it. On the internet, that address is a string of numbers."},
      "An [[ip-address|IP address]] (Internet Protocol address) identifies a device’s connection on a network, so that packets can find it. It works like a postal address: routers read it to decide where to send each packet next. Unlike a serial number stamped on your laptop at the factory, an IP address is **given to your device when it joins a network**, and it changes when you move to a different network, just as your postal address changes when you move house.",
      "The most familiar kind is an [[ipv4|IPv4]] address, written as four numbers separated by dots, such as `192.168.1.23`. Each number is one [[byte]] (8 [[bit|bits]]), so it can only go from 0 to 255. Four bytes make 32 bits in all, which allows 2³² = 4,294,967,296 different addresses: about 4.3 billion.",
      "That sounded like plenty in the 1980s. It isn’t enough for a world with billions of phones, laptops, TVs and sensors. The regional organisations that hand out addresses have run out, or almost run out, of new IPv4 addresses. The long-term fix is [[ipv6|IPv6]], which uses 128 bits per address: enough for every device anyone can imagine, many times over.",
      {table:[
        ["","IPv4","IPv6"],
        ["Size","32 bits","128 bits"],
        ["Written as","Four numbers 0–255 with dots","Eight groups of hexadecimal with colons"],
        ["Example","`192.168.1.23`","`2001:db8:85a3::8a2e:370:7334`"],
        ["How many","About 4.3 billion","About 3.4 × 10³⁸"]
      ]},
      "In an IPv6 address, each group is written in hexadecimal (digits 0–9 plus letters a–f), and `::` is shorthand for a run of groups that are all zero. Most devices and networks today use both IPv4 and IPv6 side by side, and they switch between them automatically. You rarely need to type either.",
      {tip:"The example addresses on this page that begin `192.0.2.`, `203.0.113.` or `2001:db8:` come from ranges officially reserved for documentation, so they never belong to a real device."}
    ]},
    {h:"Public and private addresses", body:[
      "Your home probably has many devices but only one internet connection. How do they all get addresses? The answer is that there are two kinds.",
      {list:[
        "A [[private-ip-address|private IP address]] works only **inside** a local network. Three IPv4 ranges are reserved for this by an internet standard (RFC 1918): `10.0.0.0` to `10.255.255.255`, `172.16.0.0` to `172.31.255.255`, and `192.168.0.0` to `192.168.255.255`. Millions of homes use the same private addresses, which is fine because they never appear on the internet itself.",
        "A [[public-ip-address|public IP address]] is unique on the whole internet. Your ISP gives your router one. It’s the address websites see when you visit them."
      ]},
      "Your [[router]] stands between the two. It hands out private addresses to the devices in your home automatically. When your laptop sends a packet out, the router swaps the private sender address for its public one, notes which device it came from, and swaps it back when the reply arrives. This is called **network address translation (NAT)**. Think of an office switchboard: callers outside only know the main number; the receptionist puts them through to the right desk.",
      {fig:'<svg viewBox="0 0 340 330"><rect class="d-panel" x="60" y="10" width="220" height="54" rx="10" stroke-width="2"/><text x="170" y="33" text-anchor="middle">The internet</text><text class="s" x="170" y="52" text-anchor="middle">sees only 203.0.113.7</text><path class="d-ink" d="M170 64 L170 92" stroke-width="2"/><rect class="d-gold" x="60" y="92" width="220" height="74" rx="10" stroke-width="2"/><text x="170" y="115" text-anchor="middle">Home router (NAT)</text><text class="s" x="170" y="134" text-anchor="middle">outside: public 203.0.113.7</text><text class="s" x="170" y="152" text-anchor="middle">inside: private 192.168.1.1</text><path class="d-ink" d="M110 166 L57 214" stroke-width="2"/><path class="d-ink" d="M170 166 L170 214" stroke-width="2"/><path class="d-ink" d="M230 166 L283 214" stroke-width="2"/><rect class="d-lup" x="6" y="214" width="102" height="54" rx="8" stroke-width="2"/><text x="57" y="237" text-anchor="middle">Laptop</text><text class="s" x="57" y="256" text-anchor="middle">192.168.1.20</text><rect class="d-lup" x="119" y="214" width="102" height="54" rx="8" stroke-width="2"/><text x="170" y="237" text-anchor="middle">Phone</text><text class="s" x="170" y="256" text-anchor="middle">192.168.1.21</text><rect class="d-lup" x="232" y="214" width="102" height="54" rx="8" stroke-width="2"/><text x="283" y="237" text-anchor="middle">TV</text><text class="s" x="283" y="256" text-anchor="middle">192.168.1.22</text><text class="s" x="170" y="296" text-anchor="middle">Home network (LAN): private addresses,</text><text class="s" x="170" y="314" text-anchor="middle">only meaningful inside this home</text></svg>', alt:"Three home devices with private addresses 192.168.1.20, .21 and .22 connect to a home router whose inside address is 192.168.1.1 and whose public address is 203.0.113.7. The internet sees only the public address.", cap:"Inside your home, private addresses. Outside, one public address shared by everything."},
      "Mobile networks often go further and share one public address among many customers at once. That’s one reason you can’t always tell who someone is from an IP address alone.",
      {ex:"Fatima’s laptop shows `192.168.0.14` in its Wi-Fi details. A “what is my IP address” search shows `203.0.113.88`. Both are right: the first is her laptop’s private address inside her home; the second is her router’s public address, which every website sees.", label:"Worked example: two addresses at once"}
    ]},
    {h:"Why your address changes", body:[
      "People are often surprised that their IP address isn’t fixed. Several normal things change it:",
      {table:[
        ["What happened","Which address changes"],
        ["You join a different Wi-Fi network (café, work, a friend’s home)","Your device gets a new private address there, and the internet sees that network’s public address."],
        ["You switch from Wi-Fi to mobile data","Your public address becomes one from your mobile provider."],
        ["Your router restarts, or time passes","Many ISPs give home connections a **dynamic** public address that can change from time to time."],
        ["You turn on a VPN","Websites see the VPN company’s address instead (see {{public-wifi-https}})."]
      ]},
      "Some businesses pay for a **static** public address that never changes, for example to run their own server. For most people, a changing address doesn’t matter at all.",
      {warn:"An IP address usually reveals your ISP and an approximate area, such as a town or region, not your street address. But your ISP does know which customer had which address at which time, and can be required by law to say. An IP address is less private than many people assume, and less precise than many films suggest."}
    ]},
    {h:"DNS: the internet’s contacts list", body:[
      "Nobody wants to type `192.0.2.10` to visit a website. People remember names. So the internet has a system that translates names into numbers, called the [[dns|Domain Name System (DNS)]].",
      "**The simple version.** Think of the contacts list on your phone. You tap “Ana” and the phone dials her number; you never need to remember the digits. DNS does the same for the internet: you type a [[domain-name|domain name]] such as `example.org`, and DNS looks up the IP address for it, so your device knows where to send the packets.",
      "**The accurate version.** There’s no single giant contacts list. DNS is spread across many servers around the world, each responsible for a part of the name. Your device asks a helper called a [[dns-resolver|DNS resolver]], usually run by your ISP (or by another organisation you choose), to do the looking up for you:",
      {fig:'<svg viewBox="0 0 340 400"><defs><marker id="u4a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="10" y="8" width="320" height="46" rx="10" stroke-width="2"/><text x="170" y="28" text-anchor="middle">1. Your device asks its resolver</text><text class="s" x="170" y="46" text-anchor="middle">“Where is example.org?”</text><path class="d-ink" d="M170 54 L170 70" stroke-width="2" marker-end="url(#u4a2)"/><rect class="d-panel" x="10" y="72" width="320" height="46" rx="10" stroke-width="2"/><text x="170" y="92" text-anchor="middle">2. Resolver checks its cache</text><text class="s" x="170" y="110" text-anchor="middle">already known? answer at once (step 6)</text><path class="d-ink" d="M170 118 L170 134" stroke-width="2" marker-end="url(#u4a2)"/><rect class="d-gold" x="10" y="136" width="320" height="46" rx="10" stroke-width="2"/><text x="170" y="156" text-anchor="middle">3. Asks a root server</text><text class="s" x="170" y="174" text-anchor="middle">reply: “ask the .org servers”</text><path class="d-ink" d="M170 182 L170 198" stroke-width="2" marker-end="url(#u4a2)"/><rect class="d-gold" x="10" y="200" width="320" height="46" rx="10" stroke-width="2"/><text x="170" y="220" text-anchor="middle">4. Asks the .org servers</text><text class="s" x="170" y="238" text-anchor="middle">reply: “ask example.org’s servers”</text><path class="d-ink" d="M170 246 L170 262" stroke-width="2" marker-end="url(#u4a2)"/><rect class="d-gold" x="10" y="264" width="320" height="46" rx="10" stroke-width="2"/><text x="170" y="284" text-anchor="middle">5. Asks example.org’s own servers</text><text class="s" x="170" y="302" text-anchor="middle">reply: “192.0.2.10”</text><path class="d-ink" d="M170 310 L170 326" stroke-width="2" marker-end="url(#u4a2)"/><rect class="d-sage" x="10" y="328" width="320" height="62" rx="10" stroke-width="2"/><text x="170" y="348" text-anchor="middle">6. Resolver answers and remembers</text><text class="s" x="170" y="366" text-anchor="middle">your device connects to 192.0.2.10;</text><text class="s" x="170" y="382" text-anchor="middle">the answer is cached for a while</text></svg>', alt:"Six steps: the device asks its resolver where example.org is; the resolver checks its cache; if needed it asks a root server, which points to the .org servers, which point to example.org’s own servers, which reply with the address 192.0.2.10; the resolver answers the device and caches the result.", cap:"A DNS lookup. Most of the time, a cached answer skips steps 3–5."},
      "The key idea is **caching**: remembering answers. Your browser, your device and the resolver all keep recent answers for a set time chosen by the domain’s owner, so popular names are usually answered instantly. That’s also why, when a website moves to a new address, some people reach the new one before others: their caches update at different times.",
      {key:"DNS turns names into IP addresses. A resolver does the work, asking a chain of servers from the right-hand end of the name leftwards, and caching the answers."}
    ]},
    {h:"When DNS fails, it looks like the internet is down", body:[
      "Almost everything you do starts with a DNS lookup. So if your resolver stops answering, nearly everything fails at once, even though your connection itself is fine. Signs that point to DNS:",
      {list:[
        "Browsers show messages such as “Server not found”, “This site can’t be reached” or an error mentioning **DNS**.",
        "Wi-Fi shows full bars and your router’s lights look normal.",
        "A video call or download that was **already running** keeps going (it already knows the address), while anything new fails.",
        "Everything works again on mobile data, which uses a different resolver."
      ]},
      {ex:"Tomás’s laptop says “This site can’t be reached: DNS address could not be found” for every website, but the music he was already streaming keeps playing.\nStep 1: Try another device on the same Wi-Fi. Same problem, so it isn’t the laptop.\nStep 2: Restart the router (unplug, wait 30 seconds, plug back in). Restarting clears its cache and reconnects to the ISP.\nStep 3: If it still fails, check the ISP’s status page on mobile data; their resolver may be having an outage.\nStep 4 (optional, advanced): set a different DNS resolver on the device or router.", label:"Worked example: a DNS outage"},
      "Several organisations run free public resolvers that you can choose instead of your ISP’s, and many devices can encrypt DNS lookups (Android calls this **Private DNS**; browsers may call it “secure DNS”). Changing resolver can help during an outage, but it doesn’t make your connection faster in general and isn’t something most people need to do."
    ]},
    {h:"Domain names and top-level domains", body:[
      "A domain name is read from **right to left**, from the most general part to the most specific, the same way DNS looks it up. (Unit 3 showed how to find the real domain in a web address: see {{url-anatomy}}.)",
      {ex:"news.example.org\n.org        top-level domain (TLD)\nexample     the name someone registered\nnews.       a subdomain chosen by the owner of example.org", label:"Worked example: reading a domain name", mono:true},
      "The last part is the [[top-level-domain|top-level domain (TLD)]]. There are several kinds:",
      {table:[
        ["Kind","Examples","Good to know"],
        ["Generic","`.com`, `.org`, `.net`, and newer ones like `.shop` or `.app`","Open to almost anyone, anywhere."],
        ["Country code","`.jp`, `.de`, `.br`, `.ng`, `.uk`","Two letters for a country or territory. Some have rules about who can register."],
        ["Restricted","`.gov`, `.edu`","Only for particular kinds of organisation (in practice mostly in the United States)."]
      ]},
      "Some countries add a second level, as in `.co.uk` or `.com.au`, which behaves like one ending. And some country codes are used worldwide for their look: `.tv` belongs to Tuvalu and `.io` to the British Indian Ocean Territory, yet both are popular with businesses everywhere.",
      "Nobody truly *buys* a domain name. You rent the right to use it from a **registrar**, usually a year at a time, and renew it to keep it. If an organisation forgets to renew, someone else can register the name, which is one reason an old link can suddenly lead somewhere unexpected.",
      {warn:"A TLD tells you very little about trustworthiness. A `.com` can be a scam and a `.xyz` can be legitimate. What matters is the **whole** registered domain, and whether it’s the one you expected (see {{url-anatomy}})."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“My IP address shows my exact home.”** It usually shows your ISP and an approximate area. Your ISP can link it to you, though.",
        "**“I have one IP address.”** You usually have at least two: a private one inside your network and the router’s public one. Often both IPv4 and IPv6 too.",
        "**“IPv6 is a separate internet.”** It’s a newer addressing scheme on the same internet, running alongside IPv4.",
        "**“DNS is one big server somewhere.”** It’s a worldwide system of many servers, each responsible for part of the name.",
        "**“If websites won’t load, my internet connection is broken.”** It may be DNS. Things already running keeping going is a clue.",
        "**“A country-code domain proves where a site is based.”** Not necessarily: `.tv` and `.io` are used worldwide."
      ]}
    ]}
   ],
   try:[
    {id:"t1u4-l2-x1", type:"sort", q:"Sort these IPv4 addresses: is each in one of the private ranges, or not?", buckets:["Private (only inside a local network)","Not private (could be a public address)"], items:[
      {t:"`192.168.0.10`", b:0, why:"Anything from 192.168.0.0 to 192.168.255.255 is private. This is a very common home address."},
      {t:"`10.1.2.3`", b:0, why:"The whole 10.x.x.x range is private."},
      {t:"`172.16.5.4`", b:0, why:"172.16.0.0 to 172.31.255.255 is private, and 172.16 is inside it."},
      {t:"`172.31.200.1`", b:0, why:"172.31 is the last block in the private 172.16–172.31 range."},
      {t:"`172.32.0.1`", b:1, why:"Careful: the private range stops at 172.31. 172.32 is outside it."},
      {t:"`8.8.8.8`", b:1, why:"This is a well-known public DNS resolver address, reachable from anywhere on the internet."}
    ]},
    {id:"t1u4-l2-x2", type:"mcq", q:"Which of these is an IPv6 address?", options:[
      {t:"`2001:db8:85a3::8a2e:370:7334`", ok:true, why:"Groups of hexadecimal digits separated by colons, with `::` standing for a run of zero groups: that’s IPv6."},
      {t:"`192.168.1.25`", why:"Four numbers separated by dots: that’s an IPv4 address (a private one)."},
      {t:"`www.example.org`", why:"That’s a domain name. DNS translates it into an IP address."},
      {t:"`192.168.1.256`", why:"This looks like IPv4 but isn’t valid at all: each number must be 0–255, and 256 is too big."}
    ]},
    {id:"t1u4-l2-x3", type:"number", q:"Each of the four numbers in an IPv4 address is stored in one byte (8 bits). What is the **highest** value any one of those numbers can be?", answer:255, tol:0, unit:"(highest value)", why:"8 bits give 2⁸ = 256 different values. Counting starts at 0, so they run from 0 to 255. That’s why `192.168.1.256` is impossible.", wrongs:[
      {v:256, tol:0, why:"256 is how many different values there are. Because counting starts at 0, the highest is 255."},
      {v:999, tol:0, why:"The numbers are written in decimal, but each is limited by its single byte, not by three decimal digits."},
      {v:128, tol:0, why:"128 is 2⁷, the value of the highest single bit. All eight bits on gives 128+64+32+16+8+4+2+1 = 255."},
      {v:8, tol:0, why:"8 is the number of bits, not the highest value they can store."}
    ], hint2:"How many different patterns can 8 bits make? Then remember counting starts at zero."},
    {id:"t1u4-l2-x4", type:"order", q:"Kenji types `library.example.org` for the first time today, and nothing is cached anywhere. Put the DNS lookup in order.", items:[
      {t:"His device asks its DNS resolver for the address of library.example.org.", why:"Devices don’t do the whole lookup themselves; they ask a resolver."},
      {t:"The resolver asks a root server, which points it to the servers for .org.", why:"Lookups start at the right-hand end of the name: the root knows who handles each top-level domain."},
      {t:"The .org servers point the resolver to example.org’s own name servers.", why:"Each level only knows who is responsible for the next part of the name."},
      {t:"example.org’s name servers reply with the IP address for library.example.org.", why:"The domain owner’s servers hold the actual answer, including any subdomains."},
      {t:"The resolver gives Kenji’s device the address and caches it for next time.", why:"Caching is why repeat lookups are almost instant."},
      {t:"His browser connects to that IP address and requests the page.", why:"Only once it has the number can the device start sending packets to the server."}
    ]},
    {id:"t1u4-l2-x5", type:"spot", q:"Tap the **top-level domain** in each of these three domain names.", ask:"is a top-level domain", mono:true, parts:[
      {t:"mail", flag:false, why:"`mail` is a subdomain, chosen by the owner of example.org."},
      ".", {t:"example", flag:false, why:"`example` is the registered name, not the TLD."},
      ".", {t:"org", flag:true, why:"`.org` is the generic top-level domain, the right-most part."},
      "   ", {t:"shop", flag:false, why:"`shop` here is a subdomain. (There is also a `.shop` TLD, but only the right-most label is the TLD.)"},
      ".", {t:"example", flag:false, why:"The registered name."},
      ".", {t:"de", flag:true, why:"`.de` is Germany’s country-code TLD."},
      "   ", {t:"www", flag:false, why:"`www` is a subdomain."},
      ".", {t:"example", flag:false, why:"The registered name."},
      ".", {t:"co", flag:false, why:"`co` is a second level that Japan’s registry uses for companies. It’s part of the ending `.co.jp`, but it isn’t the top level."},
      ".", {t:"jp", flag:true, why:"`.jp` is the country-code TLD for Japan. The top level is always the right-most label."}
    ], why:"Read from the right: the last label is always the top-level domain."},
    {id:"t1u4-l2-x6", type:"mcq", q:"Ana’s laptop and phone both show “Server not found” for every website on her home Wi-Fi. A video call she started earlier is still working, and everything loads on her phone when she switches to mobile data. What’s the most likely cause?", options:[
      {t:"The DNS resolver her home connection uses isn’t answering, so new names can’t be looked up.", ok:true, why:"The running call already knew its address, so it continues. New lookups fail on Wi-Fi but work on mobile data, which uses a different resolver. Restarting the router, or waiting for the ISP to fix its resolver, are the usual fixes."},
      {t:"Her Wi-Fi signal is too weak.", why:"A weak signal would also disrupt the running call. The pattern (old connections fine, new names failing) points to DNS."},
      {t:"Every website she tried is down at the same moment.", why:"Very unlikely, and the sites load fine over mobile data."},
      {t:"Her laptop has a virus.", why:"Her phone shows the same problem on the same Wi-Fi, so it isn’t one device. It’s something they share: the home connection’s DNS."}
    ]},
    {id:"t1u4-l2-x7", type:"match", q:"Match each top-level domain to the best description.", pairs:[
      ["`.com`","Generic: open to almost anyone, anywhere","Originally for companies, but today anyone can register one."],
      ["`.jp`","Country code for Japan","Two-letter TLDs belong to countries or territories."],
      ["`.gov`","Restricted to government bodies","Only eligible organisations can register under it (in practice, mainly US government)."],
      ["`.tv`","Country code (Tuvalu) used worldwide by many businesses","Some country codes are popular for their look, so they don’t prove where a site is based."]
    ]}
   ],
   apply:{intro:"Find your own addresses and watch DNS work. These steps only show information; they don’t change anything.", tasks:[
     {t:"Find your private address and your router’s address", how:{
       win:["Open **Settings → Network & internet → Wi-Fi** and select your connected network’s properties (or **Ethernet** if you use a cable). On some versions the details are under **Hardware properties**.","Look for **IPv4 address**. It will usually start with 192.168., 10. or 172.","To see your router’s address too, open **Command Prompt**, type `ipconfig` and press [[kbd:Enter]]. The **Default Gateway** is your router."],
       mac:["Open **Apple menu → System Settings → Wi-Fi**.","Click **Details** next to your connected network, then **TCP/IP**.","Note the **IP address** and the **Router** address."],
       chromeos:["Open **Settings → Network → Wi-Fi** and select your connected network.","Open the network details (on some versions, a **Network** section you expand) to see the **IP address** and **Gateway**. Wording varies between ChromeOS versions."],
       phone:["iPhone: **Settings → Wi-Fi**, tap the ⓘ next to your network. Note **IP Address** and **Router**.","Android: **Settings → Network & internet → Internet**, tap the settings icon next to your Wi-Fi network, then look for **IP address** (sometimes under **Advanced** or **Network details**). On Samsung phones: **Settings → Connections → Wi-Fi**, then the settings icon. Names vary by phone maker."]
     }},
     {t:"Find your public address and compare", how:["In your browser, search for **what is my IP address**. Many search engines and sites will show the public address the internet sees.","Compare it with the private address from the first task. They’re different, and both are correct.","On a phone, check again after switching from Wi-Fi to mobile data. The public address changes, because a different provider now carries your traffic."]},
     {t:"Watch DNS answer a question", how:{
       win:["In **Command Prompt**, type `nslookup example.org` and press [[kbd:Enter]].","The first lines show which DNS server answered (your resolver). The **Address** lines show the IP addresses for the name, possibly both IPv4 and IPv6."],
       mac:["In **Terminal**, type `nslookup example.org` and press [[kbd:Return]].","Note the server that answered and the addresses returned."],
       chromeos:["ChromeOS has no simple built-in lookup tool. Do this on another computer if you can, or skip it."],
       phone:["Phones don’t include a lookup tool. If you have a computer, do this step there; otherwise skip it."]
     }}
   ], proof:"You’ve written down your device’s private address, your router’s address and your public address, and you can explain why they differ."},
   read:[
     {book:"wss", where:"Section 1.3 “The Internet, Cloud Computing, and the Internet of Things”, subsection “The Internet: From Inception to Today” (IP addresses and the domain name system)"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t1u4-l3", title:"Wi-Fi, mobile data and your home network", minutes:55,
   hook:{q:"Where in a home does a Wi-Fi router usually work best?", options:["Tucked inside a cupboard, out of sight","Near the middle of the home and up high","On the floor by the front door, where the line comes in","Next to the microwave in the kitchen"], answer:1, reveal:"**Near the middle, and up high.** Wi-Fi is radio: walls, floors and big metal objects weaken it, and microwaves crowd one of its bands, so a router hidden in a corner cupboard struggles to reach the far rooms. This lesson explains what each box at home does, how the Wi-Fi bands differ, and how to make your network faster and safer."},
   goals:[
     "Tell apart a modem, a router, a Wi-Fi access point and a mesh system",
     "Choose between the 2.4, 5 and 6 GHz Wi-Fi bands and place a router well",
     "Use a phone hotspot sensibly and explain how Bluetooth differs from Wi-Fi",
     "Secure a home router using current advice from CISA, the NSA and other official sources"
   ],
   learn:[
    {h:"Modem, router, access point: who does what", body:[
      {lead:"Most homes have a box (or two) with blinking lights that nobody quite understands. It usually does three or four different jobs at once."},
      {table:[
        ["Device","Its job","Analogy"],
        ["[[modem|Modem]]","Translates between your provider’s line (fibre, cable, phone line or 5G) and ordinary network data","An interpreter at the border"],
        ["[[router|Router]]","Joins your home network to the internet, gives your devices private addresses and directs traffic between them","A building’s receptionist"],
        ["Wi-Fi access point","Sends and receives the radio signal your devices join","The building’s intercom"],
        ["Switch (network ports)","Lets several devices plug in with cables","A power strip, but for data"]
      ]},
      "“Modem” is short for modulator-demodulator: it turns data into the kind of signal your line carries and back again. With fibre, this box is often called an ONT (optical network terminal). Many ISPs supply a single box that combines a modem, a router, an access point and a switch; they may call it a router, a hub or a gateway. Others supply a separate modem, and you plug your own router into it.",
      "The router also marks a boundary. On one side is your [[lan|local network (LAN)]], with private addresses (Lesson 2). On the other side is the [[wan|WAN]]: your ISP and the internet. Router settings pages often use exactly these labels.",
      {fig:'<svg viewBox="0 0 340 450"><defs><marker id="u4a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text class="s" x="170" y="16" text-anchor="middle">OUTSIDE: the WAN</text><rect class="d-panel" x="40" y="24" width="260" height="50" rx="10" stroke-width="2"/><text x="170" y="45" text-anchor="middle">Provider’s line</text><text class="s" x="170" y="63" text-anchor="middle">fibre, cable, phone line or 5G</text><path class="d-ink" d="M170 74 L170 94" stroke-width="2" marker-end="url(#u4a3)"/><rect class="d-gold" x="40" y="96" width="260" height="50" rx="10" stroke-width="2"/><text x="170" y="117" text-anchor="middle">Modem (or fibre box)</text><text class="s" x="170" y="135" text-anchor="middle">translates the line’s signal</text><path class="d-ink" d="M10 164 L330 164" stroke-width="2" stroke-dasharray="6 5"/><text class="s" x="250" y="182" text-anchor="middle">INSIDE: your LAN</text><path class="d-ink" d="M170 146 L170 190" stroke-width="2" marker-end="url(#u4a3)"/><rect class="d-lup" x="40" y="192" width="260" height="62" rx="10" stroke-width="2"/><text x="170" y="213" text-anchor="middle">Router + Wi-Fi</text><text class="s" x="170" y="231" text-anchor="middle">directs traffic, hands out</text><text class="s" x="170" y="247" text-anchor="middle">private addresses, makes Wi-Fi</text><path class="d-ink" d="M110 254 L57 300" stroke-width="2"/><path class="d-ink" d="M170 254 L170 300" stroke-width="2" stroke-dasharray="4 4"/><path class="d-ink" d="M230 254 L283 300" stroke-width="2" stroke-dasharray="4 4"/><rect class="d-panel" x="6" y="300" width="102" height="54" rx="8" stroke-width="2"/><text x="57" y="323" text-anchor="middle">Desktop</text><text class="s" x="57" y="342" text-anchor="middle">by cable</text><rect class="d-panel" x="119" y="300" width="102" height="54" rx="8" stroke-width="2"/><text x="170" y="323" text-anchor="middle">Phone</text><text class="s" x="170" y="342" text-anchor="middle">by Wi-Fi</text><rect class="d-sage" x="232" y="300" width="102" height="54" rx="8" stroke-width="2"/><text x="283" y="323" text-anchor="middle">Mesh node</text><text class="s" x="283" y="342" text-anchor="middle">repeats Wi-Fi</text><path class="d-ink" d="M283 354 L283 382" stroke-width="2" stroke-dasharray="4 4"/><rect class="d-panel" x="232" y="384" width="102" height="54" rx="8" stroke-width="2"/><text x="283" y="407" text-anchor="middle">Tablet</text><text class="s" x="283" y="426" text-anchor="middle">far room</text><text class="s" x="110" y="400" text-anchor="middle">solid line = cable</text><text class="s" x="110" y="418" text-anchor="middle">dashed = Wi-Fi</text></svg>', alt:"The provider’s line enters the home and reaches a modem. A dashed boundary separates the outside WAN from the inside LAN. The router with Wi-Fi connects a desktop by cable, a phone by Wi-Fi, and a mesh node by Wi-Fi, which repeats the signal to a tablet in a far room.", cap:"A typical home network. Often the modem and router are one box."}
    ]},
    {h:"Wi-Fi in plain terms, and the three bands", body:[
      "[[wifi|Wi-Fi]] is a way of sending network data by radio over a short distance, between your devices and an access point. Each Wi-Fi network has a name, called its [[ssid|SSID]], and usually a password. Wi-Fi only covers the link to your router. What happens after that depends on your router’s connection to your ISP.",
      "Wi-Fi has improved over the years, and the Wi-Fi Alliance (the industry body behind it) now numbers the generations: Wi-Fi 4, 5, 6, 6E and 7. Newer generations are faster and cope better with many devices, but a connection only works at the level both the router and the device support.",
      "Wi-Fi uses radio bands measured in gigahertz (GHz). Most routers offer two or three:",
      {table:[
        ["Band","Strengths","Trade-offs"],
        ["2.4 GHz","Reaches further and passes through walls better; many smart-home gadgets only support this band","Slower; crowded, because microwaves, cordless phones, Bluetooth and neighbours’ networks share it"],
        ["5 GHz","Faster; less interference","Shorter range; walls and floors weaken it more"],
        ["6 GHz","Newest; lots of room, so the least congestion","Needs a Wi-Fi 6E or Wi-Fi 7 device and router; range similar to 5 GHz; not allowed in every country; requires WPA3 security"]
      ]},
      "Apple’s and Google’s guidance is to give all the bands **one network name** and let each device choose. Devices then switch to the best band as you move around the home. If a smart plug or camera can’t connect, check whether it only supports 2.4 GHz; the setup app usually says.",
      {key:"Lower frequency travels further; higher frequency carries more data over a shorter distance. The router and your devices usually make the choice for you."}
    ]},
    {h:"Better coverage: placement, mesh and cables", body:[
      "Where you put the router matters as much as which router you have. Microsoft’s advice, which matches what manufacturers say:",
      {list:[
        "Put it **near the middle** of your home and **high up**, not in a corner, under a desk or in a cupboard.",
        "Reduce the number of walls and obstacles between it and where you use devices. Large metal objects (a filing cabinet, a fridge) block signals.",
        "Keep it away from things that crowd the 2.4 GHz band, such as microwaves and cordless phones."
      ]},
      "If one router can’t cover the whole home, there are three common fixes:",
      {table:[
        ["Option","How it works","Best for"],
        ["[[mesh-wifi|Mesh Wi-Fi]]","Several matching units work together to create one network that devices move through seamlessly","Larger or multi-storey homes"],
        ["Wi-Fi extender","Plugs into a socket and repeats the signal; sometimes creates a second network name","One weak room, on a budget"],
        ["Ethernet cable","A wired connection from the router to the device or to a second access point","Desktops, TVs, consoles, video calls"]
      ]},
      {tip:"For the most stable connection, especially for video calls or big uploads, use a cable if you can. Wi-Fi shares the airwaves; a cable doesn’t."}
    ]},
    {h:"Mobile data and hotspots", body:[
      "[[mobile-data|Mobile data]] (called cellular data in some countries) connects your phone by radio to your mobile provider’s masts, using 4G, 5G or older standards. Unlike home Wi-Fi, it works almost anywhere with coverage, but most plans include a monthly allowance, called a [[data-cap|data cap]], and charge or slow you down after it.",
      "A [[hotspot]] shares one device’s internet connection with others. Your phone’s **personal hotspot** (or Wi-Fi hotspot) turns it into a tiny Wi-Fi router: your laptop joins the phone’s Wi-Fi, and the phone carries the traffic over mobile data.",
      {list:[
        "Everything the laptop does counts against the **phone’s** data allowance, including updates and cloud backups it starts in the background. Mark the connection as metered or low-data on the laptop (Lesson 5).",
        "Set a strong hotspot password, and turn the hotspot off when you’re done.",
        "Hotspots use a lot of battery. Keep the phone plugged in if you can.",
        "Some mobile plans limit or charge extra for hotspot use. Check yours before you rely on it."
      ]},
      {ex:"Oluwaseun’s café Wi-Fi asks for his card details on a sign-in page before letting him online. He isn’t sure the network is genuine, so he turns on his phone’s hotspot instead, connects his laptop to it and sets the connection as metered so Windows doesn’t start a large update.", label:"Worked example: a hotspot instead of doubtful Wi-Fi"}
    ]},
    {h:"Bluetooth vs Wi-Fi", body:[
      "Bluetooth is another short-range radio technology, using the same 2.4 GHz band as some Wi-Fi. But it does a different job: it links **two nearby devices directly**, such as a phone and headphones, a laptop and a keyboard, or a phone and a watch. It isn’t, by itself, a connection to the internet.",
      {table:[
        ["","Wi-Fi","Bluetooth","Mobile data"],
        ["Connects","Devices to a router or hotspot","One device to another nearby","Phone to a provider’s mast"],
        ["Typical use","Internet at home, work, cafés","Headphones, keyboards, watches, car audio","Internet on the move"],
        ["Gets you online?","Yes, if the router is online","Not usually by itself","Yes"]
      ]},
      "Bluetooth’s range varies widely with the design of the devices: the Bluetooth Special Interest Group says it can be anything from less than a metre to more than a kilometre. For everyday gadgets like headphones, think “the same room”."
    ]},
    {h:"Securing your home router", body:[
      "Your router is the front door of your home network, and it’s a computer with its own software ([[firmware]]). Government agencies give consistent advice. This list draws on CISA’s guide to securing home Wi-Fi, the US National Security Agency’s best practices for home networks, and Apple’s recommended router settings:",
      {ol:[
        "**Change the router’s admin password.** This is the password for the settings page or app, not the Wi-Fi password. Default ones may be printed on the box or published online. Use a long, random, unique password and keep it in your password manager.",
        "**Use WPA3 Personal**, or **WPA2/WPA3** mixed mode if older devices must connect. WPA2 with AES is still acceptable. Avoid WEP, WPA, WPA2 with TKIP and open (no password) networks; if your router offers nothing better, ask your ISP for a new one or replace it.",
        "**Use a strong Wi-Fi passphrase.** CISA suggests several unrelated words, at least 16 characters; the NSA suggests at least 20.",
        "**Turn on automatic firmware updates**, or check for updates regularly. The NSA advises replacing routers that no longer get updates (end of life).",
        "**Turn off features you don’t need**: remote management (changing settings over the internet), WPS (push-button joining), and UPnP (letting devices open the router automatically).",
        "**Rename the network** away from the default, without personal details like your surname or flat number.",
        "**Use a guest network** for visitors and for smart-home gadgets, so they can’t reach your laptops and phones."
      ]},
      {warn:"Hiding your network name (SSID) is not real protection. Both Apple and the NSA say it doesn’t stop anyone finding the network; the password and WPA3 or WPA2 security are what protect it."},
      {tip:"Your ISP’s router may let you make these changes in an app rather than a web page. If you rent the router from your ISP and can’t change something, ask them, or ask whether they update its firmware automatically."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Full Wi-Fi bars means the internet works.”** Bars only show your link to the router. The router’s link to the ISP may be down.",
        "**“5 GHz is always better.”** It’s faster close up, but 2.4 GHz may give a steadier connection two walls away.",
        "**“An extender doubles my speed.”** It extends coverage, often at some cost to speed. Mesh or cable usually do better.",
        "**“My router is secure out of the box.”** Default admin passwords and old settings are common weak points. Five minutes of changes fixes most of them.",
        "**“Bluetooth gets my headphones online.”** Bluetooth links devices to each other; the internet comes through Wi-Fi or mobile data.",
        "**“Using my hotspot is free because I’m on Wi-Fi.”** The laptop is on the phone’s Wi-Fi, but the phone uses mobile data."
      ]}
    ]}
   ],
   try:[
    {id:"t1u4-l3-x1", type:"match", q:"Match each piece of equipment to its job.", pairs:[
      ["Modem","Translates between the provider’s line and ordinary network data","It’s the interpreter between your home and the type of line you have."],
      ["Router","Joins the home network to the internet and directs traffic","It also hands out private addresses to your devices."],
      ["Wi-Fi access point","Creates the radio signal devices join","Often built into the router."],
      ["Mesh node","Works with other units to spread one network across a big home","Mesh units share one name, so devices move between them smoothly."],
      ["Ethernet cable","Gives the most stable, wired connection","Cables don’t share airwaves or suffer from walls."]
    ]},
    {id:"t1u4-l3-x2", type:"sort", q:"Sort each statement: is it true of the 2.4 GHz band, or of the higher bands (5 and 6 GHz)?", buckets:["2.4 GHz","Higher bands (5 and 6 GHz)"], items:[
      {t:"Reaches further and passes through walls better", b:0, why:"Lower frequencies travel further and penetrate obstacles better."},
      {t:"Shares airspace with microwaves, cordless phones and Bluetooth", b:0, why:"These all use the 2.4 GHz range, so it can get crowded."},
      {t:"Many smart plugs and cameras can only use this band", b:0, why:"Many smart-home gadgets support only 2.4 GHz, which is why they sometimes fail to join."},
      {t:"Faster when you’re close to the router", b:1, why:"Higher bands carry more data, but over a shorter distance."},
      {t:"More room, so less congestion from neighbours", b:1, why:"There are more and wider channels at 5 and especially 6 GHz."},
      {t:"Weakened more by walls and floors", b:1, why:"Higher frequencies are absorbed more by obstacles."}
    ]},
    {id:"t1u4-l3-x3", type:"sort", q:"Hana is setting up her new router. Which actions improve its security?", buckets:["Improves security","Doesn’t help, or makes it worse"], items:[
      {t:"Changing the admin password from the default", b:0, why:"Default admin passwords can be public. CISA puts changing it first."},
      {t:"Choosing WPA3 Personal (or WPA2/WPA3 mixed mode)", b:0, why:"WPA3 is the current, strongest Wi-Fi security; mixed mode lets older devices connect."},
      {t:"Turning on automatic firmware updates", b:0, why:"Updates fix known flaws in the router’s own software."},
      {t:"Putting smart-home gadgets on the guest network", b:0, why:"If a gadget is compromised, it can’t reach her laptop or phone."},
      {t:"Choosing WEP so a very old printer can connect", b:1, why:"WEP is broken and easy to crack. Replace or work around the old device instead."},
      {t:"Hiding the network name and relying on that for protection", b:1, why:"Hidden networks can still be found. Apple and the NSA say it adds no real security."},
      {t:"Leaving remote management switched on in case she needs it", b:1, why:"It lets the router be configured over the internet. CISA and the NSA advise turning it off."}
    ]},
    {id:"t1u4-l3-x4", type:"mcq", q:"Dmitri’s laptop shows full Wi-Fi bars, but no websites or apps load. His phone, on the same Wi-Fi, can’t load anything either. What does this tell him?", options:[
      {t:"The Wi-Fi link to the router is fine; the problem is between the router and the internet (the router, modem, ISP or DNS).", ok:true, why:"Strong bars on two devices mean the radio link is fine. Both failing points to the shared connection beyond the router. Next steps: check the router’s lights, restart the modem and router, and check the ISP’s status page using mobile data."},
      {t:"His laptop’s Wi-Fi card is broken.", why:"His phone has the same problem, so it isn’t one device."},
      {t:"He needs to move closer to the router.", why:"He already has full bars. Signal strength isn’t the issue."},
      {t:"He should switch from the 5 GHz band to 2.4 GHz.", why:"Band choice affects the link to the router, which is working. It won’t fix a problem further along."}
    ]},
    {id:"t1u4-l3-x5", type:"match", q:"Match each situation to the connection that fits it best.", pairs:[
      ["Listening on wireless headphones","Bluetooth","Bluetooth links two nearby devices directly."],
      ["Using a laptop on a train with no Wi-Fi","Phone’s personal hotspot","The phone shares its mobile data with the laptop over its own Wi-Fi."],
      ["Streaming a film on the TV at home","Home Wi-Fi or a cable","Home broadband usually has no tight data cap and is faster and cheaper per gigabyte."],
      ["Following map directions while walking around a city","Mobile data","Mobile data works almost anywhere with coverage. (Downloaded offline maps can also help: Lesson 5.)"]
    ]},
    {id:"t1u4-l3-x6", type:"mcq", q:"Amara connects her laptop to her phone’s hotspot for an afternoon. Her mobile plan has a small monthly data allowance. What’s the biggest risk, and the best fix?", options:[
      {t:"The laptop may start large updates or cloud backups that use up her phone’s data; she should mark the hotspot connection as metered or low-data on the laptop.", ok:true, why:"Laptops assume Wi-Fi is unlimited. Marking the connection as metered (Windows) or Low Data Mode (Mac) holds back big background downloads."},
      {t:"The hotspot will damage the phone’s battery permanently.", why:"Hotspots use a lot of battery while on, but they don’t cause permanent damage. Plugging in helps."},
      {t:"There’s no data risk, because the laptop is on Wi-Fi.", why:"The laptop is on the phone’s Wi-Fi, but the phone sends everything over mobile data, which counts against her plan."},
      {t:"Anyone nearby can automatically use her data.", why:"Not if she sets a strong hotspot password, which she should."}
    ]},
    {id:"t1u4-l3-x7", type:"spot", q:"Here is a summary of Sione’s router settings. Tap every setting that should be changed.", ask:"should be changed", parts:[
      "Network name: ", {t:"Sione-Flat-4B", flag:true, why:"CISA advises against personal information in the network name. It tells everyone nearby whose network it is and where."},
      "\nBands: ", {t:"2.4 GHz and 5 GHz, same name", flag:false, why:"One name for all bands is what Apple and Google recommend. Devices choose the best band."},
      "\nWi-Fi security: ", {t:"WPA2/WPA3 Personal", flag:false, why:"Mixed mode is fine: WPA3 for devices that support it, WPA2 for older ones."},
      "\nWi-Fi password: ", {t:"12345678", flag:true, why:"A short, common password can be guessed quickly. Use a long passphrase of several random words."},
      "\nAdmin password: ", {t:"admin (default)", flag:true, why:"Default admin passwords are often published. Anyone on the network could change his settings."},
      "\nFirmware: ", {t:"last updated 4 years ago, automatic updates off", flag:true, why:"Old firmware has known flaws. Turn on automatic updates, or replace the router if it no longer gets them."},
      "\nRemote management: ", {t:"On", flag:true, why:"This exposes the settings page to the internet. Turn it off unless there’s a specific need."},
      "\nGuest network: ", {t:"On, separate password", flag:false, why:"Good practice: visitors and smart gadgets stay off the main network."}
    ], why:"Five quick changes fix this router: name, Wi-Fi passphrase, admin password, updates and remote management."}
   ],
   apply:{intro:"Look at your own connection and router. If you rent the router from your ISP or live with others, check with whoever manages it before changing settings.", tasks:[
     {t:"See which band, Wi-Fi generation and security you’re using", how:{
       win:["Open **Settings → Network & internet → Wi-Fi** and select your connected network’s properties.","Look for **Protocol** (for example Wi-Fi 5 or Wi-Fi 6), **Security type** (for example WPA2-Personal or WPA3-Personal) and **Network band** (2.4, 5 or 6 GHz). On some versions these are under **Hardware properties**, and exact wording may vary with Windows updates."],
       mac:["Hold [[kbd:Option]] and click the Wi-Fi icon in the menu bar.","Under your network, read **PHY Mode** (the Wi-Fi standard), **Channel** (which shows 2.4, 5 or 6 GHz) and **Security**."],
       chromeos:["Open **Settings → Network → Wi-Fi** and select your network.","Some ChromeOS versions show the security type and frequency in the network details; others don’t. If yours doesn’t, check the router’s app instead."],
       phone:["iPhone: **Settings → Wi-Fi**, tap the ⓘ next to your network. iPhone doesn’t normally show the band, but it warns **Weak Security** if the network uses an old method such as WEP or WPA.","Android: **Settings → Network & internet → Internet**, tap the settings icon next to your network. Many phones show **Frequency** and **Security** there (sometimes under **Advanced**). Names vary by phone maker."]
     }},
     {t:"Check your router against the security list", how:["Find the router’s app or admin address. The address is often printed on a label on the router (commonly something like `192.168.0.1` or `192.168.1.1`), and it’s the **Router** or **Default Gateway** address you found in Lesson 2.","Sign in. If it still uses the default admin password, change it to a long, unique one and save it in your password manager.","Check the Wi-Fi security is **WPA3**, **WPA2/WPA3** or **WPA2 (AES)**, and the Wi-Fi password is a long passphrase.","Turn on automatic firmware updates (or check for an update now).","Turn off **remote management**, **WPS** and **UPnP** if you don’t need them, and turn on a **guest network** for visitors and smart gadgets.","Look at the list of connected devices and investigate any you don’t recognise."]},
     {t:"Set up a hotspot safely", how:{
       win:["Connect to your phone’s hotspot like any Wi-Fi network.","Then open **Settings → Network & internet → Wi-Fi**, select that network and turn on **Metered connection**, so Windows holds back large downloads."],
       mac:["Connect to the hotspot from the Wi-Fi menu. (iPhone hotspots may also appear under **Personal Hotspots**.)","Open **System Settings → Wi-Fi**, click **Details** next to the hotspot and turn on **Low Data Mode**."],
       chromeos:["Connect to the phone’s hotspot from the network menu. With an Android phone linked to your Chromebook, you may also see an option to use the phone’s mobile data directly (Instant Tethering), depending on phone and carrier.","Avoid large downloads and updates while on the hotspot."],
       phone:["iPhone: **Settings → Personal Hotspot** (or **Settings → Cellular/Mobile Data → Personal Hotspot**). Set a strong **Wi-Fi Password**, then turn on **Allow Others to Join**.","Android: swipe down, press and hold the **Hotspot** tile, or go to **Settings → Network & internet → Hotspot & tethering → Wi-Fi hotspot**. Set a name and strong password, then switch it on. Names vary by phone maker (Samsung: **Settings → Connections → Mobile Hotspot and Tethering**).","Turn the hotspot off when you finish."]
     }}
   ], proof:"You know which band, Wi-Fi generation and security your device uses, your router has a non-default admin password, current security and updates turned on, and you can share your phone’s connection safely."},
   read:[
     {book:"wss", where:"Background reading: Section 1.2 “Computer Hardware and Networks”, subsections “Networks” and “Network Hardware” (LANs, WANs, routers and switches; the book doesn’t cover Wi-Fi bands or router security)"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t1u4-l4", title:"How the web works", minutes:55,
   hook:{q:"You open one news article in your browser. Roughly how many separate files does the browser fetch to show it?", options:["Just one: the page itself","Two: the text and the pictures","Often dozens","None: the page is already on your device"], answer:2, reveal:"**Often dozens.** The browser first asks a web server for the page’s main HTML file, which lists the images, style sheets, scripts and fonts it needs, and then requests each one. This lesson follows that quick conversation of requests and responses, and explains cookies, the cache and why clearing it sometimes fixes a broken page."},
   goals:[
     "Explain the roles of a browser, a website and a web server",
     "Describe the requests and responses behind every page you open, and read common status codes",
     "Explain cookies and the cache in plain terms, and what clearing each one does",
     "Fix a misbehaving page by refreshing or clearing the cache",
     "Manage tabs and extensions sensibly and know what a private window does and doesn’t hide"
   ],
   learn:[
    {h:"Browsers, websites and servers", body:[
      {lead:"Every time you open a web page, two computers have a short, very fast conversation."},
      "A [[web-browser|web browser]] is the app you use to open web pages: for example Chrome, Edge, Safari, Firefox or Samsung Internet. Its job is to ask for pages and turn what comes back into something you can read, click and scroll.",
      "A [[website]] is a collection of pages and files under one domain name, such as `example.org`. Those files live on a [[web-server|web server]]: a computer, usually in a data centre (Lesson 1), running software that waits for requests and answers them. A big website may use thousands of servers in many countries, but to your browser it behaves like one.",
      "This arrangement is called **client and server**. Your browser is the client: it asks. The server serves: it answers. The same pattern sits behind most apps too. When a weather app shows today’s forecast, it has asked a server for it in much the same way.",
      {table:[
        ["Word","Plain meaning","Example"],
        ["Browser","The app that asks for and shows pages","Firefox on Lucía’s laptop"],
        ["Website","Pages and files under one domain","`example.org`"],
        ["Web page","One document on a website, with its own address","`example.org/menu`"],
        ["Web server","The computer that stores the files and answers requests","A server in a data centre"]
      ]}
    ]},
    {h:"Requests and responses", body:[
      "The conversation follows rules called [[http|HTTP]] (Hypertext Transfer Protocol). It’s a simple pattern: the browser sends a **request**, the server sends back a **response**. Here’s what happens when Lucía types `example.org/menu` and presses Enter:",
      {ol:[
        "**Find the server.** The browser looks up `example.org` with DNS (Lesson 2) to get its IP address, unless it’s already cached.",
        "**Connect securely.** It opens a connection to the server and, for HTTPS, the two agree on encryption keys so nobody in between can read what follows.",
        "**Request.** The browser sends an HTTP request, such as `GET /menu`: “please send me the page called /menu”. It includes extra details called headers: which browser it is, which languages it prefers, and any cookies it has for this site.",
        "**Response.** The server replies with a **status code** (such as `200 OK`), more headers, and the page’s main file, written in HTML.",
        "**More requests.** The HTML mentions other files: images, style sheets (which set the look), scripts (which add behaviour), fonts. The browser requests each one. A single modern page often needs dozens.",
        "**Draw the page.** As the files arrive, the browser assembles and displays the page."
      ]},
      {fig:'<svg viewBox="0 0 340 420"><defs><marker id="u4a4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="6" y="8" width="110" height="40" rx="8" stroke-width="2"/><text x="61" y="33" text-anchor="middle">Browser</text><rect class="d-sage" x="224" y="8" width="110" height="40" rx="8" stroke-width="2"/><text x="279" y="33" text-anchor="middle">Web server</text><path class="d-ink" d="M61 48 L61 414" stroke-width="1" stroke-dasharray="4 4"/><path class="d-ink" d="M279 48 L279 414" stroke-width="1" stroke-dasharray="4 4"/><text x="170" y="72" text-anchor="middle">1. Request: GET /menu</text><path class="d-ink" d="M63 82 L275 82" stroke-width="2" marker-end="url(#u4a4)"/><text class="s" x="170" y="98" text-anchor="middle">“please send the menu page”</text><text x="170" y="128" text-anchor="middle">2. Response: 200 OK</text><path class="d-ink" d="M277 138 L65 138" stroke-width="2" marker-end="url(#u4a4)"/><text class="s" x="170" y="154" text-anchor="middle">HTML + Set-Cookie: lang=es</text><text x="170" y="184" text-anchor="middle">3. GET logo, styles, scripts</text><path class="d-ink" d="M63 194 L275 194" stroke-width="2" marker-end="url(#u4a4)"/><text class="s" x="170" y="210" text-anchor="middle">one page needs many files</text><text x="170" y="240" text-anchor="middle">4. 200 OK + the files</text><path class="d-ink" d="M277 250 L65 250" stroke-width="2" marker-end="url(#u4a4)"/><text class="s" x="170" y="266" text-anchor="middle">browser keeps copies in its cache</text><text class="s" x="170" y="296" text-anchor="middle">… the next visit …</text><text x="170" y="322" text-anchor="middle">5. GET /menu + Cookie: lang=es</text><path class="d-ink" d="M63 332 L275 332" stroke-width="2" marker-end="url(#u4a4)"/><text class="s" x="170" y="348" text-anchor="middle">logo and styles come from the cache</text><text x="170" y="378" text-anchor="middle">6. 200 OK: menu in Spanish</text><path class="d-ink" d="M277 388 L65 388" stroke-width="2" marker-end="url(#u4a4)"/><text class="s" x="170" y="404" text-anchor="middle">fewer files to download</text></svg>', alt:"A browser and a web server exchange messages. 1: the browser requests GET /menu. 2: the server responds 200 OK with HTML and sets a cookie lang=es. 3: the browser requests the logo, styles and scripts. 4: the server sends them and the browser keeps copies in its cache. On the next visit, 5: the browser requests /menu and sends the cookie lang=es, using cached logo and styles. 6: the server replies with the menu in Spanish.", cap:"Requests and responses. The cookie remembers a choice; the cache saves downloading files again."},
      "The status code is a three-digit summary of the answer. You’ll meet some of them as error pages:",
      {table:[
        ["Code","Meaning","What you might see"],
        ["`200`","OK: here’s what you asked for","The page, normally"],
        ["`301`","Moved permanently","Your browser quietly follows to the new address"],
        ["`403`","Forbidden","“Access denied”: you’re not allowed to see it"],
        ["`404`","Not found","The page doesn’t exist (old link, or a typo)"],
        ["`500`","Server error","Something broke on the website’s side"],
        ["`503`","Service unavailable","The site is overloaded or down for maintenance, usually temporary"]
      ]},
      {tip:"Codes starting with 4 usually mean a problem with the request (a wrong address, no permission). Codes starting with 5 mean a problem at the server. A 5xx error is the website’s fault, not yours: wait and try again later."}
    ]},
    {h:"HTTP and HTTPS", body:[
      "Plain HTTP sends requests and responses as readable text, so anyone on the network path could read or change them. [[https|HTTPS]] is the same conversation inside an encrypted connection. Unit 3 explained what that protects on public Wi-Fi (see {{public-wifi-https}}).",
      "Today, almost all websites use HTTPS, and browsers warn with “Not secure” when one doesn’t. Remember the key point from Unit 3: the padlock means the connection is private, **not** that the site is honest. A scam site can have a padlock too."
    ]},
    {h:"Cookies, in plain terms", body:[
      "HTTP has no memory. Each request arrives at the server on its own, as if from a stranger. So how does a shop remember what’s in your basket, or a site remember that you’re signed in?",
      "A [[cookie]] is a small piece of text that a website asks your browser to store, and that your browser sends back with every later request to the same site. Think of a cloakroom ticket: the site hands you a numbered ticket, and each time you come back you show it, so the site can find your coat (your basket, your sign-in, your settings).",
      {table:[
        ["What cookies do","Example"],
        ["Keep you signed in","You don’t have to type your password on every page"],
        ["Remember a basket","Items stay in your basket while you browse"],
        ["Remember preferences","Language, dark mode, region"],
        ["Measure and track","Counting visits; some cookies follow you across sites for advertising"]
      ]},
      "Some cookies last only until you close the browser (session cookies); others are kept for days or years (persistent cookies). Cookies set by the site you’re visiting are first-party; those set by other companies whose content is embedded on the page, often advertisers, are called **third-party cookies**. Unit 5 covers the privacy side in depth. Some browsers, such as Safari and Firefox, limit third-party cookies by default; Chrome still allows them unless you change its settings.",
      {key:"A cookie is the site’s ticket stored in your browser. Delete it, and the site forgets you: you’ll be signed out and your preferences reset."}
    ]},
    {h:"The cache, and why clearing it can fix things", body:[
      "The browser [[cache]] is a store of copies of files from sites you’ve visited: logos, images, style sheets, scripts. Next time, the browser can use its copy instead of downloading the file again, so pages load faster and use less data.",
      "Usually this is invisible and helpful. Occasionally it goes wrong. A site updates its design, but your browser keeps using an old style sheet with a new page, and the layout breaks. Or a damaged file in the cache makes a page fail to load, or loop back to sign-in. Other people see the site fine; you don’t.",
      {ex:"Kenji’s online banking page looks scrambled after the bank changed its design, and the Log in button does nothing. On his phone, the site works.\nStep 1: Hard refresh the page (on Windows and ChromeOS, [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:R]] in most browsers; on a Mac, [[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:R]] in Chrome, Edge and Firefox). This reloads the page and its files instead of using cached copies.\nStep 2: Still broken? Clear the browser’s **cached images and files**. This doesn’t sign him out.\nStep 3: Only if that fails, clear that site’s **cookies and site data** too. He’ll need to sign in again.", label:"Worked example: a stale cache"},
      {table:[
        ["If you clear…","You lose","You keep"],
        ["Cached images and files","Saved copies of site files; pages load a little slower at first","Sign-ins, settings, history"],
        ["Cookies and site data","Sign-ins and site preferences","Saved passwords (in your password manager), bookmarks"],
        ["Browsing history","The list of pages you visited","Everything else, unless you tick more boxes"]
      ]},
      {tip:"Clear only what you need, and for one site if you can. Clearing everything for “all time” signs you out of every website at once, which is a nuisance if you don’t have your passwords handy."}
    ]},
    {h:"Tabs, extensions and private windows", body:[
      "**Tabs.** Each open tab is a page your browser keeps alive, using memory ([[ram]]). Dozens of tabs can slow an older computer. Most browsers now put tabs you haven’t looked at for a while to sleep (Chrome calls this Memory Saver; Edge calls it sleeping tabs). If your device crawls, closing tabs is a quick first step (see {{task-manager}}).",
      "**Extensions.** A [[browser-extension|browser extension]] (or add-on) is a small program that adds features to your browser: a password manager, an ad blocker, a translator. Some need wide access, such as permission to “read and change all your data on all websites”. That is powerful: a bad or hijacked extension could see everything you type into web pages.",
      {list:[
        "Install extensions only from your browser’s official store, from publishers you recognise.",
        "Read the permissions before you add one. Do they match what it does?",
        "Keep few, and remove the ones you no longer use.",
        "Be wary of extensions you’re pushed to install by a pop-up or a stranger."
      ]},
      "**Private windows** (Incognito in Chrome, InPrivate in Edge, Private Browsing in Safari and Firefox) don’t save your history, cookies or form entries **on that device** after you close them. They don’t hide what you do from the websites you visit (especially if you sign in), from the network you’re on, from your ISP, or from an employer or school that manages the device.",
      {warn:"A private window is useful on a shared computer, so the next person doesn’t see your activity or stay signed in to your accounts. It isn’t an invisibility cloak."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“A web page is one file.”** It’s usually dozens: HTML, images, styles, scripts and fonts, each requested separately.",
        "**“Cookies are viruses or spyware.”** They’re small pieces of text a site stores in your browser. Most do ordinary jobs like keeping you signed in; some are used for tracking (Unit 5).",
        "**“Clearing the cache deletes my passwords.”** Clearing cached files doesn’t. Clearing cookies signs you out, but saved passwords stay unless you choose to delete them too.",
        "**“A 404 means my internet is broken.”** It means the server answered: that page doesn’t exist. Your connection worked fine.",
        "**“Private mode hides me from everyone.”** It only stops the device keeping a record.",
        "**“More extensions make the browser better.”** Each one is more code with access to your pages. Fewer is safer."
      ]}
    ]}
   ],
   try:[
    {id:"t1u4-l4-x1", type:"order", q:"Mei types `example.org/timetable` and presses Enter. Put what happens in order.", items:[
      {t:"The browser finds example.org’s IP address using DNS (or its cache).", why:"Nothing can be sent until the browser knows where the server is."},
      {t:"It connects to the server and sets up HTTPS encryption.", why:"The secure connection comes before any page content is exchanged."},
      {t:"It sends an HTTP request: GET /timetable.", why:"The request asks for one specific page."},
      {t:"The server responds with 200 OK and the page’s HTML.", why:"The status code says it worked; the HTML is the page’s main file."},
      {t:"The browser requests the images, styles and scripts the HTML mentions.", why:"Each extra file is its own request."},
      {t:"The browser draws the finished page on screen.", why:"Rendering happens as the files arrive, finishing once they’re all in."}
    ]},
    {id:"t1u4-l4-x2", type:"match", q:"Match each HTTP status code to what it means for you.", pairs:[
      ["200","Everything worked: here’s the page","200 OK is the normal, successful response."],
      ["301","The page has moved; your browser follows to the new address","A permanent redirect. You usually don’t notice it."],
      ["404","The page doesn’t exist: a broken link or a typo","The server is fine and answered; that particular page isn’t there."],
      ["403","You’re not allowed to see this","Forbidden: the server understood but refuses, because you don’t have permission to see that page."],
      ["503","The site is overloaded or under maintenance; try later","A 5xx code is a problem on the server’s side, usually temporary."]
    ]},
    {id:"t1u4-l4-x3", type:"sort", q:"Where is each thing usually kept: in the browser’s cache, or in a cookie?", buckets:["Cache (copies of files)","Cookie (a small note the site asked to store)"], items:[
      {t:"A copy of a website’s logo image", b:0, why:"Images are files; the browser keeps copies so it needn’t download them again."},
      {t:"A copy of a site’s style sheet", b:0, why:"Style sheets are files that rarely change, so they’re cached."},
      {t:"Proof that Priya is signed in", b:1, why:"Sign-in is remembered by a session cookie the browser sends with each request."},
      {t:"Tomás’s choice of Spanish as the site language", b:1, why:"Preferences are typically stored in a cookie so the server can tailor the response."},
      {t:"The items in a shopping basket on a site where Ana hasn’t signed in", b:1, why:"Without an account, a cookie (or similar site storage) links the basket to her browser."},
      {t:"A copy of a script that makes a menu open", b:0, why:"Scripts are files, cached like images and styles."}
    ]},
    {id:"t1u4-l4-x4", type:"mcq", q:"After a shop updated its website, Fatima sees a broken layout and the checkout button doesn’t work. Her colleague’s computer shows the site normally. What should she try first?", options:[
      {t:"A hard refresh, then clearing cached images and files if that doesn’t work", ok:true, why:"The pattern (broken for her, fine for others, right after an update) suggests her browser is mixing old cached files with the new page. A hard refresh or clearing the cache fetches fresh copies without signing her out."},
      {t:"Reinstall the operating system", why:"Far too drastic. The problem is a few stale files in one browser."},
      {t:"Clear all cookies, history and passwords for all time", why:"Deleting everything would sign her out of every site and could lose saved data. Start with the least disruptive fix."},
      {t:"Assume the shop’s website is down and try tomorrow", why:"Her colleague can use it, so the site is up. Something on her side is different: her cache."}
    ]},
    {id:"t1u4-l4-x5", type:"mcq", q:"Dmitri clears **cookies and site data** in his browser. What will he notice?", options:[
      {t:"He’s signed out of websites and some site settings, like language, are reset.", ok:true, why:"Cookies hold sign-ins and preferences. Without them, sites treat him as a new visitor."},
      {t:"All his saved passwords are deleted.", why:"Saved passwords are separate. They’re only deleted if he also chooses “Passwords” when clearing."},
      {t:"His bookmarks disappear.", why:"Bookmarks aren’t cookies and aren’t affected."},
      {t:"His internet connection becomes faster.", why:"Clearing cookies doesn’t change connection speed. If anything, pages may load slightly slower at first."}
    ]},
    {id:"t1u4-l4-x6", type:"mcq", q:"A pop-up tells Sione to install a free “PDF converter” browser extension. It asks for permission to “read and change all your data on all websites”. Which are sensible responses? Choose all that apply.", options:[
      {t:"Don’t install it from the pop-up; if he needs a converter, look in the browser’s official store for a well-known publisher", ok:true, why:"Pop-ups pushing extensions are a common trick. Official stores and recognised publishers are much safer."},
      {t:"Question why a converter needs access to every website", ok:true, why:"Permissions should match the job. Access to all sites would let it see everything he types, including on banking pages."},
      {t:"While he’s at it, check the extensions he already has and remove any he doesn’t use or recognise", ok:true, why:"Fewer extensions means fewer programs with access to his pages."},
      {t:"Install it, because extensions can’t see what he types", why:"Extensions with broad permissions can read and change page content, including forms."},
      {t:"Install it and use a private window to stay safe", why:"Private windows don’t stop a malicious extension (some extensions can run in private windows if allowed)."}
    ]},
    {id:"t1u4-l4-x7", type:"mcq", q:"Hana uses a private window on a library computer to check her email, then closes it. Who could still know which sites she visited?", options:[
      {t:"The library’s network and its ISP, and the websites she visited", ok:true, why:"Private windows only stop the computer keeping history and cookies afterwards. The network and the sites themselves still see the connections."},
      {t:"Nobody: private windows make browsing invisible", why:"A common misconception. Private mode affects only what’s stored on that device."},
      {t:"Only the next person who uses the computer", why:"The opposite: the next user is the one person private mode protects her from (as long as she closed the window)."},
      {t:"Only her email provider, because she signed in", why:"Her email provider knows, but so do other sites she visited and the network she used."}
    ]}
   ],
   apply:{intro:"Get to know your browser’s cookie, cache and extension settings. You won’t need to delete anything important.", tasks:[
     {t:"Look at one site’s cookies and data", how:{
       win:["In Chrome or Edge, open a site you use, then select the icon at the left end of the address bar.","Choose **Cookies and site data** (or **Cookies**). You’ll see how many cookies the site has set; you can delete them for that site only."],
       mac:["In Safari: **Safari → Settings → Privacy → Manage Website Data**. Search for a site to see that it stores data; you can remove one site’s data.","In Chrome, Edge or Firefox, select the icon at the left end of the address bar for the site’s cookies."],
       chromeos:["In Chrome, open a site, select the icon at the left end of the address bar, then **Cookies and site data**."],
       phone:["iPhone: **Settings → Apps → Safari → Advanced → Website Data** (on older iOS versions, **Settings → Safari → Advanced**). Each site storing data is listed.","Android Chrome: open the site, tap the icon at the left end of the address bar, then **Cookies and site data** (wording varies)."]
     }},
     {t:"Fix a misbehaving page", how:{
       win:["First, hard refresh: [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:R]] (or [[kbd:Ctrl]] + [[kbd:F5]]).","Edge: **Settings and more (…) → Settings → Privacy, search, and services**, then under **Clear browsing data**, **Choose what to clear**. Pick a time range, tick only **Cached images and files**, and select **Clear now**.","Chrome: **⋮ → Delete browsing data**. Pick a time range, tick **Cached images and files**, and select **Delete data**."],
       mac:["Chrome, Edge or Firefox: hard refresh with [[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:R]], or clear cached files from the browser’s settings as on Windows.","Safari: **Safari → Settings → Privacy → Manage Website Data**, select the problem site and choose **Remove**. (This removes its cookies too, so you may need to sign in again.)"],
       chromeos:["Hard refresh: [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:R]].","Or **⋮ → Delete browsing data**, tick **Cached images and files** only, and select **Delete data**."],
       phone:["iPhone Safari: to clear cookies and cache but keep history, **Settings → Apps → Safari → Advanced → Website Data → Remove All Website Data** (you may be signed out of sites). On older iOS: **Settings → Safari**.","Android Chrome: **⋮ → Delete browsing data** (or **⋮ → Settings → Privacy and security → Delete browsing data**). Tick **Cached images and files** only, then delete."]
     }},
     {t:"Review your extensions", how:{
       win:["Chrome: type `chrome://extensions` in the address bar. Edge: `edge://extensions`. Firefox: `about:addons`.","For each extension, ask: Do I use it? Do I know who made it? Remove any you don’t need."],
       mac:["Safari: **Safari → Settings → Extensions**. Chrome, Edge and Firefox: as on Windows.","Remove anything you don’t use or don’t recognise."],
       chromeos:["Type `chrome://extensions` in the address bar, review each one and remove what you don’t need."],
       phone:["iPhone: **Settings → Apps → Safari → Extensions** (older iOS: **Settings → Safari → Extensions**).","Android: most phone browsers have few or no extensions; if yours does, check them in its settings."]
     }}
   ], proof:"You can see a site’s cookies, you know how to hard refresh and clear only cached files, and you’ve removed any extensions you don’t use."},
   read:[
     {book:"wss", where:"Section 1.3 “The Internet, Cloud Computing, and the Internet of Things”, subsection “Using the Internet” (browsers)"},
     {book:"wss", where:"Section 1.4 “Safety, Security, Privacy, and the Ethical Use of Technology”, subsections “Cookies”, “Browsing History” and “Temporary Files”"},
     {book:"ics", where:"Section 11.1 “Modern Web Applications Architectures”, opening and “Server-Side Rendering and MVC Patterns” (HTTP requests and responses between browsers and web servers)"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t1u4-l5", title:"Speed, data and connection quality", minutes:55,
   hook:{q:"Online games feel laggy at home, so you upgrade from a 100 Mbps plan to a 500 Mbps plan. What most likely happens to the lag?", options:["It disappears: five times the speed","It probably barely changes","It gets worse","It halves"], answer:1, reveal:"It **probably barely changes**. Plans advertise [[bandwidth]], how much data arrives per second, like the width of a road. Lag is usually about [[latency]], how long each round trip takes, like the length of the trip. This lesson untangles the two and shows how to read a speed test and find what’s really slowing you down."},
   goals:[
     "Tell bandwidth from latency and say which one an activity needs",
     "Convert Mbps into realistic download times, and explain upload vs download",
     "Read a speed test and test your connection fairly",
     "Cut mobile data use and prepare to work offline",
     "Rescue a video call on a weak connection"
   ],
   learn:[
    {h:"Two different kinds of “fast”", body:[
      {lead:"An internet connection can be fast in two quite different ways, and most frustrations come from mixing them up."},
      "[[bandwidth|Bandwidth]] is how much data a connection can carry per second. It’s what internet plans advertise, in megabits per second ([[mbps|Mbps]]) or gigabits per second (Gbps). Think of it as the **width of a road**: more lanes, more cars at once.",
      "[[latency|Latency]] is the delay: how long it takes for a small piece of data to get to the other end and for a reply to come back, measured in milliseconds (ms). Speed tests often call it **ping**. Think of it as the **length of the trip**: even an empty, eight-lane road takes a while if it crosses a continent.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="u4a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">Bandwidth: how much per second</text><rect class="d-panel" x="20" y="32" width="300" height="64" rx="6" stroke-width="2"/><path class="d-ink" d="M24 48 L316 48 M24 64 L316 64 M24 80 L316 80" stroke-width="1" stroke-dasharray="6 6"/><rect class="d-lup" x="40" y="35" width="26" height="10" rx="2"/><rect class="d-lup" x="110" y="51" width="26" height="10" rx="2"/><rect class="d-lup" x="70" y="67" width="26" height="10" rx="2"/><rect class="d-lup" x="180" y="83" width="26" height="10" rx="2"/><rect class="d-lup" x="220" y="35" width="26" height="10" rx="2"/><rect class="d-lup" x="260" y="67" width="26" height="10" rx="2"/><text class="s" x="170" y="114" text-anchor="middle">wide: lots of data at once</text><rect class="d-panel" x="20" y="126" width="300" height="18" rx="6" stroke-width="2"/><rect class="d-lup" x="150" y="130" width="26" height="10" rx="2"/><text class="s" x="170" y="162" text-anchor="middle">narrow: big files take longer</text><text x="170" y="200" text-anchor="middle">Latency: how long each trip takes</text><circle class="d-gold" cx="30" cy="226" r="8" stroke-width="2"/><path class="d-ink" d="M40 226 L118 226" stroke-width="2" marker-end="url(#u4a5)"/><text class="s" x="200" y="230" text-anchor="middle">nearby server: quick reply</text><circle class="d-gold" cx="30" cy="262" r="8" stroke-width="2"/><path class="d-ink" d="M40 262 L318 262" stroke-width="2" marker-end="url(#u4a5)"/><text class="s" x="180" y="282" text-anchor="middle">far away or via satellite: slower reply</text><text class="s" x="170" y="314" text-anchor="middle">A wide road can still be a long trip.</text></svg>', alt:"Top: a wide road with many cars side by side, labelled lots of data at once, and a narrow road with one car, labelled big files take longer. Bottom: a short arrow to a nearby server gets a quick reply; a long arrow to a far-away server or via satellite gets a slower reply.", cap:"Bandwidth is the width of the road; latency is the length of the trip. You need both."},
      {table:[
        ["Activity","Mostly needs","Why"],
        ["Downloading a big file or backing up photos","Bandwidth","Lots of data; a small delay at the start doesn’t matter"],
        ["Streaming a film","Bandwidth","A steady flow of data; the app buffers ahead"],
        ["Video calls","Both, plus steadiness","Live audio and video can’t be buffered much"],
        ["Online games","Low latency","Each action needs a quick reply"],
        ["Loading web pages","Both","Many small requests, each a round trip (Lesson 4)"]
      ]},
      "Two more measures appear in some speed tests. **Jitter** is how much the latency jumps around; steady matters for calls. **Packet loss** is the share of packets that never arrive (Lesson 1); for calls, even a little shows up as robotic voices and frozen video.",
      {key:"Bandwidth decides how quickly big things arrive. Latency decides how quickly anything starts and how responsive live things feel."}
    ]},
    {h:"Megabits, megabytes and download times", body:[
      "Unit 1 explained the trap: connection speeds are in **bits** per second (small b: Mbps), but file sizes are in **bytes** (big B: MB, GB). One byte is 8 bits, so divide Mbps by 8 to get megabytes per second (see {{file-size-units}}).",
      {ex:"Ana wants to download a 1.5 GB video on a 100 Mbps connection.\n1.5 GB = 1,500 MB.\n1,500 MB × 8 = 12,000 megabits.\n12,000 megabits ÷ 100 Mbps = 120 seconds = 2 minutes.\nIn practice it will take a bit longer: Wi-Fi, other people using the connection and the server’s own speed all eat into the headline figure.", label:"Worked example: how long will it take?"},
      "Plans usually say “up to” a speed. That’s the best case, on a device plugged into the router by cable, with nobody else using the line. Your real speed varies with the time of day (evenings are busier), your Wi-Fi, and how many devices are sharing the connection."
    ]},
    {h:"Upload vs download", body:[
      "To [[download]] is to receive data: opening pages, streaming, downloading files. To [[upload]] is to send data: posting photos, backing up to the cloud, sending large attachments, and your own camera and microphone in a video call.",
      "Many home connections are **asymmetric**: much faster down than up. Cable and phone-line plans often are; fibre plans are more often the same in both directions. This matters if you upload a lot.",
      {table:[
        ["Zoom video call (from Zoom’s published requirements)","Up","Down"],
        ["One-to-one, 720p HD","1.2 Mbps","1.2 Mbps"],
        ["Group call, 720p HD","2.6 Mbps","1.8 Mbps"],
        ["Group call, 1080p HD","3.8 Mbps","3.0 Mbps"],
        ["Audio only","60–80 kbps","60–80 kbps"]
      ]},
      {ex:"Priya’s plan gives 200 Mbps down but only 10 Mbps up. Netflix and YouTube work perfectly. But when her phone backs up 2,000 holiday photos to the cloud during a family video call, the upload is full and her call freezes for everyone else. Pausing the backup (or scheduling it for the night) fixes it.", label:"Worked example: when upload is the bottleneck"},
      {tip:"Video uses far more data than audio. On a struggling call, turning off your own camera frees most of your upload."}
    ]},
    {h:"Reading a speed test", body:[
      "A speed test sends and receives test data between your device and a nearby test server, then reports what it measured. Many free tests exist, for example from M-Lab, Ookla or Cloudflare, and some ISPs build one into their app. They report similar things:",
      {table:[
        ["Result","What it measures","Good to know"],
        ["Download (Mbps)","How fast data reached you","Compare with your plan’s “up to” figure"],
        ["Upload (Mbps)","How fast you sent data","Often much lower than download"],
        ["Ping / latency (ms)","Round-trip delay to the test server","Lower is better"],
        ["Jitter (ms)","How much the delay varies","Lower and steadier is better for calls"],
        ["Loaded or working latency","Delay while the line is busy","Big jumps mean calls suffer when others download"]
      ]},
      "To find out whether the problem is your plan or your Wi-Fi, test fairly:",
      {ol:[
        "Pause downloads, backups and streaming on other devices.",
        "Test on a device connected **by cable** to the router if you can. That measures the line from your ISP.",
        "Test again on Wi-Fi next to the router, then in the room where things are slow.",
        "Repeat at a different time of day."
      ]},
      "If the cabled result is close to your plan but the far room is slow, the problem is Wi-Fi coverage (Lesson 3: move the router, add mesh or use a cable). If even the cabled result is far below the plan, contact your ISP with your results.",
      {table:[
        ["Streaming (from each service’s help pages)","Recommended steady speed"],
        ["Netflix HD (720p)","3 Mbps or more"],
        ["Netflix Full HD (1080p)","5 Mbps or more"],
        ["Netflix 4K","15 Mbps or more"],
        ["YouTube 4K","20 Mbps"]
      ]},
      "These are for one stream. Add them up for a household: three people streaming HD at once need roughly three times as much."
    ]},
    {h:"Data caps and saving mobile data", body:[
      "A [[data-cap|data cap]] is the amount of data your plan includes each month. Most mobile plans have one; some home plans do too. Video is by far the biggest user. Netflix’s help pages, for example, say an hour of high-definition video uses up to 3 GB and 4K up to 7 GB, while its lowest setting uses up to 0.3 GB.",
      "Your devices can help you save data:",
      {table:[
        ["Device","Setting","What it does"],
        ["iPhone and iPad","**Low Data Mode** (Settings → Cellular or Mobile Data; also per Wi-Fi network)","Pauses background refresh, automatic downloads and backups; lowers streaming quality"],
        ["Android","**Data Saver** (Settings → Network & internet)","Most apps can only use background data on Wi-Fi"],
        ["Windows 11","**Metered connection** (on a network’s settings)","Limits background downloads, including most Windows updates"],
        ["Mac","**Low Data Mode** (System Settings → Wi-Fi → Details)","Reduces data use on that network, useful on a hotspot"]
      ]},
      {list:[
        "Set video apps to download or stream in lower quality on mobile data.",
        "Download podcasts, music and films on Wi-Fi before you travel.",
        "Turn on “Wi-Fi only” for photo backups and app updates.",
        "Check the data-usage page in your phone’s settings to see which apps use the most."
      ]}
    ]},
    {h:"Working offline", body:[
      "Sometimes there’s no connection at all: on a plane, in the countryside, underground, or during an outage. Many apps have an [[offline-mode|offline mode]] if you prepare **while you still have a connection**:",
      {table:[
        ["What","How to prepare","Limits"],
        ["Maps","Download an area in Google Maps or Apple Maps (iOS 17 or later)","Google Maps offers only driving directions offline; Apple Maps also offers walking, cycling and transit. Maps expire or need updates."],
        ["Music, podcasts, video","Use the app’s download button","Some subscriptions limit how long downloads last"],
        ["Cloud files","Mark files or folders as available offline (see {{cloud-storage}})","Changes sync when you reconnect; watch for conflicts ({{sync}})"],
        ["Documents and email","Turn on offline mode in your office or mail app","Messages wait in the outbox until you’re online"]
      ]},
      {ex:"Lucía is flying to visit family and then taking a rural bus with no signal. The evening before, on home Wi-Fi, she downloads the town’s map, two podcast episodes and a playlist, and marks her travel documents folder as available offline. On the bus, everything she needs opens without a connection.", label:"Worked example: preparing for a trip"},
      {warn:"Airplane mode turns off the radios; it doesn’t download anything. Offline content has to be saved before you lose the connection."}
    ]},
    {h:"Video calls on a weak connection", body:[
      "When a call breaks up, work through these in order, from quickest to most effort:",
      {ol:[
        "**Turn off your camera.** Video uses many times more data than audio, so this frees the most upload at once.",
        "**Stop other traffic.** Pause cloud backups, big downloads and streaming on your devices, and ask others at home to pause theirs for a few minutes.",
        "**Improve the link.** Move closer to the router, or plug in a cable.",
        "**Change route.** If home Wi-Fi is the problem, try your phone’s mobile data (or the other way round).",
        "**Fall back to audio.** Many meeting services let you join by phone call instead."
      ]},
      {h:"Common misconceptions"},
      {list:[
        "**“A 100 Mbps plan downloads 100 MB per second.”** It downloads about 12.5 MB per second at best: divide by 8.",
        "**“More bandwidth fixes laggy games and calls.”** Lag is usually latency, jitter or a busy upload, not download bandwidth.",
        "**“Speed tests measure my Wi-Fi.”** They measure the whole path from your device to the test server. Test by cable to separate Wi-Fi from your line.",
        "**“Mobile data is always slower than Wi-Fi.”** Not always: a good 5G signal can beat a crowded café Wi-Fi.",
        "**“Airplane mode lets apps work offline.”** Only content you downloaded beforehand works offline."
      ]}
    ]}
   ],
   try:[
    {id:"t1u4-l5-x1", type:"number", q:"Tomás downloads a 1.5 GB file on a 100 Mbps connection. In the best case, how many **seconds** will it take? (Use 1 GB = 1,000 MB.)", answer:120, tol:1, unit:"seconds", why:"1.5 GB = 1,500 MB. 1,500 MB × 8 = 12,000 megabits. 12,000 ÷ 100 = 120 seconds (2 minutes). Real downloads are usually a little slower.", wrongs:[
      {v:15, tol:0.5, why:"That divides megabytes by megabits without converting. Connection speeds are in bits; multiply megabytes by 8 first."},
      {v:122.88, tol:0.5, why:"That uses 1 GB = 1,024 MB (binary units). The question says 1 GB = 1,000 MB, the decimal units used for downloads."},
      {v:12000, tol:1, why:"12,000 is the size in megabits. Divide by the speed (100 megabits per second) to get the time."},
      {v:1.2, tol:0.05, why:"That’s 120 divided by 100, perhaps mixing up seconds and minutes. The time is 120 seconds (2 minutes)."}
    ], hint2:"Turn gigabytes into megabytes, megabytes into megabits (× 8), then divide by the speed."},
    {id:"t1u4-l5-x2", type:"sort", q:"Is each problem mainly about bandwidth (how much at once) or latency (delay)?", buckets:["Bandwidth","Latency"], items:[
      {t:"A 4K film drops to blurry quality when everyone at home streams at once", b:0, why:"Several streams share the connection’s capacity; there isn’t enough for all at full quality."},
      {t:"In a call, people keep talking over each other because replies arrive late", b:1, why:"That’s delay on each round trip: latency."},
      {t:"A full laptop backup takes all night", b:0, why:"Lots of data; the limit is how much can move per second."},
      {t:"In an online game, actions happen a moment after you press the button", b:1, why:"Each action must make a round trip to the game server; that delay is latency."},
      {t:"Sending a 2 GB video to a colleague takes 40 minutes", b:0, why:"A large upload limited by upload bandwidth."},
      {t:"A satellite connection feels sluggish when clicking links, even though big downloads are quick", b:1, why:"Long distances add delay to every request, even when the bandwidth is high."}
    ]},
    {id:"t1u4-l5-x3", type:"spot", q:"Oluwaseun runs a small video-editing business from home. He uploads large files and is on video calls all day, and says his internet is “slow”. Here is his speed test, taken on a laptop next to the router. Tap the results that explain his problem.", ask:"explains his problem", parts:[
      "Download: ", {t:"350 Mbps", flag:false, why:"Plenty for downloading and streaming. His complaint isn’t about receiving data."},
      "\nUpload: ", {t:"8 Mbps", flag:true, why:"Very low for uploading large video files, and a group HD call alone can need several Mbps up. This is his main bottleneck."},
      "\nPing: ", {t:"14 ms", flag:false, why:"Low delay: good for calls."},
      "\nJitter: ", {t:"2 ms", flag:false, why:"Steady: good for calls."},
      "\nLoaded latency while uploading: ", {t:"420 ms", flag:true, why:"When his upload is busy, delay shoots up. That’s why calls break up while files are uploading."},
      "\nTest server: ", {t:"in his own city", flag:false, why:"A nearby server is normal and gives a fair reading."}
    ], why:"His fix is about upload: a plan with faster upload (fibre plans are often symmetric), or scheduling big uploads outside call times."},
    {id:"t1u4-l5-x4", type:"number", q:"A one-to-one HD video call uses about 1.2 Mbps in each direction. How many **megabytes** does one hour of the call **download**? (1 byte = 8 bits; 1 hour = 3,600 seconds.)", answer:540, tol:5, unit:"MB", why:"1.2 megabits per second × 3,600 seconds = 4,320 megabits. ÷ 8 = 540 megabytes. Uploading your own video uses about the same again, so roughly 1 GB per hour in total, which matters on a mobile data plan.", wrongs:[
      {v:4320, tol:10, why:"That’s megabits. Divide by 8 to turn bits into bytes."},
      {v:1080, tol:10, why:"That adds upload and download together. The question asks only for the download side."},
      {v:72, tol:1, why:"That multiplies by 60 (minutes) instead of 3,600 (seconds). Mbps means megabits per **second**."},
      {v:9, tol:0.5, why:"That divides 72 by 8: two slips, using minutes instead of seconds. Use 3,600 seconds."}
    ], hint2:"Megabits per second × seconds = megabits. Then ÷ 8."},
    {id:"t1u4-l5-x5", type:"mcq", q:"Fatima’s video call at home keeps freezing. Which steps are likely to help? Choose all that apply.", options:[
      {t:"Turn off her own camera for a while", ok:true, why:"Video uses far more data than audio, so this frees most of her upload at once."},
      {t:"Pause the cloud photo backup running on her phone", ok:true, why:"Backups upload continuously and compete with her call’s upload."},
      {t:"Move closer to the router or plug in a cable", ok:true, why:"A stronger or wired link reduces lost packets and delay."},
      {t:"Open more browser tabs so the call has more connections", why:"More tabs only add traffic and memory use. They don’t help the call."},
      {t:"Clear her browser’s cookies", why:"Cookies have nothing to do with call quality, and clearing them would sign her out of sites."}
    ]},
    {id:"t1u4-l5-x6", type:"match", q:"Match each data-saving setting to the system it belongs to.", pairs:[
      ["Low Data Mode under Cellular or Mobile Data","iPhone and iPad","Settings → Cellular (or Mobile Data) → Cellular Data Options."],
      ["Data Saver","Android","Settings → Network & internet → Data Saver on most phones."],
      ["Metered connection","Windows 11","Settings → Network & internet → Wi-Fi → your network."],
      ["Low Data Mode under Wi-Fi → Details","Mac","System Settings → Wi-Fi → Details next to the network."]
    ]},
    {id:"t1u4-l5-x7", type:"mcq", q:"Kenji is about to drive into a mountain area with no signal. He’ll need directions there. What should he do before he leaves?", options:[
      {t:"Download an offline map of the area in his maps app while he still has a connection", ok:true, why:"Offline maps must be saved in advance. Both Google Maps and Apple Maps (iOS 17 or later) offer driving directions offline within the downloaded area."},
      {t:"Turn on airplane mode so the map keeps working", why:"Airplane mode just switches off the radios. It doesn’t download anything."},
      {t:"Nothing: maps apps work everywhere because GPS is free", why:"GPS can show where he is without data, but the map itself and directions need to be downloaded unless they’re saved offline."},
      {t:"Clear his maps app’s cache so it has room", why:"Clearing the cache removes saved data. He needs to save more, not less."}
    ]},
    {id:"t1u4-l5-x8", type:"mcq", q:"Which of these activities depends **most** on upload speed?", options:[
      {t:"Backing up 500 phone photos to cloud storage", ok:true, why:"Backups send data from your device to the cloud, so upload speed sets the pace."},
      {t:"Streaming a film", why:"Streaming is almost entirely download."},
      {t:"Reading the news", why:"Pages are mostly downloaded; your requests are tiny."},
      {t:"Downloading a game update", why:"That’s download, by definition."}
    ]}
   ],
   apply:{intro:"Measure your connection fairly, turn on data saving where it helps, and prepare one thing for offline use.", tasks:[
     {t:"Run a fair speed test", how:["Pause big downloads, backups and streaming on other devices.","Open a speed test site or your ISP’s app. If you can, run it on a computer connected **by cable** to the router.","Run it again on Wi-Fi next to the router, and then in the room where things feel slow.","Write down download, upload and ping (latency) each time, and compare with the “up to” speeds in your plan.","If the cabled result is fine but the far room is slow, improve Wi-Fi (Lesson 3). If even the cabled result is poor, contact your ISP with your notes."]},
     {t:"Turn on data saving where you pay for data", how:{
       win:["For a hotspot or a capped connection: **Settings → Network & internet → Wi-Fi**, select the network and turn on **Metered connection**.","Optional: on the same page, **Set a data limit** to get a warning before you use too much."],
       mac:["**System Settings → Wi-Fi**, click **Details** next to the hotspot or capped network, and turn on **Low Data Mode**."],
       chromeos:["ChromeOS has no single low-data switch for every network. On mobile data or a hotspot, avoid large downloads, and set streaming apps to lower quality."],
       phone:["iPhone: **Settings → Cellular** (or **Mobile Data**) **→ Cellular Data Options**, then turn on **Low Data Mode** (on some 5G iPhones: **Data Mode → Low Data Mode**). Scroll down the Cellular page to see which apps use the most data.","Android: **Settings → Network & internet → Data Saver** and turn it on. Use **Unrestricted data** to exempt apps you trust. On Samsung phones: **Settings → Connections → Data usage → Data saver**. Names vary by phone maker."]
     }},
     {t:"Prepare something for offline use", how:{
       win:["OneDrive: in **File Explorer**, right-click a folder you’ll need and choose **Always keep on this device**.","Google Drive for desktop or other cloud apps: look for a similar **Available offline** option."],
       mac:["iCloud Drive: in **Finder**, Control-click a folder and choose **Keep Downloaded** (wording varies by macOS version).","Other cloud apps: look for **Available offline** or **Make available offline**."],
       chromeos:["Open the **Files** app, go to **Google Drive**, select a file or folder and turn on **Available offline**. (You may first need to turn on offline access in Google Drive’s settings.)"],
       phone:["Maps: in Google Maps, tap your profile picture → **Offline maps → Select your own map → Download**. In Apple Maps (iOS 17 or later), tap your picture or initials → **Offline Maps**, tap the add button, choose an area and tap **Download**.","Music and podcasts: tap the download button in your app while on Wi-Fi."]
     }}
   ], proof:"You have a fair speed-test record (cable or near the router, and in a far room), data saving set up on any capped connection, and at least one map, playlist or folder ready to use offline."},
   read:[
     {book:"wss", where:"Background reading: Section 1.2 “Computer Hardware and Networks”, subsection “Networks” (protocols: TCP/IP for packets and UDP for time-sensitive video playback). The book doesn’t cover speed tests or data saving."}
   ]
  }
  ],
  checkpoint:["t1u4-q02","t1u4-q06","t1u4-q11","t1u4-q14","t1u4-q17","t1u4-q21","t1u4-q24","t1u4-q27","t1u4-q32","t1u4-q35","t1u4-q39","t1u4-q43"],
  codex:[
   {id:"how-the-internet-works", title:"How the internet works", aka:["internet","network of networks","ISP","LAN","WAN","internet vs web"], tags:["networks","basics"],
    summary:"The internet is a network of separately owned networks that pass each other’s data, using shared rules.",
    levels:{
     starter:[
      "A [[network]] is devices connected so they can share data: your phone, laptop and printer on home Wi-Fi form one. The [[internet]] is millions of networks joined together, which is why it’s called a **network of networks**.",
      "Nobody owns the whole thing. Your [[isp|internet service provider (ISP)]] connects your home or phone to its network; it connects to other networks; and so on around the world. They all follow the same rules, called [[protocol|protocols]], so any device can talk to any other.",
      "The internet is the delivery system. The World Wide Web, email, video calls, games and app updates are services that travel over it. That’s why one website can be down while your messaging app still works.",
      {key:"Think of the internet as the world’s road network, and the web as just one kind of traffic on it."}
     ],
     builder:[
      {table:[
        ["Term","Meaning"],
        ["[[lan|LAN]]","A local network in one place: a home, an office, a café"],
        ["[[wan|WAN]]","A network spanning long distances, such as an ISP’s national network"],
        ["[[isp|ISP]]","The company that connects you: home broadband or mobile provider"],
        ["[[router|Router]]","A device that passes data between networks"],
        ["[[protocol|Protocol]]","An agreed set of rules for communicating"]
      ]},
      "Data travels as small [[packet|packets]] (see {{packets-routing}}). From your device, packets go to your home router, then to your ISP, then through other networks’ routers to the destination: often a server in a data centre (see {{cables-data-centres}}). Replies come back the same way.",
      "How you reach your ISP varies: fibre, cable, a phone line (DSL), mobile masts (4G/5G) or satellite. Usually only the first stretch is wireless; after that, the data travels almost entirely on cables.",
      "Useful diagnosis: if one website fails but other apps work, the internet is fine and that site has a problem. If nothing works on any device at home, the problem is between your router and the internet (see {{home-network}}). If websites fail but things already running continue, suspect DNS (see {{dns}}).",
      "Organisations publish their own networks’ rules for joining, but the core protocols are open standards, published by bodies such as the Internet Engineering Task Force (IETF). That openness is why devices from different makers, running different software, can all exchange data."
     ],
     pro:[
      "Technically, the internet is a set of independently operated networks called **autonomous systems** (ISPs, universities, large companies, cloud providers). They exchange traffic either by paying a larger provider for **transit** or by **peering**, an agreement to swap traffic directly, often at an internet exchange point where many networks meet in one building.",
      "Routes between autonomous systems are announced with the **Border Gateway Protocol (BGP)**. Each network tells its neighbours which address ranges it can reach. Mistakes or deliberate false announcements can send traffic the wrong way for a while; such incidents are why large outages sometimes affect services far from where the error happened.",
      "The protocols are usually described in layers: physical links (fibre, radio), local delivery (Ethernet, Wi-Fi), **IP** for addressing and routing across networks, **TCP** or **UDP** for delivering data between programs (TCP adds reliability and ordering; UDP is lighter, suited to live audio and video), and application protocols such as HTTP, DNS and email protocols on top.",
      "IP is a **best-effort** service: it doesn’t promise delivery. Reliability is added at the ends, by the devices themselves. This “smart edges, simple core” design is a big reason the internet scaled so well and survives failures.",
      {tip:"When troubleshooting, think in layers: is the device connected (Wi-Fi/cable)? Does it have an address? Can it reach the router? Can it resolve names (DNS)? Does the particular service answer? Each “yes” narrows the problem."}
     ]
    },
    related:["packets-routing","cables-data-centres","home-network","how-the-web-works"],
    read:[{book:"wss", where:"Section 1.2 “Computer Hardware and Networks”, subsection “Networks”"}],
    sources:[{t:"MDN: How does the Internet work?", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"},{t:"OpenStax Workplace Software and Skills, 1.3 The Internet, Cloud Computing, and the Internet of Things (LibreTexts mirror)", url:"https://workforce.libretexts.org/Bookshelves/Information_Technology/Computer_Applications/Workplace_Software_and_Skills_(OpenStax)/01%3A_Technology_in_Everyday_Life_and_Business/1.03%3A_The_Internet_Cloud_Computing_and_the_Internet_of_Things"}], checked:"2026-11"},

   {id:"packets-routing", title:"Packets and routing", aka:["packet","packet switching","routing","TCP","UDP","traceroute","hops"], tags:["networks"],
    summary:"How data is split into addressed, numbered packets and passed router by router to its destination.",
    levels:{
     starter:[
      "Everything you send online is split into small chunks called [[packet|packets]]. Imagine posting a long manuscript as many numbered envelopes: each has the destination and return address on it, they may travel in different vans, and the receiver puts them back in order and asks for any missing ones.",
      "Each packet has a **header** (addresses, a sequence number and other details) and a **payload** (a piece of your actual data).",
      "A [[router]] reads the destination in the header and sends the packet one step closer. The next router does the same. No router knows the whole route, only the best next step, so traffic can flow around broken links.",
      {key:"Your photo doesn’t travel as one piece. It travels as thousands of packets, possibly by different paths, and is rebuilt at the end."}
     ],
     builder:[
      {ex:"A 3 MB photo split into packets carrying 1,500 bytes each:\n3,000,000 bytes ÷ 1,500 bytes = 2,000 packets.", label:"Worked example"},
      "Where the postal analogy misleads:",
      {list:[
        "The sender keeps the original; packets are copies made of signals.",
        "Each hop takes a tiny fraction of a second, not days.",
        "Lost packets are noticed and resent automatically for files and web pages (by **TCP**).",
        "For live calls and video, late packets are often skipped rather than resent, which causes glitches."
      ]},
      "You can see routing in action. On Windows, `tracert example.com` in Command Prompt lists each router (hop) on the way and how long each took to reply; on a Mac, `traceroute example.com` in Terminal does the same. Lines of `*` simply mean a router chose not to reply.",
      "Routers read the header to forward a packet; they don’t need the payload. With HTTPS, the payload of web traffic is encrypted, so routers along the route can’t read the page content, passwords or messages (see {{public-wifi-https}}).",
      "Why split data at all? Small packets let many people share the same links fairly: your video call’s packets slot in between someone else’s download instead of waiting for it to finish. And if something goes wrong, only a small piece needs resending, not the whole file."
     ],
     pro:[
      "**Packet switching** (sharing links among many packets from many users) replaced the telephone network’s **circuit switching** (reserving a line for each call). It uses links far more efficiently and survives failures, at the cost of variable delay.",
      "IP packets carry source and destination addresses, a time-to-live (TTL) counter that each router decreases (so lost packets don’t loop forever), and a protocol field. Traceroute works by sending packets with TTL 1, 2, 3… and recording which router reports each expiry.",
      "**TCP** numbers bytes, acknowledges what arrives, resends what’s lost and slows down when the network is congested. **UDP** just sends; applications such as voice and video calls add their own handling, preferring timeliness to completeness. Newer protocols such as QUIC (used by HTTP/3) build reliable, encrypted delivery on top of UDP.",
      "Maximum packet size on most links is limited (Ethernet’s standard payload is 1,500 bytes), so large data always becomes many packets. Routers keep **routing tables** of address prefixes, not individual devices, which is what lets the system scale.",
      "When packets queue up behind a busy link, delay rises; when queues overflow, packets are dropped. Excessive buffering in home routers can make delay soar during big uploads (sometimes called bufferbloat), which is why calls suffer when someone starts a backup."
     ]
    },
    related:["how-the-internet-works","ip-addresses","bandwidth-latency"],
    read:[{book:"wss", where:"Section 1.3, subsection “The Internet: From Inception to Today” (packet switching)"}],
    sources:[{t:"MDN: How the web works (packets)", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works"},{t:"MDN: How does the Internet work?", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"}], checked:"2026-11"},

   {id:"cables-data-centres", title:"Cables, data centres and the physical cloud", aka:["undersea cables","submarine cables","data centers","the cloud","servers"], tags:["networks","cloud"],
    summary:"The physical internet: fibre and undersea cables, mobile masts and satellites, and the data centres where the cloud lives.",
    levels:{
     starter:[
      "The internet is mostly cables. Wireless links (Wi-Fi, mobile data, satellite) usually cover only the first short stretch from your device. After that, data travels through cables, much of it as light in thin glass fibres.",
      "Between continents, data crosses the sea floor in [[undersea-cable|undersea cables]]. TeleGeography, which maps them, counts more than 600 active and planned cables, and says most are about as thick as a garden hose along most of their route.",
      "[[cloud|The cloud]] means using computers owned by a company over the internet. Those computers sit in [[data-center|data centres]]: secure buildings full of servers and storage drives, with powerful cooling and backup power.",
      {key:"Your cloud photos are on real drives in real buildings, reached through real cables."}
     ],
     builder:[
      {table:[
        ["Link","How it works","Notes"],
        ["Fibre","Light pulses in glass","Highest capacity; used for most long-distance links"],
        ["Cable / DSL","Electrical signals on cable-TV or phone lines","Common for homes"],
        ["Mobile (4G/5G)","Radio to a mast, then cables","Works on the move"],
        ["Satellite","Radio to a satellite and back down","Reaches remote places; small share of international traffic"]
      ]},
      "According to TeleGeography, submarine cables suffer roughly 200 faults a year worldwide, most caused by fishing gear and ship anchors; sabotage and shark bites are very rare. Because traffic can be rerouted, most faults go unnoticed, but regions with few cables can see slowdowns until a repair ship mends the break.",
      "Inside data centres, providers usually keep several copies of data, often in separate buildings or regions, so a broken drive or local power cut doesn’t lose your files. This is also why a provider outage can affect millions of people at once, and why cloud files need a connection unless you’ve made them available offline (see {{cloud-storage}}).",
      "A data centre’s location matters for latency (nearer is quicker; see {{bandwidth-latency}}) and sometimes for law: rules about personal data can depend on which country stores it.",
      "Mobile masts are themselves linked to the provider’s network by fibre or point-to-point radio, so even mobile data spends most of its journey on cables."
     ],
     pro:[
      "TeleGeography estimated over 1.5 million kilometres of submarine cable in service in early 2026. Ownership has shifted: traditionally consortia of telecom carriers built cables, but large content and cloud companies are now major investors in new systems. Satellites remain important for remote areas and broadcasting, but carry only a small share of international capacity; the FCC figure TeleGeography cites is 0.37% of US international capacity.",
      "Cloud providers divide their infrastructure into **regions** (geographic areas) and, within them, separate facilities with independent power and networking, so services can survive the loss of one building. Customers and services choose regions for latency, resilience and legal reasons.",
      "Content delivery networks (CDNs) keep copies of popular content (video, images, software updates) in many cities close to users, so most of what you stream or download doesn’t cross an ocean at all. That’s a large part of why everyday browsing feels fast even to distant sites.",
      "Data centres use a great deal of electricity, much of it for cooling. Efficiency is often reported as **PUE** (power usage effectiveness): total facility power divided by the power used by the computing equipment, where 1.0 would be perfect.",
      {tip:"When a big online service goes down, check its official status page from another connection. If it’s a provider outage, there’s nothing to fix on your side."}
     ]
    },
    related:["how-the-internet-works","cloud-storage","bandwidth-latency"],
    read:[{book:"wss", where:"Section 1.3, subsection “The Cloud and Cloud Computing”"}],
    sources:[{t:"TeleGeography: Submarine Cable Frequently Asked Questions", url:"https://www2.telegeography.com/submarine-cable-faqs-frequently-asked-questions"},{t:"OpenStax Workplace Software and Skills, 1.3 (LibreTexts mirror)", url:"https://workforce.libretexts.org/Bookshelves/Information_Technology/Computer_Applications/Workplace_Software_and_Skills_(OpenStax)/01%3A_Technology_in_Everyday_Life_and_Business/1.03%3A_The_Internet_Cloud_Computing_and_the_Internet_of_Things"}], checked:"2026-11"},

   {id:"ip-addresses", title:"IP addresses", aka:["IPv4","IPv6","public IP","private IP","NAT","what is my IP"], tags:["networks","addresses"],
    summary:"The numeric addresses that let packets find devices: IPv4 and IPv6, public and private, and why they change.",
    levels:{
     starter:[
      "An [[ip-address|IP address]] is the address on every packet that tells routers where to deliver it. Your device gets one when it joins a network, and gets a different one on a different network, the way your postal address changes when you move.",
      "An [[ipv4|IPv4]] address is four numbers from 0 to 255 separated by dots, like `192.168.1.23`. There are only about 4.3 billion possible IPv4 addresses, which isn’t enough for today’s world, so the newer [[ipv6|IPv6]] uses much longer addresses written with colons, like `2001:db8::1`.",
      "At home you usually have two kinds: a [[private-ip-address|private address]] for each device inside your network, and one [[public-ip-address|public address]] for your router, which is what websites see.",
      {key:"Inside your home: private addresses. To the rest of the internet: your router’s public address."}
     ],
     builder:[
      {table:[
        ["","IPv4","IPv6"],
        ["Length","32 bits (4 bytes)","128 bits"],
        ["Possible addresses","4,294,967,296","About 3.4 × 10³⁸"],
        ["Looks like","`192.168.1.23`","`2001:db8:85a3::8a2e:370:7334`"]
      ]},
      "Private IPv4 ranges (reserved by RFC 1918): `10.0.0.0`–`10.255.255.255`, `172.16.0.0`–`172.31.255.255` and `192.168.0.0`–`192.168.255.255`. Your router hands these out automatically and translates between them and its public address (**NAT**: network address translation).",
      "Why addresses change: joining a different network; switching between Wi-Fi and mobile data; your ISP assigning a new **dynamic** public address; or using a VPN, which shows websites the VPN’s address (see {{public-wifi-https}}). Some businesses pay for a **static** address that stays fixed.",
      "To find yours: your device’s Wi-Fi details show its private address and the router’s address; searching “what is my IP address” shows your public one.",
      {warn:"An IP address typically reveals your ISP and an approximate area, not your street. But ISPs keep records linking addresses to customers, which can be disclosed under legal process."},
      "Day to day, most devices use IPv4 and IPv6 side by side automatically. If a website and your ISP both support IPv6, your device may use it without you noticing; nothing changes in how you browse. And because each IPv4 number is one byte, it runs from 0 to 255: an address such as `192.168.1.256` is impossible."
     ],
     pro:[
      "Address blocks are distributed hierarchically: IANA allocates large blocks to five Regional Internet Registries (such as the RIPE NCC for Europe, the Middle East and parts of Central Asia), which allocate to ISPs and organisations, which assign to customers. The registries have exhausted, or nearly exhausted, their free pools of new IPv4 addresses, so most IPv4 space now changes hands through transfers.",
      "Prefix notation (CIDR) describes ranges: `192.168.1.0/24` means the first 24 bits are fixed, giving 256 addresses. IPv6 networks normally use /64 subnets, and ISPs often give a customer site a whole /48 or /56, enough for vast numbers of devices.",
      "Because of scarcity, many mobile and some broadband providers use **carrier-grade NAT**, sharing one public IPv4 address among many customers. That complicates hosting services at home and makes IP-based identification less reliable. IPv6 removes the need for NAT, though home routers still block unsolicited incoming connections with a firewall.",
      "Devices often have several addresses at once: an IPv4 private address, a public IPv6 address, and temporary IPv6 “privacy addresses” that change regularly to make tracking harder. Phones and computers can also use a private, randomised hardware (MAC) address per Wi-Fi network for the same reason.",
      "Reserved ranges for documentation (`192.0.2.0/24`, `198.51.100.0/24`, `203.0.113.0/24` and `2001:db8::/32`) are safe to use in examples because they never belong to real devices."
     ]
    },
    related:["dns","home-network","packets-routing"],
    read:[{book:"wss", where:"Section 1.3, subsection “The Internet: From Inception to Today”"}],
    sources:[{t:"RIPE NCC: Understanding IP Addressing and CIDR Charts", url:"https://www.ripe.net/about-us/press-centre/understanding-ip-addressing/"},{t:"IETF RFC 1918: Address Allocation for Private Internets", url:"https://datatracker.ietf.org/doc/html/rfc1918"}], checked:"2026-11"},

   {id:"dns", title:"DNS: the Domain Name System", aka:["DNS","DNS resolver","name server","DNS cache","DNS outage","Private DNS"], tags:["networks","web"],
    summary:"How names like example.org are turned into IP addresses, and why DNS failures look like the whole internet is down.",
    levels:{
     starter:[
      "Your phone’s contacts list lets you tap a name instead of remembering a number. [[dns|DNS]] does the same for the internet: you type a [[domain-name|domain name]] like `example.org`, and DNS finds its IP address so your device knows where to send packets.",
      "Your device asks a [[dns-resolver|DNS resolver]], usually run by your ISP, to look the name up. Answers are remembered for a while (cached), so most lookups are instant.",
      "Because almost everything starts with a lookup, a broken resolver makes it seem as if the internet is down: websites show “server not found” even though your connection is fine.",
      {key:"DNS turns names into numbers. When it fails, new things stop working while things already running carry on."}
     ],
     builder:[
      "A full lookup, when nothing is cached:",
      {ol:[
        "Your device asks its resolver: “Where is library.example.org?”",
        "The resolver asks a **root server**, which points it to the servers for `.org`.",
        "The `.org` servers point it to the **name servers** for `example.org`.",
        "Those servers give the address. The resolver passes it on and caches it for the time the domain owner set."
      ]},
      "Signs of a DNS problem: errors mentioning DNS or “server not found” on every site; full Wi-Fi bars; a call or stream that was already running keeps going; everything works on mobile data.",
      "What to do: try another device; restart the router (Microsoft suggests unplugging the router and modem for at least 30 seconds); check your ISP’s status page using mobile data. Advanced users can switch to a different resolver: several organisations run free public ones, and Android’s **Settings → Network & internet → Private DNS** (location varies by phone maker) lets you choose an encrypted DNS provider.",
      {tip:"Caching explains why a website that just moved can work for one person and not another: their resolvers remembered the old address for different lengths of time."},
      "Your home router often acts as a middleman, passing your devices’ questions to the ISP’s resolver and caching the answers itself. That’s one reason restarting it can clear a stuck DNS problem."
     ],
     pro:[
      "ICANN defines a resolver as a DNS server that resolves host names on behalf of clients, starting at the top of the hierarchy and caching results. Your device runs only a small **stub resolver** that forwards questions to a **recursive resolver**, which does the walk from root to top-level domain to **authoritative** name servers.",
      "DNS stores different **record types**: `A` (IPv4 address), `AAAA` (IPv6 address), `CNAME` (an alias), `MX` (mail servers for the domain), `TXT` (text used, for example, to prove domain ownership and publish email-authentication policies). Each record has a **TTL** (time to live) that sets how long it may be cached.",
      "Traditional DNS queries are unencrypted, so the network can see (and sometimes alter) which names you look up. **DNS over HTTPS** and **DNS over TLS** encrypt queries to the resolver; browsers and operating systems increasingly support them. **DNSSEC** adds digital signatures so resolvers can verify answers haven’t been forged, a separate protection from encryption.",
      "Because DNS controls where names point, attackers target it: changing a router’s DNS setting (one reason to secure router admin access; see {{router-security}}), hijacking a domain’s registrar account, or registering expired domains that old links still use.",
      {tip:"On Windows, `nslookup example.org` shows which resolver answered and what it returned; `ipconfig /flushdns` clears the local cache. On a Mac, `nslookup` works in Terminal."}
     ]
    },
    related:["ip-addresses","domains-urls","how-the-web-works","router-security"],
    read:[{book:"wss", where:"Section 1.3, subsection “The Internet: From Inception to Today” (domain name system)"}],
    sources:[{t:"ICANN: Acronyms and Terms, Resolver", url:"https://www.icann.org/en/icann-acronyms-and-terms/resolver-en"},{t:"MDN: What is a domain name?", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name"},{t:"Microsoft Support: Fix Wi-Fi connection issues in Windows", url:"https://support.microsoft.com/en-us/windows/experience/connectivity-networking/fix-wi-fi-connection-issues-in-windows"}], checked:"2026-11"},

   {id:"domains-urls", title:"Domain names and top-level domains", aka:["domain name","TLD","top-level domain","ccTLD","gTLD","registrar"], tags:["web","networks"],
    summary:"How domain names are structured, what top-level domains are, and what they do and don’t tell you.",
    levels:{
     starter:[
      "A [[domain-name|domain name]] is the human-friendly name of a website or service, like `example.org`. DNS turns it into an IP address (see {{dns}}).",
      "Read it from the right. The last part, `.org`, is the [[top-level-domain|top-level domain (TLD)]]. The part before it, `example`, is the name someone registered. Anything further left, like `news.` in `news.example.org`, is a subdomain the owner chose.",
      "Some TLDs are generic (`.com`, `.org`, `.net`), some belong to countries (`.jp`, `.de`, `.br`), and some are restricted (`.gov`, `.edu`).",
      "To check who really runs a website from its full address, see {{url-anatomy}}.",
      {key:"The TLD is the right-most part. The registered domain is the TLD plus the name just before it."},
      "Domain names aren’t case-sensitive, and they can’t contain spaces."
     ],
     builder:[
      {table:[
        ["Kind","Examples","Notes"],
        ["Generic","`.com`, `.org`, `.net`, `.shop`, `.app`","Open to almost anyone"],
        ["Country code","`.jp`, `.de`, `.ng`, `.br`, `.uk`","Two letters; rules vary by country"],
        ["Second-level endings","`.co.uk`, `.com.au`, `.co.jp`","Behave like one ending"],
        ["Restricted","`.gov`, `.edu`","Only eligible organisations"]
      ]},
      "Domains are rented, not bought. You pay a **registrar** for the right to use a name, usually yearly, and renew to keep it. If an organisation lets a domain lapse, someone else may register it, and old links or email addresses at that domain may then lead to the new owner.",
      "What a TLD does **not** tell you: whether a site is trustworthy (scams use every ending), or where a business is based (`.tv` is Tuvalu’s code and `.io` the British Indian Ocean Territory’s, yet both are used worldwide).",
      "Domain labels can be up to 63 characters and are case-insensitive: `Example.ORG` and `example.org` are the same domain.",
      "When you see an unfamiliar domain, ask whether it’s the one you expected for that organisation. Banks, governments and shops usually keep the same registered domain everywhere, with subdomains for different services (`help.`, `login.`, `shop.`). A different registered domain, even one containing the brand’s name, belongs to someone else until proven otherwise."
     ],
     pro:[
      "The DNS is a tree. The root sits above all TLDs; each TLD is run by a **registry**, which keeps the authoritative list of registered names and their name servers. Registrars sell registrations to the public and pass them to the registry. ICANN coordinates the root and the policies for generic TLDs; country-code TLDs set many of their own rules.",
      "Where the registrable part of a name starts isn’t always obvious, because some registries offer second-level registrations (`.co.uk`). Browsers rely on the **Public Suffix List** to work out which part is the registrable domain, which affects security boundaries such as which sites may share cookies.",
      "Internationalised domain names allow non-Latin scripts. Underneath, they’re encoded as **punycode** strings beginning `xn--`. Browsers may display that encoded form when a name mixes look-alike characters from different scripts, to defend against homograph attacks.",
      "Registration data (who owns a domain) is looked up with WHOIS or its successor, RDAP; much personal data is now redacted for privacy, so ownership may not be visible.",
      {tip:"Organisations should set domains to auto-renew and protect registrar accounts with strong sign-in, because losing a domain can redirect all its email and web traffic."},
      "Brand owners often register common misspellings and other endings of their name defensively, but they can’t cover every possibility."
     ]
    },
    related:["dns","url-anatomy","ip-addresses"],
    sources:[{t:"MDN: What is a domain name?", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name"},{t:"ICANN: Understanding the Internet’s Domain Name System (infographic)", url:"https://www.icann.org/en/system/files/files/dns-infographic-13sep22-en.pdf"}], checked:"2026-11"},

   {id:"wifi-mobile-data", title:"Wi-Fi, mobile data, hotspots and Bluetooth", aka:["Wi-Fi bands","2.4 GHz","5 GHz","6 GHz","Wi-Fi 6E","Wi-Fi 7","hotspot","tethering","cellular data","Bluetooth"], tags:["networks","wireless"],
    summary:"The wireless ways your devices connect, their trade-offs, and when to use each.",
    levels:{
     starter:[
      "[[wifi|Wi-Fi]] links your devices by radio to a nearby router or access point. It covers only that short link; the router then connects to the internet.",
      "[[mobile-data|Mobile data]] links your phone by radio to your mobile provider’s masts (4G, 5G). It works almost anywhere with coverage, but most plans have a monthly [[data-cap|data cap]].",
      "A [[hotspot]] shares a connection: your phone’s personal hotspot lets a laptop use the phone’s mobile data.",
      "Bluetooth connects two nearby devices directly, such as a phone and headphones. It isn’t an internet connection on its own.",
      {key:"Wi-Fi gets you to the router; mobile data gets you to the provider; Bluetooth gets you to the device next to you."},
      "Phones switch between them automatically, usually preferring Wi-Fi when a known network is available."
     ],
     builder:[
      {table:[
        ["Band","Strengths","Trade-offs"],
        ["2.4 GHz","Longer range, better through walls; supported by most smart-home gadgets","Slower; shared with microwaves, cordless phones and Bluetooth"],
        ["5 GHz","Faster, less interference","Shorter range"],
        ["6 GHz","Most room, least congestion","Needs Wi-Fi 6E or Wi-Fi 7 devices; similar range to 5 GHz; not available everywhere"]
      ]},
      "Apple and Google recommend one network name across all bands, so devices choose automatically. Wi-Fi generations are numbered by the Wi-Fi Alliance: Wi-Fi 4, 5, 6, 6E and 7. A connection works at the highest level both ends support.",
      "Hotspot good practice: set a strong password; turn it off when done; keep the phone charged; mark the connection as metered or low-data on the laptop so updates and backups don’t eat the allowance; check whether your plan limits hotspot use. Android’s help notes that a Wi-Fi hotspot can share with up to 10 devices and that some carriers limit or charge for tethering.",
      "Bluetooth uses the 2.4 GHz band. Its range depends heavily on the devices; the Bluetooth Special Interest Group says it can be anywhere from under a metre to over a kilometre. For headphones and keyboards, expect roughly a room.",
      "When Wi-Fi is weak, some phones switch to mobile data on their own (iPhone calls this Wi-Fi Assist; many Android phones have a similar option), which can quietly use your allowance."
     ],
     pro:[
      "Higher frequencies carry more data but are absorbed more by walls and travel less far. The Wi-Fi Alliance notes that 6 GHz and 5 GHz have essentially identical propagation; the gain at 6 GHz is spectrum: room for wide 80 MHz and 160 MHz channels with little congestion. Rules for 6 GHz vary by country, and some regions allow only part of the band.",
      "The Wi-Fi Alliance requires Wi-Fi CERTIFIED 6E products to use current security: WPA3 for private networks and Enhanced Open for open guest networks. So a router’s 6 GHz network won’t accept older security modes.",
      "Wi-Fi 7 adds features such as multi-link operation (using several bands at once) and even wider channels on 6 GHz. Real-world speed depends far more on distance, walls and the number of active devices than on headline figures.",
      "Mobile networks hand your phone between masts as you move; 5G uses a range of frequencies, from low bands with wide coverage to high bands with very high capacity but short range. Wi-Fi calling lets phones carry calls over Wi-Fi where mobile signal is weak.",
      "Tethering can also run over USB or Bluetooth. Android’s help notes that Macs can’t tether to Android over USB. Bluetooth tethering works but is much slower than a Wi-Fi hotspot."
     ]
    },
    related:["home-network","router-security","saving-data-offline","bandwidth-latency"],
    sources:[{t:"Microsoft Support: Wi-Fi and your home layout", url:"https://support.microsoft.com/en-us/windows/experience/connectivity-networking/wi-fi-and-your-home-layout"},{t:"Wi-Fi Alliance: Wi-Fi 6E, the details you need to know", url:"https://www.wi-fi.org/beacon/chuck-lukaszewski/wi-fi-6e-the-details-you-need-to-know"},{t:"Bluetooth SIG: Understanding Bluetooth Range", url:"https://www.bluetooth.com/learn-about-bluetooth/key-attributes/range/"}], checked:"2026-11"},

   {id:"home-network", title:"Your home network: modem, router and mesh", aka:["modem","router","access point","ONT","gateway","mesh Wi-Fi","extender","restart router"], tags:["networks","home"],
    summary:"What each box at home does, how to get good coverage, and how to find where a connection problem lies.",
    levels:{
     starter:[
      "Most homes have one or two boxes that do several jobs:",
      {list:[
        "A [[modem]] translates between your provider’s line (fibre, cable, phone line or 5G) and normal network data.",
        "A [[router]] joins your home network to the internet, gives each device a private address and directs traffic.",
        "A **Wi-Fi access point** makes the wireless signal, usually built into the router."
      ]},
      "Often your ISP gives you one box that does all of these. If Wi-Fi doesn’t reach every room, a [[mesh-wifi|mesh system]] (several units working as one network), an extender, or a cable can help.",
      {key:"Wi-Fi bars show your link to the router, not to the internet."},
      "If you rent equipment from your ISP, it may handle updates for you; check before replacing anything."
     ],
     builder:[
      "Placement matters. Microsoft advises putting the router near the middle of the home and up high, not in a corner or under a desk, with as few walls and large metal objects as possible in the way.",
      {table:[
        ["Fix","Good for","Watch out for"],
        ["Move the router","Free first step","Cable length to the line"],
        ["Mesh Wi-Fi","Large or multi-storey homes","Cost; place units within good range of each other"],
        ["Extender","One weak room","May create a second network name; can halve speed"],
        ["Ethernet cable","Desktops, TVs, video calls","Running cables through the home"]
      ]},
      "Finding where a problem is (based on Microsoft’s troubleshooting steps):",
      {ol:[
        "Does another device work on the same Wi-Fi? If yes, the first device is the problem.",
        "If no device works, check the router’s and modem’s lights.",
        "Restart: unplug the router and modem, wait at least 30 seconds, plug the modem back in, wait for its lights to settle, then plug in the router. Allow a few minutes.",
        "Still nothing? Check your ISP’s status page on mobile data, or call them."
      ]},
      "Devices that never move, such as a desktop, a TV or a games console, benefit most from a cable, which leaves Wi-Fi capacity for phones and laptops. The router’s app often shows which devices are connected and how strong each one’s signal is, which helps you decide where a mesh unit would help most."
     ],
     pro:[
      "A home router combines several functions: routing between the LAN and the WAN, NAT, a **DHCP server** that leases private addresses to devices, a DNS forwarder, a firewall that blocks unsolicited incoming connections, a switch for wired ports and one or more access points. Router pages label the internet side **WAN** and the home side **LAN**.",
      "If you add your own router behind an ISP box that also routes, you get **double NAT**, which can upset some games and video calls. The usual fix is to put the ISP box in bridge (modem-only) mode, or the second router in access-point mode.",
      "Mesh systems use a **backhaul** to link units: either wireless (sometimes on a dedicated band) or wired Ethernet, which performs best. Powerline adapters send network data over home electrical wiring, with results that vary by building.",
      "The US NSA’s home-network guidance suggests that, for more control, people can connect a router they own behind the ISP’s equipment, keep it updated, and replace it when it reaches end of support. It also recommends separating the network into primary, guest and smart-device (IoT) segments.",
      {tip:"Write the router’s model, admin address and where its admin password is stored on a note for your household. Future troubleshooting is much easier."}
     ]
    },
    related:["router-security","wifi-mobile-data","ip-addresses","how-the-internet-works"],
    read:[{book:"wss", where:"Background reading: Section 1.2 “Computer Hardware and Networks”, subsection “Network Hardware”"}],
    sources:[{t:"Microsoft Support: Wi-Fi and your home layout", url:"https://support.microsoft.com/en-us/windows/experience/connectivity-networking/wi-fi-and-your-home-layout"},{t:"Microsoft Support: Fix Wi-Fi connection issues in Windows", url:"https://support.microsoft.com/en-us/windows/experience/connectivity-networking/fix-wi-fi-connection-issues-in-windows"},{t:"NSA: Best Practices for Securing Your Home Network (2023)", url:"https://media.defense.gov/2023/Feb/22/2003165170/-1/-1/0/CSI_BEST_PRACTICS_FOR_SECURING_YOUR_HOME_NETWORK.PDF"}], checked:"2026-11"},

   {id:"router-security", title:"Securing a home router", aka:["router password","WPA3","WPA2","guest network","WPS","UPnP","remote management","router firmware"], tags:["security","networks","home"],
    summary:"The short list of router settings that official guidance agrees on.",
    levels:{
     starter:[
      "Your router is the front door to every device at home, and it runs its own software ([[firmware]]). A few changes make it much safer:",
      {ol:[
        "Change the **admin password** (for the router’s settings) from the default.",
        "Use **WPA3** security (or WPA2/WPA3 mixed mode) with a long Wi-Fi passphrase.",
        "Turn on **automatic updates**.",
        "Use a **guest network** for visitors and smart gadgets."
      ]},
      "You usually make these changes in the router’s app, or on its settings page at an address printed on the router.",
      {key:"Default passwords and old software are the router’s biggest weak points. Both take minutes to fix."},
      "If someone else manages the router, such as a landlord, your ISP or a family member, ask them to make these changes or to explain how they keep it updated."
     ],
     builder:[
      {table:[
        ["Setting","Recommended","Why"],
        ["Admin password","Long, random, unique","Defaults may be published online"],
        ["Wi-Fi security","[[wpa3|WPA3 Personal]]; WPA2/WPA3 for older devices; WPA2-AES acceptable","WEP, WPA and WPA2-TKIP are weak"],
        ["Wi-Fi passphrase","Several random words: CISA says 16+ characters, the NSA 20+","Stops guessing"],
        ["Firmware","Automatic updates on","Fixes known flaws"],
        ["Remote management","Off","Keeps settings off the internet"],
        ["WPS","Off","CISA says it raises the risk of unauthorised access"],
        ["UPnP","Off (after smart devices are set up)","Can let malware open the router"],
        ["Network name","Not the default, no personal details","Doesn’t advertise who you are or the router model"],
        ["Guest network","On, with its own password","Keeps visitors and gadgets away from your devices"]
      ]},
      "Check the list of connected devices now and then, and remove any you don’t recognise. Keep the router somewhere physically secure: someone with access can factory-reset it.",
      {warn:"Hiding the network name isn’t real protection. Apple and the NSA both say hidden networks can still be found; security comes from WPA3 or WPA2 and a strong passphrase."},
      "Note what you changed, and keep the new admin password in your password manager. A factory reset brings back every default, including the old admin password, so repeat the checklist after any reset."
     ],
     pro:[
      "The NSA’s 2023 guidance adds: replace routers when they reach end of life for support; reboot regularly (it notes that some malicious implants on home routers don’t survive a reboot); enable protected management frames where available; confirm the router provides NAT and firewall protection, including for IPv6; and segment the network into primary, guest and IoT networks.",
      "Official sources occasionally differ in detail. CISA and the NSA give different minimum passphrase lengths (16 and 20 characters), and some older guides still suggest hiding the network name, which Apple and the NSA say adds no security. Where advice conflicts, prefer the measure that adds real protection (length, WPA3, updates) over cosmetic ones.",
      "WPA3 Personal replaces WPA2’s pre-shared key handshake with SAE (Simultaneous Authentication of Equals), which resists offline password guessing even if an attacker captures the handshake. WPA2/WPA3 transition mode lets older devices connect with WPA2 while newer ones use WPA3.",
      "Routers are attractive targets because they’re always on, rarely updated and sit between you and everything you do. A compromised router can change DNS settings to send you to fake sites, or join a botnet. That’s why admin access and updates matter more than any single Wi-Fi setting.",
      {tip:"If your ISP manages your router, ask whether it updates the firmware automatically and how to change the admin password. If you can’t secure it, a router of your own behind the ISP box is an option."}
     ]
    },
    related:["home-network","wifi-mobile-data","software-updates","passwords"],
    sources:[{t:"CISA Project Upskill, Module 5: Securing Your Home Wi-Fi", url:"https://cisa.gov/audiences/high-risk-communities/projectupskill/module5"},{t:"NSA: Best Practices for Securing Your Home Network (2023)", url:"https://media.defense.gov/2023/Feb/22/2003165170/-1/-1/0/CSI_BEST_PRACTICS_FOR_SECURING_YOUR_HOME_NETWORK.PDF"},{t:"Apple Support: Recommended settings for Wi-Fi routers and access points", url:"https://support.apple.com/en-us/102766"}], checked:"2026-11"},

   {id:"how-the-web-works", title:"How the web works", aka:["web browser","web server","website","HTTP","status codes","404","request and response","browser extensions","private browsing"], tags:["web"],
    summary:"Browsers, servers, HTTP requests and responses, status codes, and sensible use of tabs, extensions and private windows.",
    levels:{
     starter:[
      "A [[web-browser|web browser]] asks for pages and displays them. A [[website]] is a set of pages and files under one domain. A [[web-server|web server]] is the computer that stores them and answers requests.",
      "They talk using [[http|HTTP]]: the browser sends a **request** (“please send /menu”), and the server sends a **response** with a status code (`200 OK` means success) and the page. A page usually needs many more requests for its images, styles and scripts.",
      "[[https|HTTPS]] is the same conversation, encrypted.",
      {key:"Every page you see is the result of a quick series of requests and responses between your browser and one or more servers."},
      "Your browser handles all of this in a fraction of a second, often talking to several servers for a single page."
     ],
     builder:[
      {ol:[
        "DNS lookup finds the server’s IP address (see {{dns}}).",
        "The browser connects and sets up HTTPS encryption.",
        "It sends `GET /page` with headers (browser type, language, cookies).",
        "The server replies: status code, headers, HTML.",
        "The browser requests the other files the HTML mentions, then draws the page."
      ]},
      {table:[
        ["Code","Meaning"],
        ["200","OK"],
        ["301","Moved permanently (browser follows)"],
        ["403","Forbidden"],
        ["404","Not found"],
        ["500","Server error"],
        ["503","Service unavailable, usually temporary"]
      ]},
      "**Extensions** add features but can be given broad access to every page. Install from official stores only, check permissions, keep few. **Private windows** stop the device saving history and cookies afterwards; they don’t hide you from sites, networks, ISPs or managed-device administrators. **Tabs** use memory; modern browsers put idle tabs to sleep, but closing unused ones still helps a slow computer.",
      "These ideas apply on every device: phone browsers work the same way underneath, and most apps that show online content use the same request-and-response pattern even when you never see a web address. When a page fails, the status code (if shown) and whether other sites still work are your two quickest clues. If only one site fails, the problem is almost always on that site’s side.",
      "Developer tools in desktop browsers show each of these requests as it happens."
     ],
     pro:[
      "HTTP is **stateless**: each request stands alone. Cookies add sessions on top (see {{cookies-cache}}). Requests use methods: `GET` retrieves, `POST` submits data (such as a form), and others exist for APIs. Responses include headers that control caching, security policies and content type.",
      "HTTP has evolved: HTTP/1.1 sent one request at a time per connection; HTTP/2 multiplexes many over one connection; HTTP/3 runs over QUIC (on UDP) to reduce delays from lost packets. You rarely notice which is in use.",
      "Modern pages are often applications: the first response may be a small HTML shell, with scripts then calling APIs and building the page in the browser. That’s why a page can partly load, or work in one browser and not another.",
      "Most browsers share a few engines: Blink (Chrome, Edge, Opera, Samsung Internet and others), WebKit (Safari, and all browsers on iPhone in most regions) and Gecko (Firefox). Developer tools (often [[kbd:F12]], or right-click → Inspect) include a Network panel showing every request, its status code and timing: a powerful way to see this lesson in action.",
      {tip:"An error page’s status code tells you whose problem it is: 4xx usually means the request (wrong address, no permission); 5xx means the server."},
      "The same tools show response headers, so you can watch cookies being set and see which files were served from the cache."
     ]
    },
    related:["cookies-cache","dns","public-wifi-https","url-anatomy"],
    read:[{book:"ics", where:"Section 11.1 “Modern Web Applications Architectures”"}],
    sources:[{t:"MDN: How the web works", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works"},{t:"MDN: Overview of HTTP", url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview"}], checked:"2026-11"},

   {id:"cookies-cache", title:"Cookies and the browser cache", aka:["cookies","cache","clear cache","hard refresh","site data","session cookie"], tags:["web","troubleshooting"],
    summary:"What cookies and the cache store, what clearing each one does, and how to fix a misbehaving page.",
    levels:{
     starter:[
      "A [[cookie]] is a small piece of text a website asks your browser to keep and send back on later visits, like a cloakroom ticket. It keeps you signed in, remembers your basket and your settings, and is sometimes used for tracking.",
      "The [[cache]] is your browser’s store of copies of files from sites you’ve visited, such as logos and style sheets, so pages load faster and use less data.",
      "If a page looks broken or old but works for others, the cache may hold out-of-date files. A **hard refresh** or clearing **cached images and files** usually fixes it, without signing you out. Clearing **cookies** signs you out.",
      {key:"Cookies remember you; the cache remembers files. Clear the cache to fix pages; clear cookies to be forgotten."}
     ],
     builder:[
      {table:[
        ["Clear","Effect"],
        ["Cached images and files","Fresh copies downloaded; sign-ins kept"],
        ["Cookies and site data","Signed out; site preferences reset"],
        ["History","List of visited pages removed"],
        ["Passwords","Only if you tick it: avoid unless you mean it"]
      ]},
      "Where to find it:",
      {list:[
        "Chrome (computer): **⋮ → Delete browsing data**, choose a time range and what to delete, then **Delete data**.",
        "Edge: **Settings → Privacy, search, and services → Clear browsing data → Choose what to clear**.",
        "Safari on Mac: **Safari → Settings → Privacy → Manage Website Data**.",
        "Safari on iPhone: **Settings → Apps → Safari → Clear History and Website Data**, or **Advanced → Website Data** to keep history."
      ]},
      "Hard refresh: [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:R]] on Windows and ChromeOS; [[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:R]] on a Mac in Chrome, Edge and Firefox.",
      "Google notes that after clearing cookies some sites may load more slowly at first, and that if Chrome sync is on, you stay signed in to the Google Account you sync with.",
      "A sensible order when a site misbehaves: hard refresh; then clear cached files; then clear that one site’s cookies; and only then clear everything. Choose a short time range (such as the last hour) if the problem only just started. Clearing cookies also removes the record of which cookie banners you accepted or rejected, so you may see those banners again."
     ],
     pro:[
      "Cookies are set with the `Set-Cookie` response header and returned in the `Cookie` request header. **Session cookies** have no expiry and are dropped when the browser session ends (though session restore can keep them); **persistent cookies** use `Expires` or `Max-Age`. Attributes such as `Secure` (HTTPS only), `HttpOnly` (hidden from scripts) and `SameSite` (limits cross-site sending) protect against theft and misuse.",
      "**Third-party cookies** are set by embedded content from other domains and can link your visits across sites. Safari and Firefox block or restrict them by default; Google decided in 2025 to keep allowing them in Chrome by default, with controls in its settings. Unit 5 covers tracking and privacy settings.",
      "Sites also store data in other ways (local storage, IndexedDB, cache storage for offline web apps). Browsers usually group these as “site data” and clear them along with cookies.",
      "HTTP caching is controlled by headers such as `Cache-Control` and validators (`ETag`, `Last-Modified`). A browser may reuse a file without asking, or ask the server “has this changed?” and get `304 Not Modified`. Websites usually give changed files new names to avoid stale caches; when they don’t, users see broken layouts.",
      {tip:"In Chrome or Edge, opening developer tools and right-clicking the reload button offers “Empty cache and hard reload” for just the current site."}
     ]
    },
    related:["how-the-web-works","public-wifi-https","dns"],
    read:[{book:"wss", where:"Section 1.4 “Safety, Security, Privacy, and the Ethical Use of Technology”, subsections “Cookies” and “Temporary Files”"}],
    sources:[{t:"MDN: Using HTTP cookies", url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies"},{t:"Google Account Help: Clear cache & cookies", url:"https://support.google.com/accounts/answer/32050?hl=en&co=GENIE.Platform%3DDesktop"},{t:"Apple Support: Delete your Safari history, cache and cookies on iPhone", url:"https://support.apple.com/en-us/105082"}], checked:"2026-11"},

   {id:"bandwidth-latency", title:"Bandwidth and latency", aka:["internet speed","Mbps","ping","latency","jitter","packet loss","upload","download"], tags:["networks","speed"],
    summary:"The two kinds of “fast”: how much data per second, and how long each round trip takes.",
    levels:{
     starter:[
      "[[bandwidth|Bandwidth]] is how much data can move per second, measured in [[mbps|Mbps]]. It’s the width of the road. [[latency|Latency]] is the delay for a round trip, in milliseconds (ms), often shown as **ping**. It’s the length of the trip.",
      "Big downloads and streaming mostly need bandwidth. Video calls, games and clicking around need low latency too.",
      "To [[download]] is to receive data; to [[upload]] is to send it. Many plans are much faster down than up, which matters for backups, sending big files and your own video in calls.",
      {key:"Divide Mbps by 8 for megabytes per second: 100 Mbps is at most about 12.5 MB/s."},
      "Most plans list upload and download speeds separately; check both.",
      "Both matter for how “fast” the internet feels."
     ],
     builder:[
      {ex:"1.5 GB at 100 Mbps:\n1,500 MB × 8 = 12,000 megabits\n12,000 ÷ 100 = 120 s (2 minutes, best case)", label:"Worked example: download time", mono:true},
      {table:[
        ["Zoom call (Zoom’s requirements)","Upload","Download"],
        ["1:1, 720p","1.2 Mbps","1.2 Mbps"],
        ["Group, 720p","2.6 Mbps","1.8 Mbps"],
        ["Group, 1080p","3.8 Mbps","3.0 Mbps"],
        ["Audio only","60–80 kbps","60–80 kbps"]
      ]},
      "Also useful: **jitter** (how much latency varies; steady is better for calls) and **packet loss** (packets that never arrive; even a little hurts calls).",
      "Latency grows with distance, with the number of hops, with satellite links and especially with congestion: when someone at home fills the upload with a backup, delay can soar and calls break up even though the plan is “fast”.",
      "Plans usually advertise “up to” speeds: the best case, on a device plugged in by cable, with nobody else using the line. Evenings are often slower because many people nearby are online at once, and Wi-Fi far from the router can lose much of the speed your line delivers. A fair speed test shows which of these is holding you back (see {{speed-tests}}), and {{file-size-units}} explains the bits-and-bytes conversion in detail.",
      "Steadiness matters too: a connection with modest bandwidth but low, stable latency often gives better calls than a fast one that jitters."
     ],
     pro:[
      "MDN defines bandwidth as how much information can pass through a connection in a given time, and latency as the time for data to travel from source to destination, usually measured as a round trip. Throughput (what you actually get) is limited by the slowest link, by protocol overheads and by latency itself: TCP ramps up gradually and waits for acknowledgements, so high-latency links may not reach their full bandwidth on a single connection.",
      "Signals in fibre travel at roughly two-thirds of the speed of light in a vacuum, so distance alone sets a floor on latency: an intercontinental round trip takes tens of milliseconds or more, and satellites in high geostationary orbit add far more. Newer low-orbit satellite systems reduce that delay considerably.",
      "**Bufferbloat** is the name for latency that rises sharply under load because network equipment queues too much data. Speed tests that report “loaded” or “working” latency reveal it. Some routers offer smart queue management (often called SQM) to keep latency low while the line is busy.",
      "Wi-Fi adds its own delay and loss, especially at range or on crowded 2.4 GHz channels. A cable often lowers both latency and jitter even when bandwidth looks the same."
     ]
    },
    related:["speed-tests","file-size-units","saving-data-offline","packets-routing"],
    sources:[{t:"MDN: Understanding latency", url:"https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Understanding_latency"},{t:"MDN Glossary: Bandwidth", url:"https://developer.mozilla.org/en-US/docs/Glossary/Bandwidth"},{t:"Zoom Support: System requirements for Windows, macOS and Linux", url:"https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060748"}], checked:"2026-11"},

   {id:"speed-tests", title:"Reading a speed test", aka:["speed test","ping test","internet speed check","Mbps test"], tags:["networks","speed","troubleshooting"],
    summary:"What each number in a speed test means, and how to test fairly to find whether the problem is Wi-Fi or your line.",
    levels:{
     starter:[
      "A speed test sends and receives test data between your device and a nearby server and reports:",
      {list:[
        "**Download** (Mbps): how fast data reaches you.",
        "**Upload** (Mbps): how fast you can send.",
        "**Ping** or **latency** (ms): the round-trip delay. Lower is better."
      ]},
      "Many free tests exist, for example from M-Lab, Ookla or Cloudflare, and many ISPs include one in their app. Results vary from moment to moment, so test more than once.",
      {key:"Test by cable next to the router to measure your line; test on Wi-Fi in the slow room to measure your Wi-Fi. The difference tells you where the problem is."},
      "Your results will rarely match your plan’s figure exactly, because plans quote the best case.",
      "Run a test two or three times and look at the typical result rather than the best one."
     ],
     builder:[
      {ol:[
        "Pause other downloads, backups and streams.",
        "Test on a device connected by cable to the router, if possible.",
        "Test on Wi-Fi beside the router, then in the problem room.",
        "Repeat at another time of day (evenings are often busier)."
      ]},
      {table:[
        ["Pattern","Likely cause","Next step"],
        ["Cable good, far room slow","Wi-Fi coverage","Move the router, mesh, or cable"],
        ["Cable well below plan","Line or ISP","Restart modem and router; contact ISP with results"],
        ["Fine at noon, slow at night","Congestion","Raise with ISP; schedule big downloads"],
        ["Good download, poor upload","Asymmetric plan","Schedule uploads; consider a plan with faster upload"]
      ]},
      "Streaming needs, from the services’ help pages: Netflix recommends 3 Mbps for HD (720p), 5 Mbps for Full HD (1080p) and 15 Mbps for 4K; YouTube recommends 20 Mbps sustained for 4K. Multiply by the number of simultaneous streams.",
      "Devices themselves can limit results: an older phone or laptop may not be able to go as fast as your line, especially over Wi-Fi. Before blaming the ISP, try a newer device or a cable, and restart the modem and router.",
      "Write the results down with the date, time and where you tested. A short record makes patterns obvious and gives your ISP something concrete to act on."
     ],
     pro:[
      "Tests differ in method. Some use several parallel connections to saturate the line (closer to the plan’s maximum); others use a single connection (closer to what one app experiences). Server choice matters: a distant or busy test server understates your speed. That’s why two tests can disagree without either being wrong.",
      "**Loaded latency** (sometimes “working latency” or “responsiveness”) measures delay while the line is busy. A connection with low idle ping but high loaded latency suffers from bufferbloat: calls break up whenever anyone downloads or uploads.",
      "Device limits can cap results: an old laptop’s Wi-Fi card, a 100 Mbps Ethernet port, or a slow browser can make a gigabit plan look slow. Test with the fastest device you have, by cable, to measure the line itself.",
      {tip:"Keep a dated note of results (cable and Wi-Fi). ISPs respond better to “cabled tests show 40 Mbps on a 300 Mbps plan, every evening this week” than to “my internet is slow”."},
      "Some tests also report packet loss. On a healthy connection it should be zero or very close to it. Regular loss, especially on a cabled test, is worth reporting to your ISP, because it hurts calls and games far more than a lower download figure would."
     ]
    },
    related:["bandwidth-latency","home-network","wifi-mobile-data"],
    sources:[{t:"Netflix Help: Netflix-recommended internet speeds", url:"https://help.netflix.com/en/node/306"},{t:"YouTube Help: System requirements and supported devices", url:"https://support.google.com/youtube/answer/78358?hl=en"},{t:"MDN: Understanding latency", url:"https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Understanding_latency"}], checked:"2026-11"},

   {id:"saving-data-offline", title:"Saving data and working offline", aka:["data cap","Low Data Mode","Data Saver","metered connection","offline maps","offline files","airplane mode"], tags:["networks","mobile"],
    summary:"How to stay within a data allowance and prepare maps, media and files to use with no connection.",
    levels:{
     starter:[
      "A [[data-cap|data cap]] is how much data your plan includes each month. Video uses by far the most: Netflix says up to 3 GB per hour in HD and up to 7 GB in 4K.",
      "Your devices have data-saving switches: **Low Data Mode** on iPhone, iPad and Mac, **Data Saver** on Android, and **Metered connection** on Windows.",
      "To work with no connection, use [[offline-mode|offline mode]]: download maps, music, podcasts and files **before** you lose signal. Airplane mode just turns the radios off; it doesn’t save anything for you.",
      {key:"Saving data = lower video quality, fewer background downloads. Working offline = download first."},
      "Most phones also show how much data each app has used this month, so you can see what is eating your allowance."
     ],
     builder:[
      {table:[
        ["Device","Where","Effect"],
        ["iPhone/iPad","Settings → Cellular (Mobile Data) → Cellular Data Options → Low Data Mode; also per Wi-Fi network","Pauses background refresh, automatic downloads and backups; lowers streaming quality; FaceTime uses a lower bitrate"],
        ["Android","Settings → Network & internet → Data Saver","Most apps get background data only on Wi-Fi"],
        ["Windows 11","Settings → Network & internet → Wi-Fi → network → Metered connection","Only priority Windows updates download; Store downloads and offline-file sync may pause"],
        ["Mac","System Settings → Wi-Fi → Details → Low Data Mode","Reduces data use on that network"]
      ]},
      "Offline preparation:",
      {list:[
        "**Google Maps**: download an area (profile picture → Offline maps). Offline, you get driving directions within the area, but not transit, cycling or walking. Downloaded maps must be updated before they expire.",
        "**Apple Maps** (iOS 17 or later): download offline maps; offline you get driving, walking, cycling and transit directions in supported areas.",
        "**Cloud files**: mark folders as available offline (see {{cloud-storage}}).",
        "**Media**: use the download button in music, podcast and video apps while on Wi-Fi."
      ]},
      "You can also limit individual apps: on iPhone, turn off mobile data for an app in Settings → Cellular (or Mobile Data); on Android, restrict an app’s background data in its app info settings (wording varies). Windows can warn you as you approach a data limit you set for a network."
     ],
     pro:[
      "Operating systems treat “metered” or “low data” as a hint to apps: well-behaved apps postpone large transfers and background sync. Not every app respects it, so check per-app data usage pages (iPhone: Cellular settings; Android: data usage; Windows: Data usage under Advanced network settings) to find heavy users.",
      "Android lets you exempt trusted apps under **Data Saver → Unrestricted data**. Windows lets you set a data limit per network and warns as you approach it. Apple’s Low Data Mode settings for Wi-Fi networks sync across your devices through iCloud.",
      "Offline-capable web apps use browser storage to keep working without a connection and sync later; clearing site data can remove unsynced offline changes, so let them sync first.",
      "Video data use scales with resolution and frame rate; many apps’ “auto” setting adapts to your connection, which can quietly use a lot on fast mobile networks. Setting a fixed lower quality on mobile data is the most effective single saving.",
      {tip:"Before travelling abroad, check roaming charges. Downloading maps and media at home avoids most roaming data use."},
      "When you reconnect after working offline, give your devices time on Wi-Fi to sync before switching off or travelling again, and check that offline edits have uploaded, especially for shared documents where conflicts can appear."
     ]
    },
    related:["bandwidth-latency","wifi-mobile-data","cloud-storage","sync"],
    sources:[{t:"Apple Support: Use Low Data Mode on your iPhone and iPad", url:"https://support.apple.com/en-us/102433"},{t:"Microsoft Support: Metered connections in Windows", url:"https://support.microsoft.com/en-us/windows/experience/connectivity-networking/metered-connections-in-windows"},{t:"Google Maps Help: Download areas & navigate offline", url:"https://support.google.com/maps/answer/6291838?hl=en&co=GENIE.Platform%3DAndroid"}], checked:"2026-11"}
  ],
  terms:[
   {id:"internet", term:"Internet", def:"The worldwide network of networks: millions of separately run networks that agree to pass each other’s data using shared rules.", codex:"how-the-internet-works"},
   {id:"network", term:"Network", def:"Two or more devices connected so they can exchange data, by cable or radio.", codex:"how-the-internet-works"},
   {id:"lan", term:"LAN (local area network)", def:"A network in one place, such as a home, office or café. Devices on it usually have private IP addresses.", codex:"how-the-internet-works"},
   {id:"wan", term:"WAN (wide area network)", def:"A network spanning long distances, such as an ISP’s network. On a router, “WAN” means the internet side.", codex:"how-the-internet-works"},
   {id:"isp", term:"ISP (internet service provider)", def:"The company that connects your home or phone to the internet: your broadband or mobile provider.", codex:"how-the-internet-works"},
   {id:"protocol", term:"Protocol", def:"An agreed set of rules for how devices communicate, such as IP, TCP, HTTP or DNS.", codex:"how-the-internet-works"},
   {id:"packet", term:"Packet", def:"A small chunk of data with a header (addresses and a sequence number) and a payload (part of your data). Everything sent online travels as packets.", codex:"packets-routing"},
   {id:"router", term:"Router", def:"A device that passes packets between networks, choosing the next step towards each destination. Your home router joins your home network to the internet.", codex:"packets-routing"},
   {id:"undersea-cable", term:"Undersea cable", def:"A fibre-optic cable laid on the sea floor, carrying data between countries and continents as light.", codex:"cables-data-centres"},
   {id:"data-center", term:"Data centre (data center)", def:"A secure building full of servers and storage, with cooling and backup power, where websites and cloud services run.", codex:"cables-data-centres"},
   {id:"ip-address", term:"IP address", def:"The numeric address that identifies a device’s connection on a network, so packets can be delivered to it, such as `192.168.1.23`.", codex:"ip-addresses"},
   {id:"ipv4", term:"IPv4", def:"The original form of IP address: four numbers from 0 to 255 separated by dots (32 bits), allowing about 4.3 billion addresses.", codex:"ip-addresses"},
   {id:"ipv6", term:"IPv6", def:"The newer form of IP address: 128 bits, written as groups of hexadecimal separated by colons, with room for vastly more devices.", codex:"ip-addresses"},
   {id:"public-ip-address", term:"Public IP address", def:"An address that is unique on the whole internet. Your router has one; it’s the address websites see.", codex:"ip-addresses"},
   {id:"private-ip-address", term:"Private IP address", def:"An address that only works inside a local network, from reserved ranges such as `192.168.x.x` or `10.x.x.x`.", codex:"ip-addresses"},
   {id:"dns", term:"DNS (Domain Name System)", def:"The internet’s system for turning names such as `example.org` into IP addresses, like a contacts list for the internet.", codex:"dns"},
   {id:"dns-resolver", term:"DNS resolver", def:"The server that looks up names for your device (usually your ISP’s, or one you choose) and remembers recent answers.", codex:"dns"},
   {id:"domain-name", term:"Domain name", def:"A human-friendly name for a site or service, such as `example.org`, read from right to left. DNS turns it into an IP address.", codex:"domains-urls"},
   {id:"top-level-domain", term:"Top-level domain (TLD)", def:"The right-most part of a domain name, such as `.org`, `.com` or `.jp`.", codex:"domains-urls"},
   {id:"wifi", term:"Wi-Fi", def:"A way of connecting devices by radio to a nearby router or access point. It covers only that short link, not the whole internet.", codex:"wifi-mobile-data"},
   {id:"ssid", term:"SSID (network name)", def:"The name of a Wi-Fi network, the one you pick from the list. Avoid personal details in it.", codex:"wifi-mobile-data"},
   {id:"mobile-data", term:"Mobile data", def:"Internet access through your mobile provider’s masts using 4G, 5G or similar. Also called cellular data.", codex:"wifi-mobile-data"},
   {id:"hotspot", term:"Hotspot", def:"A device or place that shares an internet connection over Wi-Fi. A phone’s personal hotspot shares its mobile data with other devices.", codex:"wifi-mobile-data"},
   {id:"modem", term:"Modem", def:"The device that translates between your provider’s line (fibre, cable, phone line or 5G) and ordinary network data. Often built into the router.", codex:"home-network"},
   {id:"mesh-wifi", term:"Mesh Wi-Fi", def:"Several matching units that work together to spread one Wi-Fi network across a large home.", codex:"home-network"},
   {id:"wpa3", term:"WPA3", def:"The current, strongest security for Wi-Fi networks. WPA2 with AES is the older acceptable option; WEP is broken and the original WPA is outdated and weak.", codex:"router-security"},
   {id:"web-browser", term:"Web browser", def:"The app that requests web pages and displays them, such as Chrome, Edge, Safari or Firefox.", codex:"how-the-web-works"},
   {id:"website", term:"Website", def:"A collection of web pages and files under one domain name.", codex:"how-the-web-works"},
   {id:"web-server", term:"Web server", def:"A computer, and the software on it, that stores a website’s files and answers browsers’ requests.", codex:"how-the-web-works"},
   {id:"http", term:"HTTP", def:"Hypertext Transfer Protocol: the request-and-response rules browsers and web servers use. HTTPS is the encrypted version.", codex:"how-the-web-works"},
   {id:"browser-extension", term:"Browser extension", def:"A small add-on program that adds features to a browser. Some can read and change every page, so install few, from official stores.", codex:"how-the-web-works"},
   {id:"cookie", term:"Cookie", def:"A small piece of text a website asks your browser to store and send back later, used to keep you signed in, remember settings, and sometimes to track you.", codex:"cookies-cache"},
   {id:"cache", term:"Cache", def:"A store of saved copies so things load faster. Your browser’s cache keeps files such as images and style sheets from sites you visit.", codex:"cookies-cache"},
   {id:"bandwidth", term:"Bandwidth", def:"How much data a connection can carry per second, usually in Mbps. The width of the road.", codex:"bandwidth-latency"},
   {id:"latency", term:"Latency", def:"The delay for data to make a round trip, in milliseconds; shown as “ping” in speed tests. The length of the trip.", codex:"bandwidth-latency"},
   {id:"download", term:"Download", def:"Receiving data from the internet: opening pages, streaming, getting files.", codex:"bandwidth-latency"},
   {id:"upload", term:"Upload", def:"Sending data to the internet: backups, posting photos, sending files, your camera in a video call.", codex:"bandwidth-latency"},
   {id:"data-cap", term:"Data cap", def:"The amount of data a plan includes each month, after which you may pay more or be slowed down.", codex:"saving-data-offline"},
   {id:"offline-mode", term:"Offline mode", def:"An app’s ability to keep working with no connection, using maps, media or files you downloaded beforehand.", codex:"saving-data-offline"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t1u4-q01", lesson:"t1u4-l1", level:1, q:"Why is the internet called a “network of networks”?", options:[
     {t:"It is made of many separately run networks that agree to pass each other’s data", ok:true, why:"Homes, ISPs, universities and companies each run their own networks; joined together, they form the internet."},
     {t:"It is one giant network owned by a single international company", why:"No single organisation owns the internet. Thousands of organisations each run a part."},
     {t:"Every home has exactly two networks", why:"That has nothing to do with the phrase. It describes how the whole internet is built."},
     {t:"Wi-Fi networks connect directly to each other over the air worldwide", why:"Wi-Fi covers only a short distance. Most of the internet is joined by cables."}
   ]},
   {id:"t1u4-q02", lesson:"t1u4-l1", level:1, q:"What is a packet?", options:[
     {t:"A small chunk of data with addresses and a sequence number in its header", ok:true, why:"All data online is split into packets, which are reassembled at the destination."},
     {t:"A complete file sent in one piece", why:"Files are split into many packets; they don’t travel whole."},
     {t:"A bundle of internet data sold by a mobile provider", why:"That’s a data plan or allowance, not a packet."},
     {t:"A type of cable used under the sea", why:"Undersea cables carry packets, but they aren’t packets."}
   ]},
   {id:"t1u4-q03", lesson:"t1u4-l1", level:1, q:"What does a router do with each packet it receives?", options:[
     {t:"Reads the destination address and sends it one step closer", ok:true, why:"Routers forward packets hop by hop, each choosing the best next step."},
     {t:"Opens it and reads the message to decide if it’s safe", why:"Routers forward by the header. With HTTPS, they can’t read the content anyway."},
     {t:"Stores it until the whole file has arrived, then sends it on", why:"Routers pass packets on immediately; reassembly happens at the destination."},
     {t:"Works out the entire route to the destination", why:"No single router knows the whole route, only the next step."}
   ]},
   {id:"t1u4-q04", lesson:"t1u4-l1", level:2, q:"Which statement about the internet and the web is correct?", options:[
     {t:"The web is one service that runs over the internet, alongside email, calls and apps", ok:true, why:"The internet is the delivery system; the web (pages in a browser) is one kind of traffic on it."},
     {t:"They are two names for the same thing", why:"A common mix-up. The internet carries many services besides the web."},
     {t:"The internet runs over the web", why:"It’s the other way round: the web runs over the internet."},
     {t:"Email and video calls are part of the web", why:"They use their own protocols over the internet; the web is pages in a browser."}
   ]},
   {id:"t1u4-q05", lesson:"t1u4-l1", level:2, q:"How does most data travel between continents?", options:[
     {t:"Through fibre-optic cables on the sea floor", ok:true, why:"Undersea cables carry far more data than satellites, at lower cost."},
     {t:"Mostly by satellite", why:"Satellites carry only a small share of international traffic; they’re useful for remote areas."},
     {t:"By long-range Wi-Fi", why:"Wi-Fi covers only short distances."},
     {t:"Over the old telephone network’s copper wires", why:"Long-distance links are fibre today, mostly in undersea cables between continents."}
   ]},
   {id:"t1u4-q06", lesson:"t1u4-l1", level:3, q:"Amara’s streaming video glitches for a second, then carries on. Her file download, running at the same time, finishes perfectly. Why the difference?", options:[
     {t:"For live video, late packets are often skipped; for downloads, missing packets are resent until the file is complete", ok:true, why:"Live media prefers timeliness, so a lost packet causes a glitch. File transfers use TCP, which resends missing packets."},
     {t:"Downloads use a different internet from video", why:"Both use the same internet. They handle lost packets differently."},
     {t:"Her router gave the download priority and switched off the video", why:"The video carried on, so it wasn’t switched off. The glitch was lost or late packets being skipped."},
     {t:"Video is never split into packets", why:"Video travels in packets like everything else."}
   ]},
   {id:"t1u4-q07", lesson:"t1u4-l1", level:2, q:"What is “the cloud”, physically?", options:[
     {t:"Servers and storage in data centres, used over the internet", ok:true, why:"Cloud services run on real computers in secure buildings with cooling and backup power."},
     {t:"Satellites that store data in orbit", why:"Cloud data is stored on the ground, in data centres."},
     {t:"Space on other users’ phones", why:"Mainstream cloud services use the provider’s own servers."},
     {t:"A special part of your own device’s storage", why:"Your device may keep copies, but the cloud copies are on the provider’s servers."}
   ]},
   {id:"t1u4-q08", lesson:"t1u4-l1", level:3, q:"A ship’s anchor cuts an undersea cable. Lucía, in a city served by many cables, notices nothing. Why?", options:[
     {t:"Routers send traffic around the break using other cables and routes", ok:true, why:"The internet is designed so no single router or link is essential. Regions with few cables are more affected."},
     {t:"Her data travels by satellite instead whenever cables fail", why:"Satellites carry only a small share of traffic; rerouting through other cables is what saves the day."},
     {t:"Undersea cables only carry backup copies of data", why:"They carry live international traffic."},
     {t:"Her ISP stores a copy of the whole internet locally", why:"No ISP stores the whole internet. Some popular content is cached nearby, but rerouting is the main reason."}
   ]},
   {id:"t1u4-q09", lesson:"t1u4-l1", level:3, q:"Kenji’s phone shows full Wi-Fi bars at home, but nothing loads. His friend says, “Your Wi-Fi is perfect, so your internet must be fine.” What’s wrong with that reasoning?", options:[
     {t:"Wi-Fi bars only show the link to the router; the router’s connection to the ISP may be down", ok:true, why:"Wi-Fi is just the first short hop. The problem may be the router, modem, line or ISP."},
     {t:"Nothing: full bars guarantee a working internet connection", why:"Bars measure the radio link to the router, not the internet beyond it."},
     {t:"Full bars mean his phone is broken", why:"Strong signal doesn’t indicate a fault in the phone."},
     {t:"Wi-Fi bars show his monthly data allowance", why:"Bars show signal strength, not data allowance."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t1u4-q10", lesson:"t1u4-l2", level:1, q:"What does DNS do?", options:[
     {t:"Turns domain names such as example.org into IP addresses", ok:true, why:"DNS is the internet’s contacts list: names in, numbers out."},
     {t:"Encrypts your web traffic", why:"That’s HTTPS. DNS looks up addresses."},
     {t:"Gives your device a private IP address at home", why:"Your router does that. DNS translates names."},
     {t:"Measures your internet speed", why:"Speed tests do that."}
   ]},
   {id:"t1u4-q11", lesson:"t1u4-l2", level:2, q:"Which of these is a private IPv4 address?", options:[
     {t:"`192.168.0.20`", ok:true, why:"192.168.0.0–192.168.255.255 is one of the three reserved private ranges."},
     {t:"`8.8.8.8`", why:"That’s a well-known public address, reachable from anywhere."},
     {t:"`172.40.1.1`", why:"The private 172 range is only 172.16 to 172.31. 172.40 is outside it."},
     {t:"`2001:db8::1`", why:"That’s an IPv6 address (from the documentation range), not IPv4."}
   ]},
   {id:"t1u4-q12", lesson:"t1u4-l2", level:1, q:"Why was IPv6 created?", options:[
     {t:"IPv4 has only about 4.3 billion addresses, which isn’t enough for today’s devices", ok:true, why:"IPv6’s 128-bit addresses provide vastly more."},
     {t:"To make websites load ten times faster", why:"IPv6 is about addressing, not a speed boost."},
     {t:"Because IPv4 doesn’t work with Wi-Fi", why:"IPv4 works over Wi-Fi. The problem is the limited number of addresses."},
     {t:"To replace DNS", why:"DNS still turns names into addresses, for IPv4 and IPv6 alike."}
   ]},
   {id:"t1u4-q13", lesson:"t1u4-l2", level:2, q:"Fatima’s laptop shows the address `192.168.1.14`, but a “what is my IP” search shows `203.0.113.88`. What explains this?", options:[
     {t:"The first is her laptop’s private address at home; the second is her router’s public address", ok:true, why:"Her router uses NAT, so the internet sees only its public address."},
     {t:"One of them must be wrong", why:"Both are correct; they’re different kinds of address."},
     {t:"Her laptop has been hacked", why:"Having different private and public addresses is completely normal."},
     {t:"The search site is showing its own address", why:"It shows the address your connection arrives from: your router’s public one."}
   ]},
   {id:"t1u4-q14", lesson:"t1u4-l2", level:3, q:"Sione’s family laptop and phone show “Server not found” for every website on home Wi-Fi. A music stream started earlier keeps playing, and everything works on mobile data. What should he try first?", options:[
     {t:"Restart the router, since this looks like a DNS problem on the home connection", ok:true, why:"New lookups fail while existing connections work, and mobile data (a different resolver) is fine: classic DNS. A restart often fixes it; otherwise the ISP’s resolver may be down."},
     {t:"Buy a faster internet plan", why:"Speed isn’t the issue; names aren’t being looked up."},
     {t:"Reset the laptop to factory settings", why:"Two devices are affected, so the cause is shared, not the laptop."},
     {t:"Clear cookies on both devices", why:"Cookies don’t affect DNS lookups."}
   ]},
   {id:"t1u4-q15", lesson:"t1u4-l2", level:1, q:"In `news.example.org`, which part is the top-level domain?", options:[
     {t:"`.org`", ok:true, why:"The TLD is the right-most part."},
     {t:"`news`", why:"That’s a subdomain chosen by the owner of example.org."},
     {t:"`example`", why:"That’s the name that was registered under .org."},
     {t:"`news.example`", why:"Domain names are read from the right; the top level is the last label."}
   ]},
   {id:"t1u4-q16", lesson:"t1u4-l2", level:2, q:"Why do most DNS lookups happen almost instantly?", options:[
     {t:"Answers are cached by your browser, device and resolver for a while", ok:true, why:"Caching means the full lookup chain is only needed occasionally."},
     {t:"Every device stores a complete copy of all domain names", why:"There are far too many names; devices only cache recent answers."},
     {t:"DNS servers are inside every router", why:"Routers may forward or cache lookups, but the full system is spread across many servers."},
     {t:"Domain names are converted using a fixed formula", why:"There’s no formula; names are looked up in the DNS."}
   ]},
   {id:"t1u4-q17", lesson:"t1u4-l2", level:3, q:"Tomás sees a site at `shop-example.tv`. He assumes the business must be in Tuvalu, because `.tv` is Tuvalu’s country code. Is he right?", options:[
     {t:"Not necessarily: some country codes like .tv and .io are used by businesses worldwide", ok:true, why:"A TLD doesn’t prove where a business is based, or whether it’s trustworthy."},
     {t:"Yes: a country-code TLD always means the business is in that country", why:"Many country codes are open to registrants anywhere."},
     {t:"Yes, and that also proves the site is genuine", why:"A TLD says nothing about honesty."},
     {t:"No, because .tv is a generic TLD only for television companies", why:".tv is Tuvalu’s country code, used widely for its look, not restricted to TV companies."}
   ]},
   {id:"t1u4-q18", lesson:"t1u4-l2", level:2, q:"Ana restarts her home router and later notices her public IP address has changed. What’s the most likely reason?", options:[
     {t:"Her ISP gives her connection a dynamic public address, which can change", ok:true, why:"Many home connections get dynamic addresses from the ISP. It’s normal."},
     {t:"Her router has been hacked", why:"A changing public address is routine and not a sign of compromise."},
     {t:"Her laptop changed its own public address", why:"The public address belongs to the router’s connection, assigned by the ISP."},
     {t:"Restarting a router switches her to IPv6 permanently", why:"Restarting doesn’t switch protocol; it can lead to a new dynamic address."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t1u4-q19", lesson:"t1u4-l3", level:1, q:"What does a modem do?", options:[
     {t:"Translates between your provider’s line and ordinary network data", ok:true, why:"It turns the line’s signal (fibre, cable, phone line, 5G) into data your router can use, and back."},
     {t:"Makes the Wi-Fi signal", why:"That’s the access point, often built into the router."},
     {t:"Turns domain names into IP addresses", why:"That’s the job of DNS, not the modem."},
     {t:"Blocks viruses from websites", why:"That isn’t a modem’s job."}
   ]},
   {id:"t1u4-q20", lesson:"t1u4-l3", level:1, q:"Which Wi-Fi band generally reaches furthest and passes through walls best?", options:[
     {t:"2.4 GHz", ok:true, why:"Lower frequencies travel further and penetrate obstacles better, at lower speeds."},
     {t:"5 GHz", why:"5 GHz is faster but has a shorter range."},
     {t:"6 GHz", why:"6 GHz has lots of room but a range similar to 5 GHz."},
     {t:"They all reach exactly the same distance", why:"Range differs: lower frequencies travel further."}
   ]},
   {id:"t1u4-q21", lesson:"t1u4-l3", level:2, q:"Which Wi-Fi security setting do Apple’s guidance and CISA recommend for a home router?", options:[
     {t:"WPA3 Personal, or WPA2/WPA3 mixed mode for older devices", ok:true, why:"WPA3 is the current strongest; mixed mode keeps older devices connected. WPA2-AES is still acceptable."},
     {t:"WEP", why:"WEP is broken and easy to crack."},
     {t:"An open network with a hidden name", why:"Open networks have no Wi-Fi security, and hiding the name adds none."},
     {t:"WPA (the original version)", why:"Original WPA is outdated and weak."}
   ]},
   {id:"t1u4-q22", lesson:"t1u4-l3", level:2, q:"What is a mesh Wi-Fi system?", options:[
     {t:"Several units working together to spread one Wi-Fi network across a home", ok:true, why:"Mesh units share one network name, so devices move between them smoothly."},
     {t:"A metal screen that blocks neighbours’ Wi-Fi", why:"Mesh refers to linked units, not physical screens."},
     {t:"A way to combine two internet plans", why:"Mesh spreads one connection’s Wi-Fi; it doesn’t combine plans."},
     {t:"A type of mobile data", why:"Mesh is home Wi-Fi equipment."}
   ]},
   {id:"t1u4-q23", lesson:"t1u4-l3", level:3, q:"Mei’s new smart plug won’t join her Wi-Fi, though her phone and laptop work fine. What’s a likely cause?", options:[
     {t:"The plug only supports 2.4 GHz, and it can’t find or use her router’s 2.4 GHz band", ok:true, why:"Many smart-home gadgets support only 2.4 GHz. Check the band and the plug’s setup instructions."},
     {t:"Her internet plan is too slow for a plug", why:"A smart plug needs very little bandwidth."},
     {t:"Smart plugs need mobile data", why:"Most use Wi-Fi."},
     {t:"Her router needs to be replaced with a modem", why:"A modem doesn’t make Wi-Fi. The likely issue is the band."}
   ]},
   {id:"t1u4-q24", lesson:"t1u4-l3", level:3, q:"Dmitri never changed his router’s admin password from `admin`. Why does this matter?", options:[
     {t:"Default admin passwords are often published, so anyone who gets onto his network could change his router’s settings, including DNS", ok:true, why:"CISA puts changing the admin password first for this reason. A changed DNS setting could send him to fake sites."},
     {t:"It doesn’t matter if his Wi-Fi password is strong", why:"Anyone on the network (a visitor, a compromised gadget) could still reach the settings."},
     {t:"It makes his internet slower", why:"The admin password doesn’t affect speed."},
     {t:"It only matters for 6 GHz Wi-Fi", why:"It matters for every router, whatever the band."}
   ]},
   {id:"t1u4-q25", lesson:"t1u4-l3", level:2, q:"How does Bluetooth differ from Wi-Fi?", options:[
     {t:"Bluetooth links two nearby devices directly; Wi-Fi connects devices to a router for network and internet access", ok:true, why:"Headphones, keyboards and watches use Bluetooth; internet access comes through Wi-Fi or mobile data."},
     {t:"Bluetooth is a faster type of Wi-Fi", why:"They’re different technologies for different jobs."},
     {t:"Bluetooth only works through cables", why:"Bluetooth is wireless."},
     {t:"Bluetooth connects your phone to mobile masts", why:"That’s mobile data."}
   ]},
   {id:"t1u4-q26", lesson:"t1u4-l3", level:3, q:"Priya connects her laptop to her phone’s hotspot. An hour later her phone warns that most of her monthly data is gone. What probably happened?", options:[
     {t:"The laptop ran large background downloads, such as updates or cloud sync, over the phone’s mobile data", ok:true, why:"Laptops treat Wi-Fi as unlimited unless told otherwise. Marking the hotspot as metered or Low Data Mode prevents this."},
     {t:"Hotspots use data even when nothing is connected", why:"An idle hotspot with no traffic uses almost nothing; the laptop’s activity used the data."},
     {t:"Someone hacked her Wi-Fi password at home", why:"The data was used through the hotspot, and her laptop’s background activity is the far likelier cause."},
     {t:"Bluetooth was turned on", why:"Bluetooth doesn’t use mobile data."}
   ]},
   {id:"t1u4-q27", lesson:"t1u4-l3", level:2, q:"Which of these does official guidance say does **not** add real security to home Wi-Fi?", options:[
     {t:"Hiding the network name (SSID)", ok:true, why:"Apple and the NSA say hidden networks can still be found; it adds no real protection."},
     {t:"Turning on automatic firmware updates", why:"Updates fix known flaws, so they do add security."},
     {t:"Using a long Wi-Fi passphrase", why:"Length makes the password much harder to guess."},
     {t:"Turning off remote management", why:"This keeps the settings page off the internet, reducing risk."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t1u4-q28", lesson:"t1u4-l4", level:1, q:"What is a web server?", options:[
     {t:"A computer, and its software, that stores a website’s files and answers browsers’ requests", ok:true, why:"Browsers ask; servers answer."},
     {t:"The app you use to view web pages", why:"That’s a web browser."},
     {t:"Your home router", why:"Your router forwards traffic; it doesn’t host websites."},
     {t:"The cable that connects you to the internet", why:"That’s part of the physical network."}
   ]},
   {id:"t1u4-q29", lesson:"t1u4-l4", level:1, q:"A page shows “404 Not Found”. What does that mean?", options:[
     {t:"The server answered, but that page doesn’t exist", ok:true, why:"The connection worked; the address is wrong or the page was removed."},
     {t:"Your internet connection is down", why:"If it were down, no server could have answered with 404."},
     {t:"The server is overloaded", why:"That would usually be 503 Service Unavailable."},
     {t:"You’re not allowed to see the page", why:"That’s 403 Forbidden."}
   ]},
   {id:"t1u4-q30", lesson:"t1u4-l4", level:1, q:"What is a cookie?", options:[
     {t:"A small piece of text a site asks your browser to store and send back on later visits", ok:true, why:"Cookies keep you signed in, remember settings, and are sometimes used for tracking."},
     {t:"A type of virus", why:"Cookies are text, not programs."},
     {t:"A saved copy of a website’s images", why:"That’s the cache."},
     {t:"The list of pages you visited", why:"That’s browsing history."}
   ]},
   {id:"t1u4-q31", lesson:"t1u4-l4", level:2, q:"Why does a browser keep a cache?", options:[
     {t:"So it can reuse saved copies of files and load pages faster with less data", ok:true, why:"Logos, styles and scripts rarely change, so reusing them saves time and data."},
     {t:"To remember your passwords", why:"Passwords are stored by the password manager, not the cache."},
     {t:"To keep you signed in", why:"That’s what cookies do."},
     {t:"To report your browsing to your ISP", why:"The cache is stored on your device for speed."}
   ]},
   {id:"t1u4-q32", lesson:"t1u4-l4", level:3, q:"After a website redesign, Lucía’s browser shows a broken layout, but the site looks fine on her phone. What’s the best first fix?", options:[
     {t:"A hard refresh, or clearing cached images and files", ok:true, why:"Her browser is probably mixing old cached files with the new page. This fetches fresh copies without signing her out."},
     {t:"Clear all cookies, history and passwords", why:"Too drastic: she’d be signed out everywhere and could lose saved data."},
     {t:"Restart her router", why:"The phone works on the same connection, so the network isn’t the issue."},
     {t:"Install a browser extension to fix layouts", why:"Unneeded and potentially risky. The cache is the likely cause."}
   ]},
   {id:"t1u4-q33", lesson:"t1u4-l4", level:2, q:"What will happen if Oluwaseun clears only **cached images and files**?", options:[
     {t:"Pages may load a little slower at first, but he stays signed in", ok:true, why:"Cached files are just copies; clearing them doesn’t touch cookies."},
     {t:"He’ll be signed out of every website", why:"That happens when you clear cookies, not cached files."},
     {t:"His bookmarks will be deleted", why:"Bookmarks aren’t part of the cache."},
     {t:"His saved passwords will be deleted", why:"Passwords are separate and only deleted if chosen."}
   ]},
   {id:"t1u4-q34", lesson:"t1u4-l4", level:2, q:"What happens first when you type a new website’s address and press Enter?", options:[
     {t:"The browser finds the server’s IP address with DNS", ok:true, why:"It must know where the server is before it can send any request."},
     {t:"The server sends the page", why:"The server can’t send anything until the browser has connected and asked."},
     {t:"The browser stores a cookie", why:"Cookies come later, in responses."},
     {t:"The browser draws the page from the cache", why:"For a new site there’s nothing cached; the lookup and request come first."}
   ]},
   {id:"t1u4-q35", lesson:"t1u4-l4", level:3, q:"Hana uses a private window at a library computer to sign in to her email, then closes the window. Which is true?", options:[
     {t:"The computer won’t keep her history or cookies, but the library network and the sites she used still saw her activity", ok:true, why:"Private mode only affects what’s stored on that device."},
     {t:"Nobody can know she visited any site", why:"Sites, networks and ISPs still see connections."},
     {t:"Her email account is now deleted", why:"Closing a private window doesn’t affect her account."},
     {t:"The next person to use the computer can open her email", why:"Closing the private window discards its cookies, so she isn’t left signed in."}
   ]},
   {id:"t1u4-q36", lesson:"t1u4-l4", level:3, q:"An extension that “changes the colour of web pages” asks for permission to read and change all data on all websites. What should Kenji conclude?", options:[
     {t:"It technically needs page access, but he should only install it from the official store and a publisher he trusts, or choose a tool with narrower access", ok:true, why:"Broad access means it could read anything he types. Trust in the publisher and the store matters a lot."},
     {t:"Permissions don’t matter for extensions", why:"They matter greatly: broad access lets an extension see passwords and messages typed into pages."},
     {t:"He should install it from a pop-up link instead", why:"Pop-up installs are riskier than official stores."},
     {t:"It’s safe if he uses it only in private windows", why:"Private windows don’t limit what an extension can see."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t1u4-q37", lesson:"t1u4-l5", level:1, q:"What is latency?", options:[
     {t:"The delay for data to make a round trip, measured in milliseconds", ok:true, why:"Speed tests often show it as ping."},
     {t:"How much data can move per second", why:"That’s bandwidth."},
     {t:"The monthly data allowance", why:"That’s a data cap."},
     {t:"The size of a downloaded file", why:"File size is measured in bytes."}
   ]},
   {id:"t1u4-q38", lesson:"t1u4-l5", level:2, q:"About how many megabytes per second can a 200 Mbps connection deliver at best?", options:[
     {t:"25 MB/s", ok:true, why:"200 megabits ÷ 8 bits per byte = 25 megabytes per second."},
     {t:"200 MB/s", why:"Mbps is megabits; divide by 8 for megabytes."},
     {t:"1,600 MB/s", why:"That multiplies by 8 instead of dividing."},
     {t:"2.5 MB/s", why:"That divides by 80. One byte is 8 bits, so divide by 8."}
   ]},
   {id:"t1u4-q39", lesson:"t1u4-l5", level:3, q:"Fatima’s plan is 300 Mbps. A speed test on a cabled desktop shows 290 Mbps, but on Wi-Fi in her upstairs office it shows 30 Mbps. Where is the problem?", options:[
     {t:"Wi-Fi coverage upstairs, not the line from her ISP", ok:true, why:"The cabled result matches the plan, so the line is fine. Improve Wi-Fi: move the router, add mesh or run a cable."},
     {t:"Her ISP isn’t delivering the speed she pays for", why:"The cabled test shows the ISP delivers nearly full speed."},
     {t:"The speed test website is broken", why:"The tests agree with each other in a way that points clearly to Wi-Fi."},
     {t:"Her plan is too slow for upstairs rooms", why:"Plan speed doesn’t depend on rooms; Wi-Fi coverage does."}
   ]},
   {id:"t1u4-q40", lesson:"t1u4-l5", level:2, q:"Which activity depends most on low latency?", options:[
     {t:"An online multiplayer game", ok:true, why:"Each action needs a quick round trip; delay feels like lag."},
     {t:"Downloading a film to watch later", why:"That depends mainly on bandwidth."},
     {t:"Backing up photos overnight", why:"That depends on upload bandwidth; delay hardly matters."},
     {t:"Downloading a large software update", why:"That’s a bandwidth job."}
   ]},
   {id:"t1u4-q41", lesson:"t1u4-l5", level:3, q:"Tomás has 6 GB of mobile data left this month. Netflix says high-definition video uses up to 3 GB an hour. Roughly how much HD video could he stream?", options:[
     {t:"About 2 hours", ok:true, why:"6 GB ÷ 3 GB per hour = 2 hours, using the provider’s upper estimate."},
     {t:"About 18 hours", why:"That multiplies instead of dividing."},
     {t:"About half an hour", why:"That divides 3 by 6 the wrong way round."},
     {t:"About 48 hours", why:"That treats gigabytes as gigabits (multiplying by 8), which doesn’t apply here: both figures are in GB."}
   ]},
   {id:"t1u4-q42", lesson:"t1u4-l5", level:2, q:"What does turning on Data Saver (Android) or Low Data Mode (iPhone) mainly do?", options:[
     {t:"Limits background data use, such as automatic downloads and refreshes", ok:true, why:"Apps you’re using still work, but background activity is held back."},
     {t:"Blocks all internet use", why:"That would be airplane mode or turning mobile data off."},
     {t:"Makes your connection faster", why:"It saves data; it doesn’t increase speed."},
     {t:"Downloads maps for offline use", why:"Offline maps are downloaded in the maps app."}
   ]},
   {id:"t1u4-q43", lesson:"t1u4-l5", level:3, q:"Ana’s video call keeps freezing while her family streams and her phone backs up photos. What should she try first?", options:[
     {t:"Turn off her camera and pause the photo backup", ok:true, why:"Video uses far more data than audio, and the backup competes for her upload. Both are quick and free."},
     {t:"Clear her browser’s cookies", why:"Cookies don’t affect call quality."},
     {t:"Restart the call on more devices at once", why:"That adds traffic and makes things worse."},
     {t:"Switch the device she’s calling on to airplane mode", why:"Airplane mode turns off the radios the call needs, so it would cut her off completely."}
   ]},
   {id:"t1u4-q44", lesson:"t1u4-l5", level:2, q:"Lucía will be on a long rural bus ride with no signal. What will work offline?", options:[
     {t:"Map areas, podcasts and files she downloaded beforehand", ok:true, why:"Offline content has to be saved while she still has a connection."},
     {t:"Any website, as long as airplane mode is on", why:"Airplane mode turns radios off; it doesn’t save websites."},
     {t:"Streaming music, because it uses little data", why:"Streaming needs a connection however little data it uses."},
     {t:"Cloud files she has never opened or marked offline", why:"Online-only cloud files need a connection to download."}
   ]},
   {id:"t1u4-q45", lesson:"t1u4-l5", level:1, q:"What is uploading?", options:[
     {t:"Sending data from your device to the internet, such as a backup or a video you post", ok:true, why:"Upload is outbound; download is inbound."},
     {t:"Receiving a film to watch", why:"That’s downloading or streaming."},
     {t:"Installing an update from the app store", why:"That’s downloading."},
     {t:"Opening a web page", why:"Opening pages is mostly downloading."}
   ]}
  ]
});
