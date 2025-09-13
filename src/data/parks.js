// src/data/parks.js
// ✅ Madhya Pradesh parks data (EN+HI). All list fields are arrays.
// ✅ Consistent schema so pages can safely .join(", ") without crashes.

export const mpParks = [
  {
    id: "kanha",
    image: "/images/parks/kanha.jpg",
    imagePos: "50% 35%",
    name: { en: "Kanha National Park", hi: "कान्हा राष्ट्रीय उद्यान" },
    district: { en: "Mandla / Balaghat (MP)", hi: "मंडला / बालाघाट (म.प्र.)" },
    description: {
      en: "India’s best-managed tiger reserve; sal forests and wide meadows with the world’s only hard-ground barasingha.",
      hi: "भारत के सबसे बेहतर प्रबंधित टाइगर रिज़र्व में से एक; सख्त भू-भाग बारहसिंगा, साल वन और चौड़ी घासभूमियाँ।",
    },
    bestTime: { en: "Oct–Jun (Feb–May peak)", hi: "अक्टूबर–जून (फर.–मई पीक)" },
    safariTypes: {
      en: ["Jeep", "Canter", "Night (limited)"],
      hi: ["जीप", "कैंटर", "नाइट (सीमित)"],
    },
    zones: {
      en: ["Kisli", "Mukki", "Kanha", "Sarhi"],
      hi: ["किसली", "मुक्की", "कान्हा", "सरही"],
    },
    entryGates: {
      en: ["Khatia", "Mukki", "Kanha Gate", "Sarhi"],
      hi: ["खटिया", "मुक्की", "कान्हा गेट", "सरही"],
    },
    timings: {
      summer: { en: "≈ 5:30–10:30 & 3:00–6:30", hi: "≈ 5:30–10:30 & 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 & 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Barasingha", "Leopard", "Sloth bear", "Wild dog", "Gaur"],
      hi: ["बाघ", "बारहसिंगा", "तेंदुआ", "भालू", "जंगली कुत्ता", "गौर"],
    },
    howToReach: {
      en: "Rail: Gondia/Jabalpur. Air: Jabalpur (~160 km), Nagpur (~260 km).",
      hi: "रेल: गोंदिया/जबलपुर. हवाई: जबलपुर (~160 किमी), नागपुर (~260 किमी).",
    },
    officialBooking: "https://forest.mponline.gov.in/",
    parkWebsite: "https://www.kanhanationalparkonline.in/",
    googleMap: "https://maps.google.com/?q=Kanha+National+Park",
  },

  {
    id: "bandhavgarh",
    image: "/images/parks/bandhavgarh.jpg",
    imagePos: "50% 28%",
    name: { en: "Bandhavgarh National Park", hi: "बांधवगढ़ राष्ट्रीय उद्यान" },
    district: { en: "Umaria (MP)", hi: "उमरिया (म.प्र.)" },
    description: {
      en: "High tiger density; sal–bamboo forests and the ancient Bandhavgarh Fort.",
      hi: "उच्च बाघ घनत्व; साल-बाँस वन और प्राचीन बांधवगढ़ किला।",
    },
    bestTime: { en: "Oct–Jun (Feb–May best)", hi: "अक्टूबर–जून (फर.–मई श्रेष्ठ)" },
    safariTypes: {
      en: ["Jeep", "Canter"],
      hi: ["जीप", "कैंटर"],
    },
    zones: {
      en: ["Tala", "Magadhi", "Khitauli"],
      hi: ["ताला", "मगधि", "खितौली"],
    },
    entryGates: {
      en: ["Tala", "Magadhi", "Khitauli"],
      hi: ["ताला", "मगधि", "खितौली"],
    },
    timings: {
      summer: { en: "≈ 5:30–10:00 & 3:00–6:30", hi: "≈ 5:30–10:00 & 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 & 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Sloth bear", "Wild dog", "Gaur", "Chital", "Birds"],
      hi: ["बाघ", "तेंदुआ", "भालू", "जंगली कुत्ता", "गौर", "चितल", "पक्षी"],
    },
    howToReach: {
      en: "Rail/Air: Jabalpur/Katni (nearest railheads).",
      hi: "रेल/हवाई: जबलपुर/कटनी (निकटतम).",
    },
    officialBooking: "https://forest.mponline.gov.in/",
    parkWebsite: "https://www.bandhavgarhnationalpark.in/",
    googleMap: "https://maps.google.com/?q=Bandhavgarh+National+Park",
  },

  {
    id: "pench",
    image: "/images/parks/pench.jpg",
    imagePos: "50% 35%",
    name: { en: "Pench National Park", hi: "पेंच राष्ट्रीय उद्यान" },
    district: { en: "Seoni / Chhindwara (MP)", hi: "सिवनी / छिंदवाड़ा (म.प्र.)" },
    description: {
      en: "Inspiration for ‘The Jungle Book’; teak & mixed forests with multiple gates.",
      hi: "‘द जंगल बुक’ की प्रेरणा; सागौन व मिश्रित वन, कई प्रवेश द्वारों के साथ।",
    },
    bestTime: { en: "Oct–Jun", hi: "अक्टूबर–जून" },
    safariTypes: { en: ["Jeep", "Canter", "Boat"], hi: ["जीप", "कैंटर", "नाव"] },
    zones: {
      en: ["Turia", "Karmajhiri", "Jamtara"],
      hi: ["तुरिया", "करमाझिरी", "जामतारा"],
    },
    entryGates: {
      en: ["Turia", "Karmajhiri", "Jamtara"],
      hi: ["तुरिया", "करमाझिरी", "जामतारा"],
    },
    timings: {
      summer: { en: "≈ 5:30–10:00 & 3:00–6:30", hi: "≈ 5:30–10:00 & 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 & 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Wild dog", "Sambar", "Gaur", "Birds"],
      hi: ["बाघ", "तेंदुआ", "जंगली कुत्ता", "सांभर", "गौर", "पक्षी"],
    },
    howToReach: {
      en: "Air: Nagpur. Rail: Seoni/Chhindwara/Nagpur.",
      hi: "हवाई: नागपुर. रेल: सिवनी/छिंदवाड़ा/नागपुर।",
    },
    officialBooking: "https://forest.mponline.gov.in/",
    parkWebsite: "https://www.penchnationalparkonline.in/",
    googleMap: "https://maps.google.com/?q=Pench+National+Park",
  },

  {
    id: "satpura",
    image: "/images/parks/satpura.jpg",
    imagePos: "50% 36%",
    name: { en: "Satpura Tiger Reserve", hi: "सतपुड़ा टाइगर रिज़र्व" },
    district: { en: "Hoshangabad (Narmadapuram)", hi: "होशंगाबाद (नर्मदापुरम)" },
    description: {
      en: "Best known for canoe & walking safaris; rugged hills and diverse wildlife.",
      hi: "कैनो/वॉकिंग सफारी के लिए प्रसिद्ध; दुर्गम पहाड़ियाँ और विविध वन्यजीव।",
    },
    bestTime: { en: "Oct–Apr", hi: "अक्टूबर–अप्रैल" },
    safariTypes: {
      en: ["Jeep", "Boat (seasonal)", "Walking (guided)"],
      hi: ["जीप", "नाव (मौसमी)", "वॉकिंग (गाइडेड)"],
    },
    zones: { en: ["Core & buffer ranges"], hi: ["कोर व बफर रेंज"] },
    entryGates: { en: ["Near Madhai", "Pachmarhi"], hi: ["मधाई के पास", "पचमढ़ी"] },
    timings: {
      summer: { en: "As per field range", hi: "रेंज अनुसार" },
      winter: { en: "As per field range", hi: "रेंज अनुसार" },
    },
    wildlife: {
      en: ["Leopard", "Sloth bear", "Gaur", "Malabar giant squirrel", "Birds"],
      hi: ["तेंदुआ", "भालू", "गौर", "मालाबार जायंट स्क्विरेल", "पक्षी"],
    },
    howToReach: {
      en: "Road via Hoshangabad/Pipariya; nearest rail Pipariya/Itarsi.",
      hi: "सड़क: होशंगाबाद/पिपरिया; रेल: पिपरिया/इटारसी।",
    },
    officialBooking: "https://forest.mponline.gov.in/",
    parkWebsite: "https://www.satpuranationalparkonline.in/",
    googleMap: "https://maps.google.com/?q=Satpura+Tiger+Reserve",
  },

  {
    id: "panna",
    image: "/images/parks/panna.jpg",
    imagePos: "50% 35%",
    name: { en: "Panna National Park", hi: "पन्ना राष्ट्रीय उद्यान" },
    district: { en: "Panna / Chhatarpur (MP)", hi: "पन्ना / छतरपुर (म.प्र.)" },
    description: {
      en: "Ken river, deep gorges and rich bird life; both jeep & boat safaris.",
      hi: "केन नदी, गहरी घाटियाँ और समृद्ध पक्षी जीवन; जीप व नाव सफारी।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep", "Boat"], hi: ["जीप", "नाव"] },
    zones: { en: ["Madla", "Hinauta", "Akola (buffer)"], hi: ["मडला", "हिनौता", "अकोला (बफर)"] },
    entryGates: { en: ["Madla", "Hinauta"], hi: ["मडला", "हिनौता"] },
    timings: {
      summer: { en: "≈ 5:30–10:00 & 3:00–6:30", hi: "≈ 5:30–10:00 & 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 & 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Crocodile", "Vulture", "Birds"],
      hi: ["बाघ", "तेंदुआ", "घड़ियाल/मगर", "गिद्ध", "पक्षी"],
    },
    howToReach: {
      en: "Rail: Khajuraho/Satna; Air: Khajuraho.",
      hi: "रेल: खजुराहो/सतना; हवाई: खजुराहो।",
    },
    officialBooking: "https://forest.mponline.gov.in/",
    parkWebsite: "https://www.pannanationalparkonline.in/",
    googleMap: "https://maps.google.com/?q=Panna+National+Park",
  },

  {
    id: "sanjayDubri",
    image: "/images/parks/sanjay-dubri.jpg",
    imagePos: "50% 28%",
    name: { en: "Sanjay-Dubri Tiger Reserve", hi: "संजय-डुबरी टाइगर रिज़र्व" },
    district: { en: "Sidhi & Singrauli (MP)", hi: "सीधी व सिंगरौली (म.प्र.)" },
    description: {
      en: "Large sal forests; quieter tourism with good leopard & bird sightings.",
      hi: "विस्तृत साल वन; कम भीड़ वाला पर्यटन, तेंदुए व पक्षियों के अच्छे दर्शन।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    zones: { en: ["Dubri range & buffers"], hi: ["डुबरी रेंज व बफ़र्स"] },
    entryGates: { en: ["Near Sidhi / Beohari"], hi: ["सीधी/बिओहारी के पास"] },
    timings: {
      summer: { en: "Field-range timings", hi: "रेंज अनुसार" },
      winter: { en: "Field-range timings", hi: "रेंज अनुसार" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Sloth bear", "Chital", "Birds"],
      hi: ["बाघ", "तेंदुआ", "भालू", "चितल", "पक्षी"],
    },
    howToReach: {
      en: "Rail: Rewa/Anuppur/Singrauli; nearest airports Jabalpur/Prayagraj.",
      hi: "रेल: रीवा/अनूपपुर/सिंगरौली; हवाई: जबलपुर/प्रयागराज।",
    },
    officialBooking: "https://forest.mponline.gov.in/",
    parkWebsite: "https://mpforest.co.in/",
    googleMap: "https://maps.google.com/?q=Sanjay+Dubri+Tiger+Reserve",
  },

  {
    id: "kuno",
    image: "/images/parks/kuno.jpg",
    imagePos: "50% 45%",
    name: { en: "Kuno National Park", hi: "कूनो राष्ट्रीय उद्यान" },
    district: { en: "Sheopur (MP)", hi: "श्योपुर (म.प्र.)" },
    description: {
      en: "Riverine woodlands and savanna; known for the Cheetah reintroduction site.",
      hi: "नदी-तटीय वन व सवाना; चीता पुनर्स्थापन के लिए प्रसिद्ध।",
    },
    bestTime: { en: "Oct–Mar", hi: "अक्टूबर–मार्च" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    zones: { en: ["Ahera, PeepalBawadi (etc.)"], hi: ["अहेड़ा, पीपलबावड़ी आदि"] },
    entryGates: { en: ["Tiktoli", "Ahera side"], hi: ["टिकटोली", "अहेड़ा साइड"] },
    timings: {
      summer: { en: "≈ 5:30–10:00 & 3:00–6:30", hi: "≈ 5:30–10:00 & 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 & 2:30–5:30" },
    },
    wildlife: {
      en: ["Leopard", "Hyena", "Chinkara", "Nilgai", "Birds"],
      hi: ["तेंदुआ", "लकड़बग्घा", "चिंकारा", "नीलगाय", "पक्षी"],
    },
    howToReach: {
      en: "Nearest rail: Sheopur/Kailaras; Air: Gwalior/Jaipur.",
      hi: "रेल: श्योपुर/कैलाईरस; हवाई: ग्वालियर/जयपुर।",
    },
    officialBooking: "https://www.kunonationalpark.org/",
    parkWebsite: "https://mpforest.co.in/",
    googleMap: "https://maps.google.com/?q=Kuno+National+Park",
  },

  {
    id: "vanVihar",
    image: "/images/parks/van-vihar.jpg",
    imagePos: "50% 40%",
    name: { en: "Van Vihar National Park (Bhopal)", hi: "वन विहार राष्ट्रीय उद्यान (भोपाल)" },
    district: { en: "Bhopal (MP)", hi: "भोपाल (म.प्र.)" },
    description: {
      en: "Urban national park & zoo along Bhopal’s Upper Lake; popular for easy wildlife viewing and cycling tracks.",
      hi: "भोपाल की ऊपरी झील किनारे स्थित शहरी राष्ट्रीय उद्यान एवं चिड़ियाघर; सरल वन्यजीव दर्शन व साइक्लिंग ट्रैक।",
    },
    bestTime: { en: "Round the year", hi: "पूरे वर्ष" },
    safariTypes: { en: ["Battery carts", "Cycles (rental)"], hi: ["बैटरी कार्ट", "साइकिल (किराया)"] },
    zones: { en: ["Zoo & rescue enclosures"], hi: ["चिड़ियाघर व रेस्क्यू एनक्लोज़र"] },
    entryGates: { en: ["Lake View gate"], hi: ["लेक व्यू गेट"] },
    timings: {
      summer: { en: "As per park schedule", hi: "पार्क समयानुसार" },
      winter: { en: "As per park schedule", hi: "पार्क समयानुसार" },
    },
    wildlife: {
      en: ["Tiger (rescued)", "Leopard", "Bear", "Herbivores", "Birds"],
      hi: ["बाघ (रेस्क्यू)", "तेंदुआ", "भालू", "शाकाहारी", "पक्षी"],
    },
    howToReach: {
      en: "Inside Bhopal city, near Upper Lake.",
      hi: "भोपाल शहर में, ऊपरी झील के पास।",
    },
    officialBooking: "https://vanviharnationalpark.org/",
    parkWebsite: "https://vanviharnationalpark.org/",
    googleMap: "https://maps.google.com/?q=Van+Vihar+Bhopal",
  },

  {
    id: "gandhiSagar",
    image: "/images/parks/gandhi-sagar.jpg",
    imagePos: "50% 36%",
    name: { en: "Gandhi Sagar Wildlife Sanctuary", hi: "गांधी सागर अभयारण्य" },
    district: { en: "Mandsaur & Neemuch (MP)", hi: "मंदसौर व नीमच (म.प्र.)" },
    description: {
      en: "Located along the Chambal; dry deciduous habitats with antelopes & birds.",
      hi: "चंबल किनारे स्थित; शुष्क पर्णपाती वन, मृग-हिरण व पक्षियों की अच्छी विविधता।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep (limited)"], hi: ["जीप (सीमित)"] },
    zones: { en: ["Core & buffer ranges"], hi: ["कोर व बफ़र रेंज"] },
    entryGates: { en: ["Near Gandhi Sagar dam side"], hi: ["गांधीसागर बाँध साइड"] },
    timings: {
      summer: { en: "As per field range", hi: "रेंज अनुसार" },
      winter: { en: "As per field range", hi: "रेंज अनुसार" },
    },
    wildlife: {
      en: ["Chinkara", "Blue bull", "Wild boar", "Crocodile", "Birds"],
      hi: ["चिंकारा", "नीलगाय", "जंगली सूअर", "घड़ियाल/मगर", "पक्षी"],
    },
    howToReach: {
      en: "Road via Mandsaur/Neemuch.",
      hi: "सड़क मार्ग: मंदसौर/नीमच।",
    },
    officialBooking: "https://forest.mponline.gov.in/",
    parkWebsite: "https://wildtrails.in/",
    googleMap: "https://maps.google.com/?q=Gandhi+Sagar+Wildlife+Sanctuary",
  },

  {
    id: "nauradehi",
    image: "/images/parks/nauradehi.jpg",
    imagePos: "50% 40%",
    name: { en: "Nauradehi Wildlife Sanctuary", hi: "नौरादेही अभयारण्य" },
    district: { en: "Sagar / Damoh / Narsinghpur (MP)", hi: "सागर / दमोह / नरसिंहपुर (म.प्र.)" },
    description: {
      en: "Central India’s large sanctuary with rolling grasslands and woodlands.",
      hi: "मध्य भारत का विशाल अभयारण्य—लहराते घासभूमि एवं वन भूमि।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep (by range)"], hi: ["जीप (रेंज अनुसार)"] },
    zones: { en: ["Multiple ranges"], hi: ["अनेक रेंज"] },
    entryGates: { en: ["Range HQ contacts"], hi: ["रेंज मुख्यालय से प्रवेश"] },
    timings: {
      summer: { en: "As per field range", hi: "रेंज अनुसार" },
      winter: { en: "As per field range", hi: "रेंज अनुसार" },
    },
    wildlife: {
      en: ["Leopard", "Wolf (patchy)", "Chinkara", "Blackbuck (reintroduced spots)", "Birds"],
      hi: ["तेंदुआ", "भेड़िया (स्थानीय)", "चिंकारा", "काला हिरण (कुछ हिस्से)", "पक्षी"],
    },
    howToReach: {
      en: "Reach via Sagar/Damoh; coordinate with sanctuary office.",
      hi: "सागर/दमोह मार्ग से; अभयारण्य कार्यालय से समन्वय करें।",
    },
    officialBooking: "https://nauradehiwls.in/ (or via range contacts)",
    parkWebsite: "https://nauradehiwls.in/",
    googleMap: "https://maps.google.com/?q=Nauradehi+Wildlife+Sanctuary",
  },

  {
    id: "madhav",
    image: "/images/parks/madhav.jpg",
    imagePos: "50% 38%",
    name: { en: "Madhav National Park", hi: "माधव राष्ट्रीय उद्यान" },
    district: { en: "Shivpuri (MP)", hi: "शिवपुरी (म.प्र.)" },
    description: {
      en: "Lakes, rolling hills and grasslands; good for antelopes and birds.",
      hi: "झीलें, उठानदार पहाड़ियाँ और घासभूमि; मृग-हिरण व पक्षियों के लिए प्रसिद्ध।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    zones: { en: ["Core & buffers"], hi: ["कोर व बफर"] },
    entryGates: { en: ["Sirsod / Main gate"], hi: ["सिरसौद / मुख्य द्वार"] },
    timings: {
      summer: { en: "≈ 5:30–10:00 & 3:00–6:30", hi: "≈ 5:30–10:00 & 3:00–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 & 2:30–5:30" },
    },
    wildlife: {
      en: ["Leopard", "Chital", "Nilgai", "Blackbuck (nearby areas)", "Birds"],
      hi: ["तेंदुआ", "चितल", "नीलगाय", "काला हिरण (कुछ हिस्से)", "पक्षी"],
    },
    howToReach: {
      en: "Rail/Air: Gwalior; Road: NH passing through Shivpuri.",
      hi: "रेल/हवाई: ग्वालियर; सड़क: शिवपुरी से राष्ट्रीय राजमार्ग।",
    },
    officialBooking: "https://madhavnationalpark.org/",
    parkWebsite: "https://madhavnationalpark.org/",
    googleMap: "https://maps.google.com/?q=Madhav+National+Park",
  },

  {
    id: "dinosaur",
    image: "/images/parks/dinosaur.jpg",
    imagePos: "50% 42%",
    name: { en: "Dinosaur Fossil National Park (Ghughwa/Bagh)", hi: "डायनासोर जीवाश्म राष्ट्रीय उद्यान (घुघुवा/बाघ)" },
    district: { en: "Dindori & Dhar (MP)", hi: "डिंडोरी व धार (म.प्र.)" },
    description: {
      en: "Unique paleontological sites with fossil trees and dinosaur egg fossils; museum/interpretation centres.",
      hi: "विशिष्ट जीवाश्मीय स्थल—जीवाश्मकृत वृक्ष व डायनासोर अंडों के जीवाश्म; संग्रहालय/व्याख्या केन्द्र।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: {
      en: ["Guided fossil trail", "Museum/Interpretation"],
      hi: ["गाइडेड फॉसिल ट्रेल", "संग्रहालय/व्याख्या"],
    },
    zones: {
      en: ["Bagh fossil sites", "Ghughwa Fossil Park"],
      hi: ["बाघ फॉसिल साइट", "घुघुवा फॉसिल पार्क"],
    },
    entryGates: {
      en: ["Bagh: District Dhar", "Ghughwa: near Dindori"],
      hi: ["बाघ: धार जिला", "घुघुवा: डिंडोरी के पास"],
    },
    timings: {
      summer: { en: "≈ 10:00–5:00 (site-wise)", hi: "≈ 10:00–5:00 (स्थल अनुसार)" },
      winter: { en: "≈ 10:00–5:00", hi: "≈ 10:00–5:00" },
    },
    wildlife: {
      en: ["Not a wildlife safari park; geological heritage sites"],
      hi: ["यह वन्यजीव सफारी पार्क नहीं; भू-विज्ञान धरोहर स्थल"],
    },
    howToReach: {
      en: "Bagh: Indore/Ujjain road; Ghughwa: Jabalpur–Dindori route.",
      hi: "बाघ: इंदौर/उज्जैन मार्ग; घुघुवा: जबलपुर–डिंडोरी मार्ग।",
    },
    officialBooking: "https://dindori.nic.in/ (info) • https://dhar.nic.in/ (info)",
    parkWebsite: "https://dindori.nic.in/en/tourism/ghughwa-national-fossil-park/",
    googleMap: "https://maps.google.com/?q=Ghughwa+Fossil+Park",
  },
];

// ✅ Both exports so imports never fail
export default mpParks;