// src/data/parks.js
// ✅ Madhya Pradesh Parks master data (EN + HI) + Links (booking, maps, website)
// Added: type (National Park / Tiger Reserve / Wildlife Sanctuary)
// Added earlier by you: metaTitle, metaDescription, imageAlt, summary, about (EN/HI) — untouched

export const mpParks = [
  // 1) Kanha
  {
    id: "kanha",
    image: "/images/parks/kanha.jpg",
    type: "Tiger Reserve",
    designation: {
  en: ["National Park", "Tiger Reserve"],   // English में list
  hi: ["राष्ट्रीय उद्यान", "टाइगर रिज़र्व"], // Hindi में list
},
    name: { en: "Kanha Tiger Reserve", hi: "कान्हा टाइगर रिज़र्व" },
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

    // 🔥 SEO + content (unchanged)
    metaTitle: { en: "Kanha Tiger Reserve | The Jungle Journey", hi: "कान्हा टाइगर रिज़र्व | द जंगल जर्नी" },
    metaDescription: {
      en: "Explore Kanha’s sal forests, meadows and barasingha habitat with frequent tiger sightings. Best time Nov–Mar.",
      hi: "कान्हा के साल वन, घासभूमि और बारहसिंगा आवास का अन्वेषण करें; टाइगर साइटिंग प्रसिद्ध। श्रेष्ठ समय: नव–मार्च।",
    },
    imageAlt: { en: "Tiger in Kanha’s meadows", hi: "कान्हा की घासभूमि में बाघ" },
    summary: {
      en: "Flagship tiger reserve with sal forests, open meadows and the unique hard-ground barasingha.",
      hi: "प्रमुख टाइगर रिज़र्व—साल वन, खुले मैदान और अनोखा हार्ड-ग्राउंड बारहसिंगा।",
    },
    about: {
      en: "Kanha blends lush sal forests with rolling meadows and is celebrated for reviving the hard-ground barasingha. Safaris across Kanha, Kisli, Mukki and Sarhi often reveal tigers, leopards, dholes and rich birdlife. Bamni Dadar (Sunset Point) offers classic views. Nov–Mar is pleasant; Apr–May is warmer but excellent for big-cat sightings.",
      hi: "कान्हा घने साल वनों और विस्तृत घासभूमि का संगम है और हार्ड-ग्राउंड बारहसिंगा के संरक्षण के लिए प्रसिद्ध है। कान्हा, किसली, मुक्की व सरही में सफारी के दौरान बाघ, तेन्दुआ, ढोल व समृद्ध पक्षी-विविधता दिखती है। बामनी दादर प्रसिद्ध दृश्य देता है। नव–मार्च सुहावना; अप्रैल–मई गर्म पर साइटिंग बेहतरीन।",
    },
  },

  // 2) Bandhavgarh
  {
    id: "bandhavgarh",
    image: "/images/parks/bandhavgarh.jpg",
    type: "Tiger Reserve",
    designation: {
    en: ["National Park", "Tiger Reserve"], // English list
    hi: ["राष्ट्रीय उद्यान", "टाइगर रिज़र्व"], // Hindi list
  },
    name: { en: "Bandhavgarh Tiger Reserve", hi: "बांधवगढ़ टाइगर रिज़र्व" },
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

    metaTitle: { en: "Bandhavgarh Tiger Reserve | The Jungle Journey", hi: "बांधवगढ़ टाइगर रिज़र्व | द जंगल जर्नी" },
    metaDescription: {
      en: "India’s famed high-density tiger reserve with rugged hills and an ancient fort. Plan safaris Oct–Apr.",
      hi: "भारत का उच्च-घनत्व टाइगर रिज़र्व—ऊबड़-खाबड़ पहाड़ियाँ व प्राचीन किला। सफारी हेतु श्रेष्ठ: अक्तू–अप्रैल।",
    },
    imageAlt: { en: "Tiger in Bandhavgarh’s sal-bamboo forest", hi: "बांधवगढ़ के साल-बाँस वन में बाघ" },
    summary: {
      en: "Top spot for frequent tiger sightings amid sal–bamboo forests and historic fort vistas.",
      hi: "साल-बाँस वनों और ऐतिहासिक किले के दृश्यों के बीच बार-बार टाइगर साइटिंग का शीर्ष स्थल।",
    },
    about: {
      en: "Bandhavgarh is renowned for frequent tiger encounters set against rugged hills and the iconic fort. Tala, Magdhi and Khitauli zones offer grasslands, bamboo thickets and rocky outcrops. Besides tigers, look for leopards, sloth bears and rich birdlife. Winter and early summer provide excellent visibility around waterholes.",
      hi: "बांधवगढ़ ऊबड़-खाबड़ पहाड़ियों व प्रसिद्ध किले की पृष्ठभूमि में बार-बार टाइगर साइटिंग के लिए जाना जाता है। ताला, मगधी व खीटौली ज़ोन घासभूमि, बाँस झाड़ियों व चट्टानी हिस्सों का मिश्रण दिखाते हैं। बाघ के साथ तेन्दुआ, स्लॉथ भालू व समृद्ध पक्षी-जीवन भी मिलता है। सर्दी व प्रारंभिक गर्मियां जलस्रोतों के पास दृश्यता बढ़ाती हैं।",
    },
  },

  // 3) Pench
  {
    id: "pench",
    image: "/images/parks/pench.jpg",
    type: "Tiger Reserve",
    designation: {
    en: ["National Park", "Tiger Reserve"], // English list
    hi: ["राष्ट्रीय उद्यान", "टाइगर रिज़र्व"], // Hindi list
  },
    name: { en: "Pench Tiger Reserve", hi: "पेंच टाइगर रिज़र्व" },
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
    wildlife: { en: ["Tiger", "Leopard", "Wild dog", "Sambar", "Gaur"], hi: ["บाघ", "तेन्दुआ", "जंगली कुत्ता", "सांभर", "गौर"] },
    howToReach: { en: "Rail/Air: Nagpur ~90–130 km.", hi: "रेल/वायु: नागपुर ~90–130 किमी." },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Pench+National+Park",
    website: "https://www.penchnationalparkonline.in",

    metaTitle: { en: "Pench Tiger Reserve | The Jungle Journey", hi: "पेंच टाइगर रिज़र्व | द जंगल जर्नी" },
    metaDescription: {
      en: "Kipling’s ‘Mowgli land’ of teak forests, streams and rich wildlife. Best season Oct–Mar.",
      hi: "किपलिंग की ‘मोगली लैंड’—सागौन वन, नाले व समृद्ध वन्यजीव। श्रेष्ठ मौसम: अक्तू–मार्च।",
    },
    imageAlt: { en: "Leopard on a forest path in Pench", hi: "पेंच के वन-मार्ग पर तेन्दुआ" },
    summary: {
      en: "Jungle Book landscape of teak forests, streams and reliable big-cat sightings via multiple gates.",
      hi: "जंगल बुक का परिदृश्य—सागौन वन, नाले और कई गेट्स से विश्वसनीय साइटिंग।",
    },
    about: {
      en: "Pench spans Satpura’s teak forests and seasonal streams—famous as Kipling’s setting. Popular gates Turia, Khursapar and Jamtara grant access to tiger, leopard and dhole habitats. Birding is rewarding across winters. Stay options around Turia are well-developed.",
      hi: "पेंच सतपुड़ा की सागौन वनों और मौसमी नालों में फैला है—किपलिंग की कहानियों का परिदृश्य। तुरिया, खुरसापार व जमठार जैसे गेट बाघ, तेन्दुए व ढोल के आवासों तक पहुँच देते हैं। सर्दियों में बर्डिंग शानदार रहती है। तुरिया क्षेत्र में आवास विकल्प विकसित हैं।",
    },
  },

  // 4) Satpura
  {
    id: "satpura",
    image: "/images/parks/satpura.jpg",
    type: "Tiger Reserve",
    designation: {
    en: ["National Park", "Tiger Reserve"], // English list
    hi: ["राष्ट्रीय उद्यान", "टाइगर रिज़र्व"], // Hindi list
  },
    name: { en: "Satpura Tiger Reserve", hi: "सतपुड़ा टाइगर रिज़र्व" },
    district: { en: "Hoshangabad/Narmadapuram (MP)", hi: "होशंगाबाद/नर्मदापुरम (मप्र)" },
    description: {
      en: "Unique landscape with jeep, boat & walking safaris; rich birdlife.",
      hi: "जीप, बोट व वॉकिंग सफारी वाला अनूठा परिदृश्य; समृद्ध पक्षी-विविधता।",
    },
    bestTime: { en: "Oct–Jun", hi: "अक्टूबर–जून" },
    safariTypes: { en: ["Jeep", "Boat", "Walking"], hi: ["जीप", "बोट", "वॉकिंग"] },
    zones: { en: ["Pachmarhi", "Panarpani", "Churna"], hi: ["পचमढ़ी", "पनारपानी", "चूरना"] },
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

    metaTitle: { en: "Satpura Tiger Reserve | The Jungle Journey", hi: "सतपुड़ा टाइगर रिज़र्व | द जंगल जर्नी" },
    metaDescription: {
      en: "Rugged sandstone ranges with jeep, canoe/boat and walking safaris. Superb birding; Oct–Jun season.",
      hi: "खुरदरे बलुआ पत्थर पर्वत, जीप/कैनो/बोट व वॉकिंग सफारी। उत्कृष्ट बर्डिंग; अक्तू–जून सीजन।",
    },
    imageAlt: { en: "Boat safari on Satpura reservoir", hi: "सतपुड़ा जलाशय पर बोट सफारी" },
    summary: {
      en: "Adventure-friendly reserve offering boat and walking safaris across dramatic Satpura landscapes.",
      hi: "रोमांचक सतपुड़ा दृश्यों में बोट व वॉकिंग सफारी देने वाला अनूठा रिज़र्व।",
    },
    about: {
      en: "Satpura’s mosaic of forests, rivers and sandstone hills enables diverse experiences—boat/ canoe rides, walking trails and jeep drives. Churna’s forests and the Pachmarhi plateau host leopards, sloth bears and rich birdlife. Accommodation clusters around Madhai and Pachmarhi.",
      hi: "सतपुड़ा के वन, नदियाँ और बलुआ पत्थर पर्वत विविध अनुभव देते हैं—बोट/कैनो, वॉकिंग ट्रेल्स व जीप ड्राइव। चूरना के वन और पचमढ़ी प्लेटो में तेन्दुआ, भालू व समृद्ध पक्षी-जीवन मिलता है। माधई व पचमढ़ी क्षेत्र में आवास विकल्प उपलब्ध हैं।",
    },
  },

  // 5) Panna
  {
    id: "panna",
    image: "/images/parks/panna.jpg",
    type: "Tiger Reserve",
    designation: {
    en: ["National Park", "Tiger Reserve"], // English list
    hi: ["राष्ट्रीय उद्यान", "टाइगर रिज़र्व"], // Hindi list
  },
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
    wildlife: { en: ["Tiger", "Leopard", "Gharial", "Crocodile", "Vulture"], hi: ["বाघ", "तेन्दुआ", "घड़ियाल", "मगर", "गिद्ध"] },
    howToReach: { en: "Rail: Khajuraho/Satna. Air: Khajuraho (~25 km).", hi: "रेल: खजुराहो/सतना. वायु: खजुराहो (~25 किमी)." },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Panna+Tiger+Reserve",
    website: "https://www.pannanationalparkonline.in",

    metaTitle: { en: "Panna Tiger Reserve | The Jungle Journey", hi: "पन्ना टाइगर रिज़र्व | द जंगल जर्नी" },
    metaDescription: {
      en: "Ken River gorges, boat safaris and revived wildlife including gharial and vulture. Best time Nov–Mar.",
      hi: "केन नदी की घाटियाँ, बोट सफारी और घड़ियाल-गिद्ध सहित पुनर्जीवित वन्यजीव। श्रेष्ठ समय: नव–मार्च।",
    },
    imageAlt: { en: "Boat on Ken River, Panna", hi: "केन नदी पर नाव, पन्ना" },
    summary: {
      en: "Riverine vistas with jeep/boat safaris; notable for gharial and vulture conservation.",
      hi: "नदी तटीय दृश्यों में जीप/बोट सफारी; घड़ियाल व गिद्ध संरक्षण के लिए प्रसिद्ध।",
    },
    about: {
      en: "Panna’s Ken River gorges and plateaus host tigers, leopards and rich birdlife. Boat safaris near Madla reveal crocodiles and gharials along scenic cliffs. Winter brings crisp weather; early summer sharpens sightings near water.",
      hi: "पन्ना की केन नदी की घाटियाँ और पठार बाघ, तेन्दुआ व समृद्ध पक्षी-जीवन का आवास हैं। मडला के पास बोट सफारी में मगर व घड़ियाल दिखते हैं। सर्दियों में मौसम सुहावना रहता है; गर्मियों की शुरुआत में जलस्रोतों पर साइटिंग तेज होती है।",
    },
  },

  // 6) Sanjay-Dubri
  {
    id: "sanjay-dubri",
    image: "/images/parks/sanjay-dubri.jpg",
    type: "Tiger Reserve",
    designation: {
    en: ["National Park", "Tiger Reserve"], // English list
    hi: ["राष्ट्रीय उद्यान", "टाइगर रिज़र्व"], // Hindi list
  },
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
    website: "https://mpforest.co.in",

    metaTitle: { en: "Sanjay–Dubri Tiger Reserve | The Jungle Journey", hi: "संजय–दुबरी टाइगर रिज़र्व | द जंगल जर्नी" },
    metaDescription: {
      en: "Quiet sal forests, meadows and emerging tiger landscapes in the Son basin. Best from Nov–May.",
      hi: "शांत साल वन, घासभूमियाँ और सोन बेसिन में उभरते टाइगर परिदृश्य। श्रेष्ठ: नवंबर–मई।",
    },
    imageAlt: { en: "Sal forest track in Sanjay–Dubri", hi: "संजय–दुबरी में साल वन पथ" },
    summary: {
      en: "Offbeat tiger reserve with tranquil sal forests and broad meadows across the Son basin.",
      hi: "सोन बेसिन में शांत साल वन और चौड़ी घासभूमियों वाला ऑफबीट टाइगर रिज़र्व।",
    },
    about: {
      en: "Sanjay–Dubri’s low tourist rush preserves a tranquil feel. Drives across Dubri and Sanjay ranges pass sal forests, meadows and seasonal streams. Patience is rewarded with tiger and bear encounters, along with excellent woodland birding.",
      hi: "संजय–दुबरी में कम भीड़ के कारण शांत अनुभव मिलता है। दुबरी व संजय रेंज में ड्राइव साल वनों, घासभूमियों और मौसमी नालों से होकर गुजरती है। धैर्य रखने पर बाघ व भालू के दर्शन संभव हैं; वनों में बर्डिंग भी शानदार रहती है।",
    },
  },

  // 7) Kuno
  {
    id: "kuno",
    image: "/images/parks/kuno.jpg",
    type: "National Park",
    designation: {
    en: ["National Park"],
    hi: ["राष्ट्रीय उद्यान"],
  },
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
    officialBooking: "https://mpforest.co.in",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kuno+National+Park",
    website: "https://www.kunonationalpark.org",

    metaTitle: { en: "Kuno National Park | The Jungle Journey", hi: "कूनो राष्ट्रीय उद्यान | द जंगल जर्नी" },
    metaDescription: {
      en: "Dry forests and grasslands along River Kuno—home to India’s cheetah project and diverse carnivores.",
      hi: "कूनो नदी के शुष्क वन व घासभूमियाँ—भारत के चीता प्रोजेक्ट और विविध मांसाहारियों का घर।",
    },
    imageAlt: { en: "Open grassland in Kuno", hi: "कूनो की खुली घासभूमि" },
    summary: {
      en: "Dry forest–grassland mix; emerging destination known for the cheetah project.",
      hi: "शुष्क वन-घासभूमि का मिश्रण; चीता प्रोजेक्ट के लिए प्रसिद्ध उभरता गंतव्य।",
    },
    about: {
      en: "Kuno’s broad valleys and scrub forests support leopards, wolves, hyenas and antelopes. The cheetah introduction has brought fresh focus to habitat restoration. Summers are harsh but rewarding near water sources; winters are comfortable for drives.",
      hi: "कूनो की चौड़ी घाटियाँ व झाड़ीदार वन तेन्दुआ, भेड़िया, लकड़बग्घा व मृगों को सहारा देते हैं। चीता परिचय ने आवास पुनर्स्थापना पर नया ध्यान लाया है। गर्मियाँ कठिन मगर जलस्रोतों के पास साइटिंग बढ़िया; सर्दियाँ ड्राइव के लिए आरामदायक।",
    },
  },

  // 8) Van Vihar
  {
    id: "van-vihar",
    image: "/images/parks/van-vihar.jpg",
    type: "National Park",
    designation: {
    en: ["National Park", "Zoo"],
    hi: ["राष्ट्रीय उद्यान", "चिड़ियाघर"],
  },
    name: { en: "Van Vihar National Park & Zoo, Bhopal", hi: "वन विहार राष्ट्रीय उद्यान एवं चिड़ियाघर, भोपाल" },
    district: { en: "Bhopal (MP)", hi: "भोपाल (मप्र)" },
    description: {
      en: "Urban national park by the Upper Lake; rescue & conservation focused.",
      hi: "ऊपरी झील के किनारे स्थित शहरी राष्ट्रीय उद्यान; बचाव व संरक्षण केंद्रित।",
    },
    bestTime: { en: "Oct–Mar", hi: "अक्टूबर–मार्च" },
    safariTypes: { en: ["Safari bus/cycle (zoo circuits)"], hi: ["सफारी बस/साइकिल (चिड़ियाघर मार्ग)"] },
    zones: { en: ["Interpretation trails", "Zoo enclosures"], hi: ["व्याख्या पथ", "चिड़ियाघर परिरक्षा"] },
    entryGates: { en: ["Main Gate (Shamla Hills)"], hi: ["मुख्य प्रवेश (श्यामला हिल्स)"] },
    timings: {
      summer: { en: "≈ 6:30–6:30 (varies)", hi: "≈ 6:30–6:30 (परिवर्तनशील)" },
      winter: { en: "≈ 7:00–6:00 (varies)", hi: "≈ 7:00–6:00 (परिवर्तनशील)" },
    },
    wildlife: { en: ["Rescued carnivores", "Herbivores", "Birds"], hi: ["बचाए गए मांसाहारी", "शाकाहारी", "पक्षी"] },
    howToReach: { en: "City park in Bhopal; easy local access.", hi: "भोपाल शहर में; स्थानीय पहुँच सरल।" },
    officialBooking: "https://vanviharnationalpark.org",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Van+Vihar+National+Park+Bhopal",
    website: "https://bhopal.nic.in/en/tourist-place/van-vihar-national-park/",

    metaTitle: { en: "Van Vihar, Bhopal | The Jungle Journey", hi: "वन विहार, भोपाल | द जंगल जर्नी" },
    metaDescription: {
      en: "Urban national park by Bhopal’s Upper Lake with rescue & conservation programs. Easy family visit.",
      hi: "भोपाल की ऊपरी झील के किनारे स्थित शहरी राष्ट्रीय उद्यान—रिस्क्यू व संरक्षण कार्यक्रमों के साथ। पारिवारिक भ्रमण हेतु सरल।",
    },
    imageAlt: { en: "Upper Lake edge at Van Vihar", hi: "वन विहार, ऊपरी झील का किनारा" },
    summary: {
      en: "City-side park with lakeside trails, interpretation zones and rescued wildlife enclosures.",
      hi: "शहर के पास झील-तटीय ट्रेल्स, व्याख्या क्षेत्र और बचाए गए वन्यजीव परिरक्षा।",
    },
    about: {
      en: "Van Vihar offers lakeside cycling/ walking circuits, interpretation trails and enclosures for rescued wildlife. It focuses on awareness and rehabilitation rather than classic safaris. Best visited in cooler months.",
      hi: "वन विहार में झील-तटीय साइक्लिंग/वॉकिंग सर्किट, व्याख्या पथ और बचाए गए वन्यजीवों के परिरक्षा क्षेत्र हैं। यह पारंपरिक सफारी से अधिक जनजागरण व पुनर्वास पर केंद्रित है। ठंडे महीनों में भ्रमण उपयुक्त।",
    },
  },

  // 9) Gandhi Sagar Wildlife Sanctuary
  {
    id: "gandhi-sagar",
    image: "/images/parks/gandhi-sagar.jpg",
    type: "Wildlife Sanctuary",
    designation: {
    en: ["Wildlife Sanctuary"],
    hi: ["वन्यजीव अभयारण्य"],
  },
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
      summer: { en: "Day timings by range", hi: "दिन के समय (רेंज अनुसार)" },
      winter: { en: "Day timings by range", hi: "दिन के समय (रेंज अनुसार)" },
    },
    wildlife: { en: ["Chinkara", "Nilgai", "Hyena", "Birds"], hi: ["चिंकारा", "नीलगाय", "लकड़बग्घा", "पक्षी"] },
    howToReach: { en: "Rail: Mandsaur/Neemuch. Air: Udaipur/Indore (regional).", hi: "रेल: मंदसौर/नीमच. वायु: उदयपुर/इंदौर (क्षेत्रीय)." },
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Gandhi+Sagar+Wildlife+Sanctuary",
    website: "https://wildtrails.in/gandhi-sagar-wildlife-sanctuary/",

    metaTitle: { en: "Gandhi Sagar WLS | The Jungle Journey", hi: "गांधी सागर अभयारण्य | द जंगल जर्नी" },
    metaDescription: {
      en: "Chambal backwaters with dry deciduous forests, antelopes and seasonal birdlife. Best Nov–Mar.",
      hi: "चंबल बैकवॉटर के किनारे शुष्क वन, मृग व मौसमी पक्षी-जीवन। श्रेष्ठ: नवंबर–मार्च।",
    },
    imageAlt: { en: "Chambal backwaters near Gandhi Sagar", hi: "गांधी सागर के पास चंबल बैकवॉटर" },
    summary: {
      en: "Backwater landscapes and dry forests with chinkara, nilgai and woodland birds.",
      hi: "बैकवॉटर परिदृश्य व शुष्क वन—चिंकारा, नीलगाय व वुडलैंड पक्षी।",
    },
    about: {
      en: "Spread along the Chambal reservoir, Gandhi Sagar hosts open woodlands where antelopes and hyenas roam. Birding improves in winter with migratory visitors. Access is via local range permissions.",
      hi: "चंबल जलाशय के किनारों पर फैला गांधी सागर खुले वनों के लिए जाना जाता है जहाँ मृग व लकड़बग्घा मिलते हैं। सर्दियों में प्रवासी पक्षियों से बर्डिंग बेहतर होती है। प्रवेश अक्सर स्थानीय रेंज अनुमति से होता है।",
    },
  },

  // 10) Nauradehi Wildlife Sanctuary
  {
    id: "nauradehi",
    image: "/images/parks/nauradehi.jpg",
    type: "Wildlife Sanctuary",
    designation: {
    en: ["Wildlife Sanctuary"],
    hi: ["वन्यजीव अभयारण्य"],
  },
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
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Nauradehi+Wildlife+Sanctuary",
    website: "https://nauradehiwls.in",

    metaTitle: { en: "Nauradehi Wildlife Sanctuary | The Jungle Journey", hi: "नौरादेही अभयारण्य | द जंगल जर्नी" },
    metaDescription: {
      en: "Vast dry forests and grasslands with ongoing reintroduction efforts. Best season Nov–Mar.",
      hi: "विस्तृत शुष्क वन व घासभूमियाँ, पुनर्स्थापना प्रयास जारी। श्रेष्ठ मौसम: नवंबर–मार्च।",
    },
    imageAlt: { en: "Dry forest–grassland mosaic in Nauradehi", hi: "नौरादेही की शुष्क वन-घासभूमि" },
    summary: {
      en: "Expansive, offbeat sanctuary known for habitat restoration and wide open vistas.",
      hi: "विस्तृत, ऑफबीट अभयारण्य—आवास पुनर्स्थापना व खुले परिदृश्य के लिए जाना जाता है।",
    },
    about: {
      en: "Nauradehi covers a broad landscape of dry forests and grasslands. Sightings include leopards, wolves and antelopes; blackbuck reintroduction adds interest. Access and routes depend on local range permissions.",
      hi: "नौरादेही शुष्क वनों और घासभूमियों के विस्तृत परिदृश्य को समेटता है। यहाँ तेन्दुआ, भेड़िया व मृग दिखते हैं; काला हिरण पुनर्स्थापना रोचक पहल है। प्रवेश व मार्ग अक्सर स्थानीय रेंज अनुमति पर निर्भर करते हैं।",
    },
  },

  // 11) Madhav National Park
  {
    id: "madhav",
    image: "/images/parks/madhav.jpg",
    type: "National Park",
    designation: {
    en: ["National Park"],
    hi: ["राष्ट्रीय उद्यान"],
  },
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

    metaTitle: { en: "Madhav National Park | The Jungle Journey", hi: "माधव राष्ट्रीय उद्यान | द जंगल जर्नी" },
    metaDescription: {
      en: "Lakeside forests and grasslands near Shivpuri with antelopes and wetland birding. Best Oct–Mar.",
      hi: "शिवपुरी के पास झीलतटीय वन व घासभूमियाँ—मृग व आर्द्रभूमि बर्डिंग। श्रेष्ठ: अक्तू–मार्च।",
    },
    imageAlt: { en: "Sakhya Sagar lake edge at Madhav", hi: "माधव में साख्या सागर झील का किनारा" },
    summary: {
      en: "Scenic lakes and historic forests—a relaxed park for short wildlife drives and birding.",
      hi: "दृश्‍यमय झीलें व ऐतिहासिक वन—हल्की सफ़ारी व बर्डिंग के लिए उपयुक्त।",
    },
    about: {
      en: "Madhav’s Sakhya Sagar and surrounding forests create a pleasant landscape for relaxed drives. Expect antelopes, crocodiles near the lake and woodland birds. Winters are ideal for visitors.",
      hi: "माधव का साख्या सागर और आसपास के वन आरामदायक ड्राइव के लिए सुखद परिदृश्य बनाते हैं। मृग, झील के पास मगर और वुडलैंड पक्षी दिखते हैं। सर्दियाँ आगंतुकों के लिए आदर्श समय हैं।",
    },
  },

  // 12) Dinosaur Fossil National Park (Bagh/Ghughwa info together)
  {
    id: "dinosaur",
    image: "/images/parks/dinosaur.jpg",
    type: "National Park",
    designation: {
    en: ["National Park", "Fossil Park"],
    hi: ["राष्ट्रीय उद्यान", "जीवाश्म उद्यान"],
  },
    name: { en: "Dinosaur Fossil National Park", hi: "डायनासोर जीवाश्म राष्ट्रीय उद्यान" },
    district: { en: "Bagh (Dhar) / Ghughwa (Dindori), MP", hi: "बाग (धार) / घुघुवा (डिंडोरी), मप्र" },
    description: {
      en: "Fossil parks showcasing dinosaur eggs & fossil beds at Bagh (Dhar) and Ghughwa (Dindori).",
      hi: "बाग (धार) व घुघुवा (डिंडोरी) में डायनासोर अंडे व जीवाश्म शैय्याओं का प्रदर्शन।",
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
    officialBooking: "https://forest.mponline.gov.in/",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Dinosaur+Fossil+National+Park+Madhya+Pradesh",
    website: "https://dhar.nic.in/en/tourist-place/dinosaur-fossil-park-bagh/",

    metaTitle: { en: "Dinosaur Fossil National Park | The Jungle Journey", hi: "डायनासोर जीवाश्म राष्ट्रीय उद्यान | द जंगल जर्नी" },
    metaDescription: {
      en: "Explore fossil beds and dinosaur egg sites at Bagh and Ghughwa with interpretation trails.",
      hi: "बाग व घुघुवा में जीवाश्म शैय्याएँ व डायनासोर अंडों के स्थल—व्याख्या पथों के साथ।",
    },
    imageAlt: { en: "Fossil exhibits at the park", hi: "उद्यान में जीवाश्म प्रदर्श" },
    summary: {
      en: "Twin fossil parks in Dhar and Dindori showcasing dinosaur heritage via trails and museums.",
      hi: "धार व डिंडोरी के दो फॉसिल पार्क—ट्रेल्स व संग्रहालय के माध्यम से डायनासोर विरासत।",
    },
    about: {
      en: "These sites preserve dinosaur eggs and fossil beds with interpretation centers guiding visitors through India’s deep prehistory. Combine with nearby cultural stops for a full-day outing.",
      hi: "ये स्थल डायनासोर अंडों व जीवाश्म शैय्याओं का संरक्षण करते हैं। व्याख्या केंद्र आगंतुकों को भारत के प्राचीन इतिहास से रूबरू कराते हैं। आसपास के सांस्कृतिक स्थलों के साथ एक दिवसीय भ्रमण उपयुक्त।",
    },
  },
];

// ✅ default export (your pages import this)
export default mpParks;