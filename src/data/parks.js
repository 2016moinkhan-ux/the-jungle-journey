// src/data/parks.js
// ✅ Madhya Pradesh parks data (EN+HI). Safe shapes for UI.

export const mpParks = [
  {
    id: "kanha",
    image: "/images/parks/kanha.jpg",
    imagePos: "50% 35%",
    name: { en: "Kanha National Park", hi: "कान्हा राष्ट्रीय उद्यान" },
    district: { en: "Mandla / Balaghat (MP)", hi: "मंडला / बालाघाट (MP)" },
    description: {
      en: "India’s best-managed tiger reserve; sal forests and wide meadows with the world’s only hard-ground barasingha.",
      hi: "भारत के सबसे बेहतर प्रबंधित बाघ अभयारण्य; साल के वन और विस्तृत घास के मैदान, जहाँ विश्व के एकमात्र कठोर-भूमि बारासिंगा पाए जाते हैं।",
    },
    bestTime: { en: "Oct–Jun (Feb–May peak)", hi: "अक्टूबर–जून (फरवरी–मई सर्वोत्तम)" },
    safariTypes: { en: ["Jeep", "Canter", "Night (limited)"], hi: ["जीप", "कैंटर", "रात्रि (सीमित)"] },
    zones: { en: ["Kisli", "Mukki", "Kanha", "Sarhi"], hi: ["किसली", "मुख्की", "कान्हा", "सरही"] },
    entryGates: { en: ["Khatia", "Mukki", "Kanha Gate", "Sarhi"], hi: ["खटिया", "मुख्की", "कान्हा गेट", "सरही"] },
    timings: {
      summer: { en: "≈ 5:30–10:30 & 3:00–6:30", hi: "≈ 5:30–10:30 एवं 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 एवं 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Barasingha", "Leopard", "Sloth bear", "Wild dog", "Gaur"],
      hi: ["बाघ", "बारासिंगा", "तेंदुआ", "भालू", "जंगली कुत्ता", "गौर"],
    },
    howToReach: {
      en: "Rail: Gondia/Jabalpur. Air: Jabalpur (~160 km), Nagpur (~260 km).",
      hi: "रेल: गोंदिया/जबलपुर। वायु: जबलपुर (~160 किमी), नागपुर (~260 किमी)।",
    },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kanha+National+Park",
  },

  {
    id: "bandhavgarh",
    image: "/images/parks/bandhavgarh.jpg",
    imagePos: "50% 32%",
    name: { en: "Bandhavgarh National Park", hi: "बांधवगढ़ राष्ट्रीय उद्यान" },
    district: { en: "Umaria (MP)", hi: "उमरिया (MP)" },
    description: {
      en: "High tiger density; sal–bamboo forests and the ancient Bandhavgarh Fort.",
      hi: "उच्च बाघ घनत्व; साल-बाँस के वन और प्राचीन बांधवगढ़ किला।",
    },
    bestTime: { en: "Oct–Jun (Feb–May best)", hi: "अक्टूबर–जून (फरवरी–मई श्रेष्ठ)" },
    safariTypes: { en: ["Jeep", "Canter"], hi: ["जीप", "कैंटर"] },
    zones: { en: ["Tala", "Magadhi", "Khitauli"], hi: ["ताला", "मगधी", "खितौली"] },
    entryGates: { en: ["Tala", "Magadhi", "Khitauli"], hi: ["ताला", "मगधी", "खितौली"] },
    timings: {
      summer: { en: "≈ 5:30–10:30 & 3:00–6:30", hi: "≈ 5:30–10:30 एवं 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 एवं 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Sloth bear", "Sambar", "Chital"],
      hi: ["बाघ", "तेंदुआ", "भालू", "सांभर", "चितल"],
    },
    howToReach: {
      en: "Rail/Air: Jabalpur ~170 km; Katni ~100 km.",
      hi: "रेल/वायु: जबलपुर ~170 किमी; कटनी ~100 किमी।",
    },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Bandhavgarh+National+Park",
  },

  {
    id: "pench",
    image: "/images/parks/pench.jpg",
    imagePos: "50% 40%",
    name: { en: "Pench National Park", hi: "पेंच राष्ट्रीय उद्यान" },
    district: { en: "Seoni / Chhindwara (MP)", hi: "सीनि / छिंदवाड़ा (MP)" },
    description: {
      en: "Inspiration for ‘The Jungle Book’; teak & mixed forests with multiple gates.",
      hi: "‘द जंगल बुक’ की प्रेरणा; सागौन व मिश्रित वनों के साथ कई प्रवेश द्वार।",
    },
    bestTime: { en: "Oct–Jun", hi: "अक्टूबर–जून" },
    safariTypes: { en: ["Jeep", "Canter", "Boat"], hi: ["जीप", "कैंटर", "नौका"] },
    zones: { en: ["Turia", "Karmajhiri", "Jamtara"], hi: ["तूरिया", "करमाझिरी", "जमतरा"] },
    entryGates: { en: ["Turia", "Karmajhiri", "Jamtara"], hi: ["तूरिया", "करमाझिरी", "जमतरा"] },
    timings: {
      summer: { en: "≈ 5:30–10:30 & 3:00–6:30", hi: "≈ 5:30–10:30 एवं 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 एवं 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Wild dog", "Sambar", "Gaur"],
      hi: ["बाघ", "तेंदुआ", "जंगली कुत्ता", "सांभर", "गौर"],
    },
    howToReach: {
      en: "Rail/Air: Nagpur ~90–130 km.",
      hi: "रेल/वायु: नागपुर ~90–130 किमी।",
    },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Pench+National+Park",
  },

  {
    id: "satpura",
    image: "/images/parks/satpura.jpg",
    imagePos: "50% 45%",
    name: { en: "Satpura Tiger Reserve", hi: "सतपुड़ा टाइगर रिज़र्व" },
    district: { en: "Hoshangabad (Narmadapuram)", hi: "होशंगाबाद (नर्मदापुरम)" },
    description: {
      en: "Unique landscape of hills, ravines and backwaters; canoe & walking safaris.",
      hi: "पहाड़ियों, खाइयों और बैकवॉटर का अनोखा परिदृश्य; कनो/वॉकिंग सफारी।",
    },
    bestTime: { en: "Oct–Apr", hi: "अक्टूबर–अप्रैल" },
    safariTypes: { en: ["Jeep", "Boat", "Walking (guide)"], hi: ["जीप", "नौका", "पैदल (गाइड)"] },
    zones: { en: ["Pachmarhi", "Madhai", "Churna"], hi: ["पचमढ़ी", "मधई", "चूरना"] },
    entryGates: { en: ["Madhai", "Pachmarhi"], hi: ["मधई", "पचमढ़ी"] },
    timings: {
      summer: { en: "≈ 5:30–10:30 & 3:00–6:30", hi: "≈ 5:30–10:30 एवं 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 एवं 2:30–5:30" },
    },
    wildlife: {
      en: ["Leopard", "Sloth bear", "Crocodile", "Gaur", "Birds"],
      hi: ["तेंदुआ", "भालू", "घड़ियाल/मगर", "गौर", "पक्षी"],
    },
    howToReach: {
      en: "Rail: Itarsi/Hoshangabad; Air: Bhopal (~135 km).",
      hi: "रेल: इटारसी/होशंगाबाद; वायु: भोपाल (~135 किमी)।",
    },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Satpura+Tiger+Reserve",
  },

  {
    id: "panna",
    image: "/images/parks/panna.jpg",
    imagePos: "50% 40%",
    name: { en: "Panna National Park", hi: "पन्ना राष्ट्रीय उद्यान" },
    district: { en: "Panna / Chhatarpur (MP)", hi: "पन्ना / छतरपुर (MP)" },
    description: {
      en: "Ken river gorges and boat safaris; famous for gharials & vultures too.",
      hi: "केन नदी की खाइयाँ व बोट सफारी; घड़ियाल व गिद्धों के लिए भी प्रसिद्ध।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep", "Boat"], hi: ["जीप", "नौका"] },
    zones: { en: ["Madla", "Hinauta", "Akunwari", "Jhinna"], hi: ["मदला", "हिनाुता", "अकुंवारी", "झिन्ना"] },
    entryGates: { en: ["Madla", "Hinauta"], hi: ["मदला", "हिनाुता"] },
    timings: {
      summer: { en: "≈ 5:30–10:30 & 3:00–6:30", hi: "≈ 5:30–10:30 एवं 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 एवं 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Gharial", "Crocodile", "Vultures"],
      hi: ["बाघ", "तेंदुआ", "घड़ियाल", "मगर", "गिद्ध"],
    },
    howToReach: {
      en: "Rail/Air: Khajuraho ~25 km; Satna ~90 km.",
      hi: "रेल/वायु: खजुराहो ~25 किमी; सतना ~90 किमी।",
    },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Panna+National+Park",
  },

  {
    id: "sanjayDubri",
    image: "/images/parks/sanjay-dubri.jpg",
    imagePos: "50% 38%",
    name: { en: "Sanjay–Dubri Tiger Reserve", hi: "संजय–डुबरी टाइगर रिज़र्व" },
    district: { en: "Sidhi & Singrauli (MP)", hi: "सीधी व सिंगरौली (MP)" },
    description: {
      en: "Less-crowded sal forests, grasslands and riverine habitats.",
      hi: "कम भीड़ वाले साल वन, घासभूमि और नदी तटीय आवास।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    zones: { en: ["Sanjay", "Dubri"], hi: ["संजय", "डुबरी"] },
    entryGates: { en: ["Parsili", "Beohari"], hi: ["पार्सिली", "बEOहरी"] },
    timings: {
      summer: { en: "≈ 5:30–10:30 & 3:00–6:30", hi: "≈ 5:30–10:30 एवं 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 एवं 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Sloth bear", "Chital", "Sambar"],
      hi: ["बाघ", "तेंदुआ", "भालू", "चितल", "सांभर"],
    },
    howToReach: {
      en: "Nearest rail: Rewa/Singrauli; Air: Jabalpur/Varanasi (far).",
      hi: "निकटतम रेल: रीवा/सिंगरौली; वायु: जबलपुर/वाराणसी (दूर)।",
    },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Sanjay+Dubri+Tiger+Reserve",
  },

  {
    id: "kuno",
    image: "/images/parks/kuno.jpg",
    imagePos: "50% 40%",
    name: { en: "Kuno National Park", hi: "कूनो राष्ट्रीय उद्यान" },
    district: { en: "Sheopur (MP)", hi: "श्योपुर (MP)" },
    description: {
      en: "Historic landscape and home to the Cheetah reintroduction project.",
      hi: "ऐतिहासिक परिदृश्य और चीता पुनःस्थापना परियोजना का घर।",
    },
    bestTime: { en: "Oct–Mar", hi: "अक्टूबर–मार्च" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    zones: { en: ["Ahera", "Peepal Bawadi", "Kela Devi buffer"], hi: ["अहेरा", "पीपल बावड़ी", "केला देवी बफर"] },
    entryGates: { en: ["Tiktoli", "Ahera"], hi: ["टिकटोली", "अहेरा"] },
    timings: {
      summer: { en: "≈ 5:30–10:30 & 3:00–6:30", hi: "≈ 5:30–10:30 एवं 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 एवं 2:30–5:30" },
    },
    wildlife: {
      en: ["Cheetah", "Leopard", "Hyena", "Jackal", "Nilgai", "Chinkara"],
      hi: ["चीता", "तेंदुआ", "लकड़बग्घा", "सियार", "नीलगाय", "चिंकारा"],
    },
    howToReach: {
      en: "Rail: Sheopur/Shivpuri; Air: Gwalior/Jaipur (far).",
      hi: "रेल: श्योपुर/शिवपुरी; वायु: ग्वालियर/जयपुर (दूर)।",
    },
    officialBooking: "https://www.kunonationalpark.org/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kuno+National+Park",
  },

  {
    id: "vanVihar",
    image: "/images/parks/van-vihar.jpg",
    imagePos: "50% 40%",
    name: { en: "Van Vihar National Park (Bhopal)", hi: "वन विहार राष्ट्रीय उद्यान (भोपाल)" },
    district: { en: "Bhopal (MP)", hi: "भोपाल (MP)" },
    description: {
      en: "Urban national park & zoo by the Upper Lake; rescue and conservation centre.",
      hi: "अपर लेक के किनारे शहरी राष्ट्रीय उद्यान/चिड़ियाघर; रेस्क्यू व संरक्षण केंद्र।",
    },
    bestTime: { en: "Round the year", hi: "साल भर" },
    safariTypes: { en: ["Battery-car / Bus"], hi: ["बैटरी कार / बस"] },
    zones: { en: ["Safari enclosures", "Bird area"], hi: ["सफारी प्रहारी क्षेत्र", "पक्षी क्षेत्र"] },
    entryGates: { en: ["Main Gate, VIP Road"], hi: ["मुख्य द्वार, वीआईपी रोड"] },
    timings: {
      summer: { en: "≈ 6:30–6:30 (varies by day)", hi: "≈ 6:30–6:30 (दिनानुसार भिन्न)" },
      winter: { en: "≈ 7:00–6:30 (varies)", hi: "≈ 7:00–6:30 (भिन्न)" },
    },
    wildlife: {
      en: ["Tiger (enclosure)", "Leopard", "Bear", "Crocodile", "Birds"],
      hi: ["बाघ (एनक्लोजर)", "तेंदुआ", "भालू", "घड़ियाल", "पक्षी"],
    },
    howToReach: {
      en: "City park in Bhopal; close to Raja Bhoj Airport & Habibganj.",
      hi: "भोपाल नगर उद्यान; राजा भोज एयरपोर्ट व हबीबगंज के निकट।",
    },
    officialBooking: "https://vanviharnationalpark.org/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Van+Vihar+National+Park+Bhopal",
  },

  {
    id: "gandhiSagar",
    image: "/images/parks/gandhi-sagar.jpg",
    imagePos: "50% 40%",
    name: { en: "Gandhi Sagar Wildlife Sanctuary", hi: "गांधी सागर अभयारण्य" },
    district: { en: "Mandsaur & Neemuch (MP)", hi: "मंदसौर व नीमच (MP)" },
    description: {
      en: "Dry deciduous habitats around Chambal backwaters; antelope & birdlife.",
      hi: "चम्बल बैकवॉटर के आसपास शुष्क पर्णपाती वन; मृग व पक्षीसमृद्ध।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep (limited/permit)"], hi: ["जीप (सीमित/परमिट)"] },
    zones: { en: ["Sitamau range"], hi: ["सीतमऊ रेंज"] },
    entryGates: { en: ["Nearest: Gandhi Sagar Dam area"], hi: ["गांधी सागर डैम क्षेत्र"] },
    timings: {
      summer: { en: "Day visits with permit", hi: "परमिट के साथ दिन भ्रमण" },
      winter: { en: "Day visits with permit", hi: "परमिट के साथ दिन भ्रमण" },
    },
    wildlife: {
      en: ["Chinkara", "Nilgai", "Crocodile", "Water birds"],
      hi: ["चिंकारा", "नीलगाय", "मगर", "जल-पक्षी"],
    },
    howToReach: {
      en: "Rail: Mandsaur/Neemuch; Road via NH-52.",
      hi: "रेल: मंदसौर/नीमच; सड़क NH-52 से।",
    },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Gandhi+Sagar+Wildlife+Sanctuary",
  },

  {
    id: "nauradehi",
    image: "/images/parks/nauradehi.jpg",
    imagePos: "50% 40%",
    name: { en: "Nauradehi Wildlife Sanctuary", hi: "नौरादेही अभयारण्य" },
    district: { en: "Sagar / Damoh / Narsinghpur (MP)", hi: "सागर / दमोह / नरसिंहपुर (MP)" },
    description: {
      en: "Central India’s large grassland–woodland mosaic; reintroduction projects.",
      hi: "मध्य भारत का विशाल घासभूमि-वन मिश्रण; पुनर्स्थापन परियोजनाएँ।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep (permit/guide)"], hi: ["जीप (परमिट/गाइड)"] },
    zones: { en: ["Ghoghri / Deori ranges"], hi: ["घोघरी / देवरी रेंज"] },
    entryGates: { en: ["Deori / Ghansor side"], hi: ["देवरी / घंसौर तरफ"] },
    timings: {
      summer: { en: "Day visits with permit", hi: "परमिट के साथ दिन भ्रमण" },
      winter: { en: "Day visits with permit", hi: "परमिट के साथ दिन भ्रमण" },
    },
    wildlife: {
      en: ["Chital", "Nilgai", "Blackbuck (nearby)", "Wolf", "Fox"],
      hi: ["चितल", "नीलगाय", "काला हिरन (आसपास)", "भेड़िया", "लोमड़ी"],
    },
    howToReach: {
      en: "Rail: Sagar/Damoh; Air: Jabalpur (~140 km).",
      hi: "रेल: सागर/दमोह; वायु: जबलपुर (~140 किमी)।",
    },
    officialBooking: "https://nauradehiwls.in/", // contact/info
    mapLink: "https://www.google.com/maps/search/?api=1&query=Nauradehi+Wildlife+Sanctuary",
  },

  {
    id: "madhav",
    image: "/images/parks/madhav.jpg",
    imagePos: "50% 40%",
    name: { en: "Madhav National Park", hi: "माधव राष्ट्रीय उद्यान" },
    district: { en: "Shivpuri (MP)", hi: "शिवपुरी (MP)" },
    description: {
      en: "Lake-dotted park with rolling hills and grasslands; historic Scindia hunting lodges.",
      hi: "झीलों वाला उद्यान, ढलानदार पहाड़ियाँ व घासभूमि; ऐतिहासिक शिकारगृह।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    zones: { en: ["Sakhya Sagar", "George Castle area"], hi: ["साख्या सागर", "जॉर्ज कैसल क्षेत्र"] },
    entryGates: { en: ["NH-46 Shivpuri"], hi: ["NH-46 शिवपुरी"] },
    timings: {
      summer: { en: "≈ 5:30–10:00 & 3:30–6:30", hi: "≈ 5:30–10:00 एवं 3:30–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 एवं 2:30–5:30" },
    },
    wildlife: {
      en: ["Leopard", "Chital", "Nilgai", "Crocodile", "Birds"],
      hi: ["तेंदुआ", "चितल", "नीलगाय", "मगर", "पक्षी"],
    },
    howToReach: {
      en: "Rail: Shivpuri/Gwalior; Air: Gwalior.",
      hi: "रेल: शिवपुरी/ग्वालियर; वायु: ग्वालियर।",
    },
    officialBooking: "https://madhavnationalpark.org/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Madhav+National+Park+Shivpuri",
  },

  {
    id: "dinosaur",
    image: "/images/parks/dinosaur.jpg",
    imagePos: "50% 40%",
    name: { en: "Dinosaur Fossil National Park (Bagh/Ghughwa)", hi: "डायनासोर जीवाश्म राष्ट्रीय उद्यान (बाघ/घुघुवा)" },
    district: { en: "Dhar & Dindori (MP)", hi: "धार व डिंडोरी (MP)" },
    description: {
      en: "Fossil parks displaying dinosaur eggs and tree fossils; museum/interpretation centres.",
      hi: "डायनासोर अंडों व वृक्ष जीवाश्मों के प्रदर्शन हेतु फॉसिल पार्क; संग्रहालय/व्याख्या केन्द्र।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Guided fossil trail, Museum/Interpretation"], hi: ["मार्गदर्शित जीवाश्म ट्रेल, संग्रहालय/व्याख्या केंद्र"] },
    zones: { en: ["Bagh fossil sites, Ghughwa Fossil Park"], hi: ["बाघ जीवाश्म स्थल, घुघुवा फॉसिल पार्क"] },
    entryGates: { en: ["Bagh: District Dhar; Ghughwa: near Dindori"], hi: ["बाघ: जिला धार; घुघुवा: डिंडोरी के पास"] },
    timings: {
      summer: { en: "≈ 10:00–5:00 (site-wise)", hi: "≈ 10:00–5:00 (स्थल अनुसार)" },
      winter: { en: "≈ 10:00–5:00", hi: "≈ 10:00–5:00" },
    },
    wildlife: {
      en: ["Not a wildlife safari park", "Fossil exhibits"],
      hi: ["वन्यजीव सफारी पार्क नहीं", "जीवाश्म प्रदर्शनी"],
    },
    howToReach: {
      en: "Bagh: Indore/Ujjain road; Ghughwa: Jabalpur–Dindori route.",
      hi: "बाघ: इंदौर/उज्जैन मार्ग; घुघुवा: जबलपुर–डिंडोरी मार्ग।",
    },
    officialBooking: "https://dhar.nic.in/ (Bagh) | https://dindori.nic.in/ (Ghughwa)",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Ghughwa+Fossil+Park+Dindori",
  },
];

// ✅ default export (so pages can `import mpParks from '@/data/parks'`)
export default mpParks;