// src/data/parks.js
// ✅ Madhya Pradesh Parks master data (EN + HI) + Links (booking, maps, website)

export const mpParks = [
  // 1) Kanha
  {
    id: "kanha",
    image: "/images/parks/kanha.jpg",
    name: { en: "Kanha National Park", hi: "कान्हा राष्ट्रीय उद्यान" },
    district: { en: "Mandla / Balaghat (MP)", hi: "मंडला / बालाघाट (मप्र)" },
    description: {
      en: "India’s best-managed tiger reserve; sal forests & wide meadows with the world’s only hard-ground barasingha.",
      hi: "भारत के सबसे बेहतर प्रबंधित बाघ अभयारण्यों में से एक; साल के जंगल और दुनिया की एकमात्र कठोर भूमि बारहसिंगा घासभूमि।",
    },
    bestTime: { en: "Oct–Jun (Feb–May peak)", hi: "अक्टूबर–जून (फ़र–मई सर्वोत्तम)" },
    safariTypes: { en: ["Jeep", "Canter", "Night (limited)"], hi: ["जीप", "कैन्टर", "नाइट (सीमित)"] },
    zones: { en: ["Kisli", "Mukki", "Kanha", "Sarhi"], hi: ["किसली", "मुक्की", "कान्हा", "सरही"] },
    entryGates: { en: ["Khatia", "Mukki", "Kanha Gate", "Sarhi"], hi: ["खटिया", "मुक्की", "कान्हा गेट", "सरही"] },
    timings: {
      summer: { en: "≈ 5:30–10:30 & 3:00–6:30", hi: "≈ 5:30–10:30 और 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 और 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Barasingha", "Leopard", "Sloth bear", "Wild dog", "Gaur"],
      hi: ["बाघ", "बारहसिंगा", "तेन्दुआ", "भालू", "जंगली कुत्ता", "गौर"],
    },
    howToReach: {
      en: "Rail: Gondia/Jabalpur. Air: Jabalpur (~160 km), Nagpur (~260 km).",
      hi: "रेल: गोंदिया/जबलपुर. वायु: जबलपुर (~160 किमी), नागपुर (~260 किमी).",
    },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kanha+National+Park",
    website: "https://www.kanhanationalparkonline.in",
  },

  // 2) Bandhavgarh
  {
    id: "bandhavgarh",
    image: "/images/parks/bandhavgarh.jpg",
    name: { en: "Bandhavgarh National Park", hi: "बांधवगढ़ राष्ट्रीय उद्यान" },
    district: { en: "Umaria (MP)", hi: "उमरिया (मप्र)" },
    description: {
      en: "High tiger density; sal–bamboo forests and the ancient Bandhavgarh Fort.",
      hi: "उच्च बाघ घनत्व; साल-बाँस के जंगल और प्राचीन बांधवगढ़ किला।",
    },
    bestTime: { en: "Oct–Jun (Feb–May best)", hi: "अक्टूबर–जून (फ़र–मई श्रेष्ठ)" },
    safariTypes: { en: ["Jeep", "Canter"], hi: ["जीप", "कैन्टर"] },
    zones: { en: ["Tala", "Magdhi", "Khitauli"], hi: ["ताला", "मगधी", "खीटौली"] },
    entryGates: { en: ["Tala", "Magdhi", "Khitauli"], hi: ["ताला", "मगधी", "खीटौली"] },
    timings: {
      summer: { en: "≈ 5:30–10:30 & 3:00–6:30", hi: "≈ 5:30–10:30 और 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 और 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Deer", "Wild boar"],
      hi: ["बाघ", "तेन्दुआ", "हिरण", "जंगली सूअर"],
    },
    howToReach: {
      en: "Rail: Umaria (~35 km). Air: Jabalpur (~164 km).",
      hi: "रेल: उमरिया (~35 किमी). वायु: जबलपुर (~164 किमी).",
    },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Bandhavgarh+National+Park",
    website: "https://www.bandhavgarhnationalpark.in",
  },

  // 3) Pench
  {
    id: "pench",
    image: "/images/parks/pench.jpg",
    name: { en: "Pench National Park", hi: "पेंच राष्ट्रीय उद्यान" },
    district: { en: "Seoni / Chhindwara (MP)", hi: "सिवनी / छिंदवाड़ा (मप्र)" },
    description: {
      en: "Inspiration for ‘The Jungle Book’; teak & mixed forests with multiple gates.",
      hi: "‘जंगल बुक’ की प्रेरणा; सागौन व मिश्रित वन, अनेक प्रवेश द्वार।",
    },
    bestTime: { en: "Oct–Jun", hi: "अक्टूबर–जून" },
    safariTypes: { en: ["Jeep", "Canter", "Boat"], hi: ["जीप", "कैन्टर", "बोट"] },
    zones: { en: ["Turia", "Karmajhiri", "Jamtara"], hi: ["तुरिया", "कर्माझीरी", "जमठार"] },
    entryGates: { en: ["Turia", "Karmajhiri", "Jamtara"], hi: ["तुरिया", "कर्माझीरी", "जमठार"] },
    timings: {
      summer: { en: "≈ 5:30–10:30 & 3:00–6:30", hi: "≈ 5:30–10:30 और 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 और 2:30–5:30" },
    },
    wildlife: { en: ["Tiger", "Leopard", "Wild dog", "Sambar", "Gaur"], hi: ["बाघ", "तेन्दुआ", "जंगली कुत्ता", "सांभर", "गौर"] },
    howToReach: { en: "Rail/Air: Nagpur ~90–130 km.", hi: "रेल/वायु: नागपुर ~90–130 किमी." },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Pench+National+Park",
    website: "https://www.penchnationalparkonline.in",
  },

  // 4) Satpura
  {
    id: "satpura",
    image: "/images/parks/satpura.jpg",
    name: { en: "Satpura Tiger Reserve", hi: "सतपुड़ा टाइगर रिज़र्व" },
    district: { en: "Hoshangabad/Narmadapuram (MP)", hi: "होशंगाबाद/नर्मदापुरम (मप्र)" },
    description: {
      en: "Unique landscape with jeep, boat & walking safaris; rich birdlife.",
      hi: "जीप, बोट व वॉकिंग सफारी वाला अनूठा परिदृश्य; समृद्ध पक्षी-विविधता।",
    },
    bestTime: { en: "Oct–Jun", hi: "अक्टूबर–जून" },
    safariTypes: { en: ["Jeep", "Boat", "Walking"], hi: ["जीप", "बोट", "वॉकिंग"] },
    zones: { en: ["Pachmarhi", "Panarpani", "Churna"], hi: ["पचमढ़ी", "पनारपानी", "चूरना"] },
    entryGates: { en: ["Pachmarhi", "Matkuli", "Sohagpur side"], hi: ["पचमढ़ी", "मतकुली", "सोहागपुर"] },
    timings: {
      summer: { en: "≈ 5:30–10:30 & 3:00–6:30", hi: "≈ 5:30–10:30 और 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 और 2:30–5:30" },
    },
    wildlife: { en: ["Leopard", "Sloth bear", "Gaur", "Crocodile"], hi: ["तेन्दुआ", "भालू", "गौर", "घड़ियाल/मगर"] },
    howToReach: { en: "Rail: Pipariya/Itarsi. Air: Bhopal (~135 km).", hi: "रेल: पिपरिया/इटारसी. वायु: भोपाल (~135 किमी)." },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Satpura+Tiger+Reserve",
    website: "https://www.satpuranationalparkonline.in",
  },

  // 5) Panna
  {
    id: "panna",
    image: "/images/parks/panna.jpg",
    name: { en: "Panna Tiger Reserve", hi: "पन्ना टाइगर रिज़र्व" },
    district: { en: "Panna / Chhatarpur (MP)", hi: "पन्ना / छतरपुर (मप्र)" },
    description: {
      en: "Ken River landscapes with jeep & boat safaris; gharials and rich birdlife.",
      hi: "केन नदी के मनमोहक दृश्य; जीप व बोट सफारी; घड़ियाल व समृद्ध पक्षी जीवन।",
    },
    bestTime: { en: "Nov–Mar (pleasant)", hi: "नवंबर–मार्च (सुहावना)" },
    safariTypes: { en: ["Jeep", "Boat"], hi: ["जीप", "बोट"] },
    zones: { en: ["Madla", "Hinauta", "Akola"], hi: ["मडला", "हिनौता", "अकोला"] },
    entryGates: { en: ["Madla", "Hinauta"], hi: ["मडला", "हिनौता"] },
    timings: {
      summer: { en: "≈ 5:30–10:30 & 3:00–6:30", hi: "≈ 5:30–10:30 और 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 और 2:30–5:30" },
    },
    wildlife: { en: ["Tiger", "Leopard", "Gharial", "Crocodile", "Vulture"], hi: ["बाघ", "तेन्दुआ", "घड़ियाल", "मगर", "गिद्ध"] },
    howToReach: { en: "Rail: Khajuraho/Satna. Air: Khajuraho (~25 km).", hi: "रेल: खजुराहो/सतना. वायु: खजुराहो (~25 किमी)." },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Panna+Tiger+Reserve",
    website: "https://www.pannanationalparkonline.in",
  },

  // 6) Sanjay-Dubri
  {
    id: "sanjay-dubri",
    image: "/images/parks/sanjay-dubri.jpg",
    name: { en: "Sanjay–Dubri Tiger Reserve", hi: "संजय–दुबरी टाइगर रिज़र्व" },
    district: { en: "Sidhi / Singrauli (MP)", hi: "सीधी / सिंगरौली (मप्र)" },
    description: {
      en: "Lush sal forests and meadows across the Son basin; growing tiger habitat.",
      hi: "सोन बेसिन के घने साल वन व घासभूमियाँ; उभरता बाघ आवास।",
    },
    bestTime: { en: "Nov–May", hi: "नवंबर–मई" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    zones: { en: ["Dubri", "Sanjay"], hi: ["दुबरी", "संजय"] },
    entryGates: { en: ["Dubri/Sidhi side"], hi: ["दुबरी/सीधी साइड"] },
    timings: {
      summer: { en: "≈ 5:30–10:30 & 3:00–6:30", hi: "≈ 5:30–10:30 और 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 और 2:30–5:30" },
    },
    wildlife: { en: ["Tiger", "Leopard", "Chital", "Sloth bear"], hi: ["बाघ", "तेन्दुआ", "चितल", "भालू"] },
    howToReach: { en: "Rail: Rewa/Sidhi. Air: Jabalpur/Prayagraj (regional).", hi: "रेल: रीवा/सीधी. वायु: जबलपुर/प्रयागराज (क्षेत्रीय)." },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Sanjay+Dubri+Tiger+Reserve",
    website: "https://mpforest.co.in", // तुमने जो दिखाया था
  },

  // 7) Kuno
  {
    id: "kuno",
    image: "/images/parks/kuno.jpg",
    name: { en: "Kuno National Park", hi: "कूनो राष्ट्रीय उद्यान" },
    district: { en: "Sheopur (MP)", hi: "श्योपुर (मप्र)" },
    description: {
      en: "River Kuno forests; cheetah introduction site and diverse dry forests.",
      hi: "कूनो नदी के वन; चीता परिचय स्थल और विविध शुष्क वन।",
    },
    bestTime: { en: "Nov–Mar (pleasant)", hi: "नवंबर–मार्च (सुहावना)" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    zones: { en: ["Ahera", "Peepal Bawadi", "Kusmi (buffer)"], hi: ["अहेड़ा", "पीपल बावड़ी", "कुस्मी (बफ़र)"] },
    entryGates: { en: ["Tiktoli", "Ahera"], hi: ["टिकटोली", "अहेड़ा"] },
    timings: {
      summer: { en: "≈ 5:30–10:00 & 3:30–6:30", hi: "≈ 5:30–10:00 और 3:30–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 और 2:30–5:30" },
    },
    wildlife: { en: ["Leopard", "Wolf", "Hyena", "Chinkara", "Nilgai"], hi: ["तेन्दुआ", "भेड़िया", "लकड़बग्घा", "चिंकारा", "नीलगाय"] },
    howToReach: { en: "Rail: Gwalior/Sheopur Kalan. Air: Gwalior (~170 km).", hi: "रेल: ग्वालियर/श्योपुर कलाँ. वायु: ग्वालियर (~170 किमी)." },
    officialBooking: "https://mpforest.co.in", // public info टूर ऑपरेटर/MPForest पोर्टल
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kuno+National+Park",
    website: "https://www.kunonationalpark.org",
  },

  // 8) Van Vihar
  {
    id: "van-vihar",
    image: "/images/parks/van-vihar.jpg",
    name: { en: "Van Vihar National Park & Zoo, Bhopal", hi: "वन विहार राष्ट्रीय उद्यान एवं चिड़ियाघर, भोपाल" },
    district: { en: "Bhopal (MP)", hi: "भोपाल (मप्र)" },
    description: {
      en: "Urban national park by the Upper Lake; rescue & conservation focused.",
      hi: "ऊपरी झील के किनारे स्थित शहरी राष्ट्रीय उद्यान; बचाव व संरक्षण केंद्रित।",
    },
    bestTime: { en: "Oct–Mar", hi: "अक्टूबर–मार्च" },
    safariTypes: { en: ["Safari bus/cycle (zoo circuits)"], hi: ["सफारी बस/साइकिल (चिड़ियाघर मार्ग)"] },
    zones: { en: ["Interpretation trails", "Zoo enclosures"], hi: ["व्‍याख्‍या पथ", "चिड़ियाघर परिरक्षा"] },
    entryGates: { en: ["Main Gate (Shamla Hills)"], hi: ["मुख्य प्रवेश (श्यामला हिल्स)"] },
    timings: {
      summer: { en: "≈ 6:30–6:30 (varies)", hi: "≈ 6:30–6:30 (परिवर्तनशील)" },
      winter: { en: "≈ 7:00–6:00 (varies)", hi: "≈ 7:00–6:00 (परिवर्तनशील)" },
    },
    wildlife: { en: ["Rescued carnivores", "Herbivores", "Birds"], hi: ["बचाए गए मांसाहारी", "शाकाहारी", "पक्षी"] },
    howToReach: { en: "City park in Bhopal; easy local access.", hi: "भोपाल शहर में; स्थानीय पहुँच सरल।" },
    officialBooking: "https://vanviharnationalpark.org", // उनका अपना portal/app info
    mapLink: "https://www.google.com/maps/search/?api=1&query=Van+Vihar+National+Park+Bhopal",
    website: "https://bhopal.nic.in/en/tourist-place/van-vihar-national-park/",
  },

  // 9) Gandhi Sagar Wildlife Sanctuary
  {
    id: "gandhi-sagar",
    image: "/images/parks/gandhi-sagar.jpg",
    name: { en: "Gandhi Sagar Wildlife Sanctuary", hi: "गांधी सागर अभयारण्य" },
    district: { en: "Mandsaur / Neemuch (MP)", hi: "मंदसौर / नीमच (मप्र)" },
    description: {
      en: "Dry deciduous forests along the Chambal backwaters; antelope & birdlife.",
      hi: "चंबल बैकवॉटर के किनारे शुष्क पर्णपाती वन; मृग व पक्षी जीवन।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep (limited)"], hi: ["जीप (सीमित)"] },
    zones: { en: ["Sanctuary ranges"], hi: ["अभयारण्य रेंज"] },
    entryGates: { en: ["Local range gates"], hi: ["स्थानीय रेंज द्वार"] },
    timings: {
      summer: { en: "Day timings by range", hi: "दिन के समय (रेंज अनुसार)" },
      winter: { en: "Day timings by range", hi: "दिन के समय (रेंज अनुसार)" },
    },
    wildlife: { en: ["Chinkara", "Nilgai", "Hyena", "Birds"], hi: ["चिंकारा", "नीलगाय", "लकड़बग्घा", "पक्षी"] },
    howToReach: { en: "Rail: Mandsaur/Neemuch. Air: Udaipur/Indore (regional).", hi: "रेल: मंदसौर/नीमच. वायु: उदयपुर/इंदौर (क्षेत्रीय)." },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Gandhi+Sagar+Wildlife+Sanctuary",
    website: "https://wildtrails.in/gandhi-sagar-wildlife-sanctuary/", // जैसा तुमने दिखाया
  },

  // 10) Nauradehi Wildlife Sanctuary
  {
    id: "nauradehi",
    image: "/images/parks/nauradehi.jpg",
    name: { en: "Nauradehi Wildlife Sanctuary", hi: "नौरादेही अभयारण्य" },
    district: { en: "Sagar / Damoh / Narsinghpur (MP)", hi: "सागर / दमोह / नरसिंहपुर (मप्र)" },
    description: {
      en: "Large mosaic of dry forests & grasslands; reintroduction initiatives.",
      hi: "शुष्क वनों व घासभूमियों का विशाल परिदृश्य; पुनर्स्थापना पहल।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep (by permit)"], hi: ["जीप (अनुमति से)"] },
    zones: { en: ["Multiple ranges"], hi: ["अनेक रेंज"] },
    entryGates: { en: ["Range/Beat offices"], hi: ["रेंज/बीट कार्यालय"] },
    timings: {
      summer: { en: "By permit (day)", hi: "अनुमति अनुसार (दिन)" },
      winter: { en: "By permit (day)", hi: "अनुमति अनुसार (दिन)" },
    },
    wildlife: { en: ["Leopard", "Wolf", "Chinkara", "Blackbuck (reintro)"], hi: ["तेन्दुआ", "भेड़िया", "चिंकारा", "काला हिरण (पुनर्स्थापना)"] },
    howToReach: { en: "Rail: Sagar/Damoh. Air: Jabalpur/Bhopal (regional).", hi: "रेल: सागर/दमोह. वायु: जबलपुर/भोपाल (क्षेत्रीय)." },
    officialBooking: "https://forest.mponline.gov.in/", // अक्सर संपर्क/रेंज से, पर MPOnline मुख्य है
    mapLink: "https://www.google.com/maps/search/?api=1&query=Nauradehi+Wildlife+Sanctuary",
    website: "https://nauradehiwls.in",
  },

  // 11) Madhav National Park
  {
    id: "madhav",
    image: "/images/parks/madhav.jpg",
    name: { en: "Madhav National Park", hi: "माधव राष्ट्रीय उद्यान" },
    district: { en: "Shivpuri (MP)", hi: "शिवपुरी (मप्र)" },
    description: {
      en: "Historic forests around lakes; grasslands & antelope country.",
      hi: "झीलों के आसपास के ऐतिहासिक वन; घासभूमियाँ और मृग-प्रदेश।",
    },
    bestTime: { en: "Oct–Mar", hi: "अक्टूबर–मार्च" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    zones: { en: ["Sakhya Sagar side", "Park circuits"], hi: ["साख्‍या सागर साइड", "उद्यान सर्किट"] },
    entryGates: { en: ["Near Shivpuri"], hi: ["शिवपुरी के पास"] },
    timings: {
      summer: { en: "≈ 5:30–10:00 & 3:30–6:30", hi: "≈ 5:30–10:00 और 3:30–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 और 2:30–5:30" },
    },
    wildlife: { en: ["Leopard", "Antelope", "Crocodile (lake)"], hi: ["तेन्दुआ", "मृग", "मगर (झील)"] },
    howToReach: { en: "Rail: Shivpuri/Gwalior. Air: Gwalior (~120 km).", hi: "रेल: शिवपुरी/ग्वालियर. वायु: ग्वालियर (~120 किमी)." },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Madhav+National+Park",
    website: "https://madhavnationalpark.org",
  },

  // 12) Dinosaur Fossil National Park (Bagh/Ghughwa info together)
  {
    id: "dinosaur",
    image: "/images/parks/dinosaur.jpg",
    name: { en: "Dinosaur Fossil National Park", hi: "डायनासोर जीवाश्म राष्ट्रीय उद्यान" },
    district: { en: "Bagh (Dhar) / Ghughwa (Dindori), MP", hi: "बाग (धार) / घुघुवा (डिंडोरी), मप्र" },
    description: {
      en: "Fossil parks showcasing dinosaur eggs & fossil beds at Bagh (Dhar) and Ghughwa (Dindori).",
      hi: "बाग (धार) व घुघुवा (डिंडोरी) में डायनासोर अंडे व जीवाश्म शैय्याओं को प्रदर्शित करने वाले जीवाश्म उद्यान।",
    },
    bestTime: { en: "Oct–Mar (museum hours)", hi: "अक्टूबर–मार्च (संग्रहालय समय)" },
    safariTypes: { en: ["Guided fossil trail, Museum/Interpretation"], hi: ["मार्गदर्शित फॉसिल ट्रेल, संग्रहालय/व्याख्या"] },
    zones: { en: ["Bagh fossil sites", "Ghughwa Fossil Park"], hi: ["बाग फॉसिल साइट", "घुघुवा फॉसिल पार्क"] },
    entryGates: { en: ["Bagh: District Dhar", "Ghughwa: near Dindori"], hi: ["बाग: जिला धार", "घुघुवा: डिंडोरी के पास"] },
    timings: {
      summer: { en: "≈ 10:00–5:00 (site-wise)", hi: "≈ 10:00–5:00 (स्थल अनुसार)" },
      winter: { en: "≈ 10:00–5:00 (site-wise)", hi: "≈ 10:00–5:00 (स्थल अनुसार)" },
    },
    wildlife: { en: ["Not a wildlife safari park"], hi: ["यह वन्यजीव सफारी पार्क नहीं है"] },
    howToReach: {
      en: "Bagh: Indore/Ujjain road; Ghughwa: Jabalpur–Dindori route.",
      hi: "बाग: इंदौर/उज्जैन रोड; घुघुवा: जबलपुर–डिंडोरी मार्ग।",
    },
    officialBooking: "https://forest.mponline.gov.in/", // सामान्य पोर्टल संदर्भ
    mapLink: "https://www.google.com/maps/search/?api=1&query=Dinosaur+Fossil+National+Park+Madhya+Pradesh",
    website: "https://dhar.nic.in/en/tourist-place/dinosaur-fossil-park-bagh/",
  },
];

// ✅ default export (pages में default import use हो रहा है)
export default mpParks;