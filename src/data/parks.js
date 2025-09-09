// src/data/parks.js
// ✅ Madhya Pradesh parks data (EN+HI). Safe shapes for UI.

const mpParks = [
  {
    id: "kanha",
    image: "/images/parks/kanha.jpg",
    imagePos: "50% 35%",
    name: { en: "Kanha National Park", hi: "कान्हा राष्ट्रीय उद्यान" },
    district: { en: "Mandla / Balaghat", hi: "मंडला / बालाघाट" },
    description: {
      en: "India’s best-managed tiger reserve; sal forests and wide meadows with the world’s only hard-ground barasingha.",
      hi: "भारत के सबसे बेहतर प्रबंधित बाघ अभयारण्यों में से एक—साल के जंगल और चौड़े मैदान; विश्व की एकमात्र कठोर-भूमि बारासिंगा आबादी।",
    },
    bestTime: { en: "Oct–Jun (Feb–May peak)", hi: "अक्टूबर–जून (फ़रवरी–मई सर्वोत्तम)" },
    safariTypes: { en: ["Jeep", "Canter", "Night (limited)"], hi: ["जीप", "कैंटर", "रात्रि (सीमित)"] },
    zones: { en: ["Kisli", "Mukki", "Kanha", "Sarhi"], hi: ["किसली", "मुकी", "कान्हा", "सरही"] },
    entryGates: { en: ["Khatia", "Mukki", "Kanha Gate", "Sarhi"], hi: ["खटिया", "मुकी", "कान्हा गेट", "सरही"] },
    timings: {
      summer: { en: "≈ 5:30–10:30 & 3:30–6:30", hi: "≈ 5:30–10:30 व 3:30–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Barasingha", "Leopard", "Sloth bear", "Wild dog", "Gaur"],
      hi: ["बाघ", "बारासिंगा", "तेंदुआ", "भालू", "जंगली कुत्ता", "गौर"],
    },
    howToReach: {
      en: "Rail: Gondia/Jabalpur. Air: Jabalpur (~160 km), Nagpur (~260 km).",
      hi: "रेल: गोंदिया/जबलपुर। वायु: जबलपुर (~160 किमी), नागपुर (~260 किमी)।",
    },
  },

  {
    id: "bandhavgarh",
    image: "/images/parks/bandhavgarh.jpg",
    imagePos: "50% 30%",
    name: { en: "Bandhavgarh National Park", hi: "बांधवगढ़ राष्ट्रीय उद्यान" },
    district: { en: "Umaria", hi: "उमरिया" },
    description: {
      en: "High tiger density; sal–bamboo forests and the ancient Bandhavgarh Fort.",
      hi: "उच्च बाघ घनत्व; साल–बाँस के वन और प्राचीन बांधवगढ़ किला।",
    },
    bestTime: { en: "Oct–Jun (Feb–May best)", hi: "अक्टूबर–जून (फ़रवरी–मई सर्वोत्तम)" },
    safariTypes: { en: ["Jeep", "Canter"], hi: ["जीप", "कैंटर"] },
    zones: { en: ["Tala", "Magadhi", "Khitauli"], hi: ["ताला", "मगधी", "खितौली"] },
    entryGates: { en: ["Tala", "Magadhi", "Khitauli"], hi: ["ताला", "मगधी", "खितौली"] },
    timings: {
      summer: { en: "≈ 5:30–10:00 & 3:30–6:30", hi: "≈ 5:30–10:00 व 3:30–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Sloth bear", "Gaur", "Sambar"],
      hi: ["बाघ", "तेंदुआ", "भालू", "गौर", "सांभर"],
    },
    howToReach: {
      en: "Rail: Umaria/Katni. Air: Jabalpur (~165 km).",
      hi: "रेल: उमरिया/कटनी। वायु: जबलपुर (~165 किमी)।",
    },
  },

  {
    id: "pench",
    image: "/images/parks/pench.jpg",
    imagePos: "50% 38%",
    name: { en: "Pench National Park", hi: "पेंच राष्ट्रीय उद्यान" },
    district: { en: "Seoni / Chhindwara", hi: "सीनी / छिंदवाड़ा" },
    description: {
      en: "Inspiration for ‘The Jungle Book’; teak & mixed forests with multiple gates.",
      hi: "‘द जंगल बुक’ की प्रेरणा; सागौन व मिश्रित वन, कई प्रवेश द्वार।",
    },
    bestTime: { en: "Oct–Jun", hi: "अक्टूबर–जून" },
    safariTypes: { en: ["Jeep", "Canter", "Boat"], hi: ["जीप", "कैंटर", "नौका"] },
    zones: { en: ["Turia", "Karmajhiri", "Jamtara"], hi: ["तुरिया", "कर्माझीरी", "जमतरा"] },
    entryGates: { en: ["Turia", "Karmajhiri", "Jamtara"], hi: ["तुरिया", "कर्माझीरी", "जमतरा"] },
    timings: {
      summer: { en: "≈ 5:30–10:00 & 3:30–6:30", hi: "≈ 5:30–10:00 व 3:30–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Wild dog", "Sambar", "Gaur"],
      hi: ["बाघ", "तेंदुआ", "जंगली कुत्ता", "सांभर", "गौर"],
    },
    howToReach: {
      en: "Rail: Seoni/Chhindwara/Nagpur. Air: Nagpur (~90–130 km).",
      hi: "रेल: सीनी/छिंदवाड़ा/नागपुर। वायु: नागपुर (~90–130 किमी)।",
    },
  },

  {
    id: "satpura",
    image: "/images/parks/satpura.jpg",
    imagePos: "50% 30%",
    name: { en: "Satpura National Park", hi: "सतपुड़ा राष्ट्रीय उद्यान" },
    district: { en: "Narmadapuram (Hoshangabad)", hi: "नर्मदापुरम (होशंगाबाद)" },
    description: {
      en: "Hills & reservoirs; unique boat, walking and canoe experiences (as per zone).",
      hi: "पहाड़ियां व जलाशय; बोट, वॉकिंग और केनू जैसे अनूठे अनुभव (ज़ोन अनुसार)।",
    },
    bestTime: { en: "Oct–Jun", hi: "अक्टूबर–जून" },
    safariTypes: { en: ["Jeep", "Boat", "Walk"], hi: ["जीप", "नौका", "पैदल"] },
    zones: { en: ["Madhai", "Churna"], hi: ["माधई", "चूर्णा"] },
    entryGates: { en: ["Madhai", "Churna"], hi: ["माधई", "चूर्णा"] },
    timings: {
      summer: { en: "≈ 5:30–10:00 & 3:30–6:30", hi: "≈ 5:30–10:00 व 3:30–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: {
      en: ["Leopard", "Sloth bear", "Crocodile", "Gaur"],
      hi: ["तेंदुआ", "भालू", "मगर", "गौर"],
    },
    howToReach: {
      en: "Rail: Pipariya/Itarsi. Air: Bhopal (~150 km).",
      hi: "रेल: पिपरिया/इटारसी। वायु: भोपाल (~150 किमी)।",
    },
  },

  {
    id: "panna",
    image: "/images/parks/panna.jpg",
    imagePos: "50% 32%",
    name: { en: "Panna National Park", hi: "पन्ना राष्ट्रीय उद्यान" },
    district: { en: "Panna / Chhatarpur", hi: "पन्ना / छतरपुर" },
    description: {
      en: "Ken river plateaus & teak forests; gharial sanctuary and scenic gorges.",
      hi: "केन नदी के पठार व सागौन वन; घड़ियाल अभयारण्य और सुरम्य घाटियाँ।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep", "Boat"], hi: ["जीप", "नौका"] },
    zones: { en: ["Madla", "Hinauta"], hi: ["मडला", "हिनौता"] },
    entryGates: { en: ["Madla", "Hinauta"], hi: ["मडला", "हिनौता"] },
    timings: {
      summer: { en: "≈ 5:30–10:00 & 3:30–6:30", hi: "≈ 5:30–10:00 व 3:30–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Gharial", "Vulture"],
      hi: ["बाघ", "तेंदुआ", "घड़ियाल", "गिद्ध"],
    },
    howToReach: {
      en: "Rail/Air: Khajuraho (~25 km). Road via Panna/Chhatarpur.",
      hi: "रेल/वायु: खजुराहो (~25 किमी)। सड़क: पन्ना/छतरपुर से।",
    },
  },

  {
    id: "sanjay-dubri",
    image: "/images/parks/sanjay-dubri.jpg",
    imagePos: "50% 32%",
    name: { en: "Sanjay–Dubri Tiger Reserve", hi: "संजय–दुबरी टाइगर रिज़र्व" },
    district: { en: "Sidhi / Singrauli", hi: "सीधी / सिंगरौली" },
    description: {
      en: "Quiet sal forests and meadow landscapes; offbeat yet rewarding.",
      hi: "शांत साल वन और ढलवां घासभूमि; ऑफबीट पर फलदायी।",
    },
    bestTime: { en: "Nov–Apr", hi: "नवंबर–अप्रैल" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    zones: { en: ["Sanjay", "Dubri"], hi: ["संजय", "दुबरी"] },
    entryGates: { en: ["Sanjay", "Dubri"], hi: ["संजय", "दुबरी"] },
    timings: {
      summer: { en: "≈ 5:30–10:00 & 3:30–6:30", hi: "≈ 5:30–10:00 व 3:30–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Sloth bear", "Chital", "Sambar"],
      hi: ["बाघ", "तेंदुआ", "भालू", "चितल", "सांभर"],
    },
    howToReach: {
      en: "Rail: Rewa/Sidhi/Singrauli. Air: Jabalpur/Prayagraj.",
      hi: "रेल: रीवा/सीधी/सिंगरौली। वायु: जबलपुर/प्रयागराज।",
    },
  },

  {
    id: "nauradehi",
    image: "/images/parks/nauradehi.jpg",
    imagePos: "50% 28%",
    name: { en: "Nauradehi Wildlife Sanctuary", hi: "नौरादेही अभयारण्य" },
    district: { en: "Sagar / Damoh", hi: "सागर / दमोह" },
    description: {
      en: "Large dry-deciduous mosaic with grasslands; good for herbivores & birds.",
      hi: "शुष्क पर्णपाती वन व घासभूमियों का विशाल मिश्रण; शाकाहारी व पक्षियों के लिए अच्छा।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    zones: { en: ["Ghogra", "Singpur"], hi: ["घोगरा", "सिंगपुर"] },
    entryGates: { en: ["Ghogra", "Singpur"], hi: ["घोगरा", "सिंगपुर"] },
    timings: {
      summer: { en: "≈ 5:30–10:00 & 3:30–6:30", hi: "≈ 5:30–10:00 व 3:30–6:30" },
      winter: { en: "≈ 6:30–11:00 & 2:30–5:30", hi: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: {
      en: ["Chital", "Nilgai", "Blackbuck (patches)", "Birds"],
      hi: ["चितल", "नीलगाय", "काला हिरन (कुछ क्षेत्र)", "पक्षी"],
    },
    howToReach: {
      en: "Rail: Sagar/Damoh.",
      hi: "रेल: सागर/दमोह।",
    },
  },

  {
    id: "gandhi-sagar",
    image: "/images/parks/gandhi-sagar.jpg",
    imagePos: "50% 34%",
    name: { en: "Gandhi Sagar Wildlife Sanctuary", hi: "गांधी सागर अभयारण्य" },
    district: { en: "Mandsaur / Neemuch", hi: "मंदसौर / नीमच" },
    description: {
      en: "Chambal ravines and teak forests around the reservoir; scenic drives and birding.",
      hi: "गांधी सागर जलाशय के आसपास चंबल की बीहड़ व सागौन वन; सुहाने ड्राइव और बर्डिंग।",
    },
    bestTime: { en: "Nov–Feb", hi: "नवंबर–फ़रवरी" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    zones: { en: ["Left Bank", "Right Bank"], hi: ["लेफ्ट बैंक", "राइट बैंक"] },
    entryGates: { en: ["Rampura", "Bhanpura"], hi: ["रामपुरा", "भानपुरा"] },
    timings: {
      summer: { en: "As per local range", hi: "स्थानीय रेंज समय" },
      winter: { en: "As per local range", hi: "स्थानीय रेंज समय" },
    },
    wildlife: {
      en: ["Chinkara", "Nilgai", "Crocodile", "Birds"],
      hi: ["चिंकाड़ा", "नीलगाय", "मगर", "पक्षी"],
    },
    howToReach: {
      en: "Rail: Mandsaur/Neemuch.",
      hi: "रेल: मंदसौर/नीमच।",
    },
  },

  {
    id: "van-vihar",
    image: "/images/parks/van-vihar.jpg",
    imagePos: "50% 32%",
    name: { en: "Van Vihar National Park (Bhopal)", hi: "वन विहार राष्ट्रीय उद्यान (भोपाल)" },
    district: { en: "Bhopal", hi: "भोपाल" },
    description: {
      en: "Urban park around the Upper Lake; easy access, birding and rescued fauna enclosures.",
      hi: "ऊपरी झील के किनारे शहरी उद्यान; आसान पहुँच, बर्डिंग व रेस्क्यूड जीवों के बाड़े।",
    },
    bestTime: { en: "Oct–Mar", hi: "अक्टूबर–मार्च" },
    safariTypes: { en: ["Battery cart / Cycle"], hi: ["बैटरी कार्ट / साइकिल"] },
    zones: { en: ["Lake belt", "Forest trail"], hi: ["झील पट्टी", "वन पथ"] },
    entryGates: { en: ["VIP Road Gate", "Bhadbhada"], hi: ["वीआईपी रोड गेट", "भदभदा"] },
    timings: {
      summer: { en: "Day entry (park hours)", hi: "दिन में प्रवेश (पार्क समय)" },
      winter: { en: "Day entry (park hours)", hi: "दिन में प्रवेश (पार्क समय)" },
    },
    wildlife: {
      en: ["Birds", "Crocodile", "Rescued carnivores (enclosures)"],
      hi: ["पक्षी", "मगर", "रेस्क्यू carnivores (बाड़े)"],
    },
    howToReach: {
      en: "Within Bhopal city limits.",
      hi: "भोपाल शहर के भीतर।",
    },
  },

  {
    id: "kuno",
    image: "/images/parks/kuno.jpg",
    imagePos: "50% 26%",
    name: { en: "Kuno National Park", hi: "कूनो राष्ट्रीय उद्यान" },
    district: { en: "Sheopur", hi: "श्योपुर" },
    description: {
      en: "Arid forests and grasslands along the Kuno river; known for cheetah reintroduction.",
      hi: "कूनो नदी के किनारे शुष्क वन व घासभूमि; चीता पुनर्परिचय के लिए प्रसिद्ध।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    zones: { en: ["Ahera", "Bagcha", "Moravan (buffer)"], hi: ["अहेरा", "बगचा", "मोरवन (बफर)"] },
    entryGates: { en: ["Ahera", "Tiktoli (buffer)"], hi: ["अहेरा", "टिकटोली (बफर)"] },
    timings: {
      summer: { en: "Two rounds daily (summer timings)", hi: "दिन में दो राउंड (ग्रीष्म समय)" },
      winter: { en: "Two rounds daily (winter timings)", hi: "दिन में दो राउंड (शीत समय)" },
    },
    wildlife: {
      en: ["Leopard", "Nilgai", "Chital", "Wild boar", "Cheetah (soft-release zones)"],
      hi: ["तेंदुआ", "नीलगाय", "चितल", "जंगली सूअर", "चीता (सॉफ्ट-रिलीज़ जोन)"],
    },
    howToReach: {
      en: "Rail: Sheopur / Gwalior (~170 km). Air: Gwalior.",
      hi: "रेल: श्योपुर / ग्वालियर (~170 किमी)। वायु: ग्वालियर।",
    },
  },
];

/* ---------------- Booking links (deep → fallback) ---------------- */
const MP_PORTAL = "https://forest.mponline.gov.in";

const BOOKING_URL = {
  kanha:        `${MP_PORTAL}/eBrochure/eBrochure_Forms/Wildlife_KanhaTigerReserve.aspx`,
  bandhavgarh:  `${MP_PORTAL}/eBrochure/eBrochure_Forms/Wildlife_BandhavgarhTigerReserve.aspx`,
  pench:        `${MP_PORTAL}/eBrochure/eBrochure_Forms/Wildlife_PenchTigerReserve.aspx`,
  satpura:      `${MP_PORTAL}/eBrochure/eBrochure_Forms/Wildlife_SatpuraTigerReserve.aspx`,
  panna:        `${MP_PORTAL}/eBrochure/eBrochure_Forms/Wildlife_PannaTigerReserve.aspx`,
  "sanjay-dubri": `${MP_PORTAL}/eBrochure/eBrochure_Forms/Wildlife_SanjayDubriTigerReserve.aspx`,
  nauradehi:    MP_PORTAL,
  "gandhi-sagar": MP_PORTAL,
  "van-vihar":  MP_PORTAL,
  kuno:         MP_PORTAL,
};

// Inject bookingUrl per park (language-safe)
mpParks.forEach((p) => {
  const direct = BOOKING_URL[p.id];
  const url = direct || MP_PORTAL;
  if (!p.bookingUrl) p.bookingUrl = { en: url, hi: url };
});

export default mpParks;