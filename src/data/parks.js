// Complete MP parks dataset (EN + HI) with imagePos and deep details

const mpParks = [
  /* 1) Kanha */
  {
    id: "kanha",
    image: "/images/parks/kanha.jpg",
    imagePos: "50% 35%",
    name: { en: "Kanha National Park", hi: "कान्हा राष्ट्रीय उद्यान" },
    district: { en: "Mandla / Balaghat", hi: "मंडला / बालाघाट" },
    description: {
      en: "India’s best-managed tiger reserve; sal forests and wide meadows supporting the world’s only hard-ground barasingha population. Excellent tracks and reliable sightings.",
      hi: "भारत के सबसे बेहतर प्रबंधित टाइगर रिज़र्व में से एक—साल के जंगल व चौड़े मैदान; दुनिया की एकमात्र कठोर-भूमि बारासिंगा आबादी का सहारा। उत्कृष्ट ट्रैक और भरोसेमंद दर्शन।",
    },
    bestTime: { en: "Oct–Jun (Feb–May peak)", hi: "अक्टूबर–जून (फरवरी–मई सर्वश्रेष्ठ)" },
    safariTypes: { en: ["Jeep", "Canter", "Night (limited)"], hi: ["जीप", "कैंटर", "रात्रि (सीमित)"] },
    zones: { en: ["Kisli", "Mukki", "Kanha", "Sarhi"], hi: ["किसली", "मुकी", "कान्हा", "सरही"] },
    entryGates: { en: ["Khatia (Kisli)", "Mukki", "Sarhi"], hi: ["खटिया (किसली)", "मुकी", "सरही"] },
    timings: {
      en: { summer: "≈ 5:30–10:30 & 3:30–6:30", winter: "≈ 6:30–11:00 & 2:30–5:30" },
      hi: { summer: "≈ 5:30–10:30 व 3:30–6:30", winter: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Barasingha", "Leopard", "Sloth bear", "Wild dog", "Gaur"],
      hi: ["बाघ", "बारासिंगा", "तेंदुआ", "भालू", "जंगली कुत्ता", "गौर"],
    },
    howToReach: {
      en: "Rail: Gondia/Jabalpur. Air: Jabalpur (≈160 km), Nagpur (≈260 km). Roads via Mandla/Balaghat.",
      hi: "रेल: गोंदिया/जबलपुर। हवाई अड्डा: जबलपुर (≈160 किमी), नागपुर (≈260 किमी)। सड़क मार्ग: मंडला/बालाघाट।",
    },
    tips: {
      en: ["Book popular gates (Mukki/Kisli) early", "Dry months give longer sightlines"],
      hi: ["लोकप्रिय गेट (मुकी/किसली) पहले से बुक करें", "सूखे महीनों में दृश्यता लंबी होती है"],
    },
    fee: {
      en: "Jeep: ~₹1500 vehicle + permit ₹2500–3000 per ride (guide/vehicle separate).",
      hi: "जीप: ~₹1500 वाहन + परमिट ₹2500–3000 प्रति सफारी (गाइड/वाहन अलग)।",
    },
    bookingUrl: { en: "https://forest.mponline.gov.in", hi: "https://forest.mponline.gov.in" },
  },

  /* 2) Bandhavgarh */
  {
    id: "bandhavgarh",
    image: "/images/parks/bandhavgarh.jpg",
    imagePos: "50% 25%",
    name: { en: "Bandhavgarh National Park", hi: "बांधवगढ़ राष्ट्रीय उद्यान" },
    district: { en: "Umaria", hi: "उमरिया" },
    description: {
      en: "High tiger density with sal–bamboo forests and the ancient Bandhavgarh Fort. Tala, Magadhi and Khitauli are the core tourism zones.",
      hi: "उच्च बाघ घनत्व; साल–बाँस के जंगल और प्राचीन बांधवगढ़ किला। ताला, मगधी और खितौली प्रमुख टूरिज्म ज़ोन हैं।",
    },
    bestTime: { en: "Oct–Jun (Feb–May best)", hi: "अक्टूबर–जून (फरवरी–मई श्रेष्ठ)" },
    safariTypes: { en: ["Jeep", "Canter"], hi: ["जीप", "कैंटर"] },
    zones: { en: ["Tala", "Magadhi", "Khitauli"], hi: ["ताला", "मगधी", "खितौली"] },
    entryGates: { en: ["Tala", "Magadhi", "Khitauli"], hi: ["ताला", "मगधी", "खितौली"] },
    timings: {
      en: { summer: "≈ 5:30–10:00 & 3:30–6:30", winter: "≈ 6:30–11:00 & 2:30–5:30" },
      hi: { summer: "≈ 5:30–10:00 व 3:30–6:30", winter: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Sloth bear", "Gaur", "Sambar", "Chital"],
      hi: ["बाघ", "तेंदुआ", "भालू", "गौर", "सांभर", "चितल"],
    },
    howToReach: {
      en: "Rail: Umaria/Katni. Air: Jabalpur (≈170 km).",
      hi: "रेल: उमरिया/कटनी। हवाई अड्डा: जबलपुर (≈170 किमी)।",
    },
    tips: {
      en: ["Tala fills early — plan well ahead", "Evening light is superb for photography"],
      hi: ["ताला जल्दी भरता है—पहले से योजना बनाएं", "शाम की रोशनी फोटोग्राफी के लिए बेहतरीन"],
    },
    fee: {
      en: "Jeep: ~₹1500 vehicle + permit fee; guide/vehicle separate.",
      hi: "जीप: ~₹1500 वाहन + परमिट शुल्क; गाइड/वाहन अलग।",
    },
    bookingUrl: { en: "https://forest.mponline.gov.in", hi: "https://forest.mponline.gov.in" },
  },

  /* 3) Pench */
  {
    id: "pench",
    image: "/images/parks/pench.jpg",
    imagePos: "50% 60%",
    name: { en: "Pench National Park", hi: "पेंच राष्ट्रीय उद्यान" },
    district: { en: "Seoni / Chhindwara", hi: "सीनी / छिंदवाड़ा" },
    description: {
      en: "Inspiration for ‘The Jungle Book’. Teak & mixed forests with multiple access gates and photogenic roads.",
      hi: "‘जंगल बुक’ की प्रेरणा। सागौन व मिश्रित वन, कई प्रवेश द्वार और फोटोजेनिक सड़कें।",
    },
    bestTime: { en: "Oct–Jun", hi: "अक्टूबर–जून" },
    safariTypes: { en: ["Jeep", "Canter", "Boat (select zones)"], hi: ["जीप", "कैंटर", "नौका (कुछ ज़ोन)"] },
    zones: { en: ["Turia", "Karmajhiri", "Jhamtara", "Rukhad"], hi: ["तुरिया", "कर्माझीरी", "झमटारा", "रुखड़"] },
    entryGates: { en: ["Turia", "Karmajhiri", "Jhamtara"], hi: ["तुरिया", "कर्माझीरी", "झमटारा"] },
    timings: {
      en: { summer: "≈ 5:30–10:30 & 3:30–6:30", winter: "≈ 6:30–11:00 & 2:30–5:30" },
      hi: { summer: "≈ 5:30–10:30 व 3:30–6:30", winter: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: { en: ["Tiger", "Leopard", "Wild dog", "Gaur"], hi: ["बाघ", "तेंदुआ", "जंगली कुत्ता", "गौर"] },
    howToReach: {
      en: "Rail: Nagpur/Seoni. Air: Nagpur (≈100 km to Turia).",
      hi: "रेल: नागपुर/सीनी। हवाई अड्डा: नागपुर (≈100 किमी, तुरिया)।",
    },
    tips: { en: ["Turia gate is most popular", "Good chance to see wild dogs"], hi: ["तुरिया गेट सबसे लोकप्रिय", "जंगली कुत्तों के दर्शन की अच्छी संभावना"] },
    fee: { en: "Jeep: ~₹1500 + permit fee", hi: "जीप: ~₹1500 + परमिट शुल्क" },
    bookingUrl: { en: "https://forest.mponline.gov.in", hi: "https://forest.mponline.gov.in" },
  },

  /* 4) Satpura */
  {
    id: "satpura",
    image: "/images/parks/satpura.jpg",
    imagePos: "50% 30%",
    name: { en: "Satpura National Park", hi: "सतपुड़ा राष्ट्रीय उद्यान" },
    district: { en: "Narmadapuram (Hoshangabad)", hi: "नर्मदापुरम (होशंगाबाद)" },
    description: {
      en: "Large, rugged landscape with diverse experiences — jeep, canoe/boat, walking and night patrols in buffer.",
      hi: "विस्तृत व rugged परिदृश्य; विविध अनुभव—जीप, नाव/कैनो, वॉकिंग व बफर में नाइट पैट्रोल।",
    },
    bestTime: { en: "Nov–Apr", hi: "नवंबर–अप्रैल" },
    safariTypes: { en: ["Jeep", "Boat/Canoe", "Walking (select)"], hi: ["जीप", "नाव/कैनो", "वॉकिंग (चयनित)"] },
    zones: { en: ["Madhai", "Pachmarhi (buffer)", "Panaarpani"], hi: ["मढ़ई", "पचमढ़ी (बफर)", "पनारपानी"] },
    entryGates: { en: ["Madhai"], hi: ["मढ़ई"] },
    timings: {
      en: { summer: "≈ 5:30–10:00 & 3:30–6:30", winter: "≈ 6:30–11:00 & 2:30–5:30" },
      hi: { summer: "≈ 5:30–10:00 व 3:30–6:30", winter: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: { en: ["Leopard", "Sloth bear", "Wild dog", "Gaur"], hi: ["तेंदुआ", "भालू", "जंगली कुत्ता", "गौर"] },
    howToReach: {
      en: "Rail: Itarsi/Hoshangabad. Air: Bhopal (≈140 km).",
      hi: "रेल: इटारसी/होशंगाबाद। हवाई अड्डा: भोपाल (≈140 किमी)।",
    },
    tips: { en: ["Do a boat + walking combo from Madhai"], hi: ["मढ़ई से नाव + वॉकिंग का कॉम्बो ज़रूर करें"] },
    fee: { en: "Jeep/Boat permits via MPOnline; walking with guiding fee.", hi: "जीप/नाव परमिट MPOnline से; वॉकिंग में गाइडिंग शुल्क।" },
    bookingUrl: { en: "https://forest.mponline.gov.in", hi: "https://forest.mponline.gov.in" },
  },

  /* 5) Panna */
  {
    id: "panna",
    image: "/images/parks/panna.jpg",
    imagePos: "50% 40%",
    name: { en: "Panna National Park", hi: "पन्ना राष्ट्रीय उद्यान" },
    district: { en: "Panna / Chhatarpur", hi: "पन्ना / छतरपुर" },
    description: {
      en: "Ken river gorge, teak and mixed forests; scenic boating in the Ken with gharials and birds.",
      hi: "केन नदी की घाटी, सागौन व मिश्रित वन; केन में नौकायन, घड़ियाल व पक्षियों का सुंदर नज़ारा।",
    },
    bestTime: { en: "Nov–Mar (Feb–May for cats)", hi: "नवंबर–मार्च (बिल्ली प्रजाति हेतु फ़रवरी–मई)" },
    safariTypes: { en: ["Jeep", "Boat"], hi: ["जीप", "नौका"] },
    zones: { en: ["Madla", "Hinauta"], hi: ["मदला", "हिनौता"] },
    entryGates: { en: ["Madla", "Hinauta"], hi: ["मदला", "हिनौता"] },
    timings: {
      en: { summer: "≈ 5:30–10:00 & 3:30–6:30", winter: "≈ 6:30–11:00 & 2:30–5:30" },
      hi: { summer: "≈ 5:30–10:00 व 3:30–6:30", winter: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: { en: ["Tiger", "Leopard", "Gharial", "Vultures"], hi: ["बाघ", "तेंदुआ", "घड़ियाल", "गिद्ध"] },
    howToReach: {
      en: "Rail: Khajuraho/Satna. Air: Khajuraho (≈30 km to Madla).",
      hi: "रेल: खजुराहो/सतना। हवाई अड्डा: खजुराहो (≈30 किमी, मदला)।",
    },
    tips: { en: ["Do sunrise boat ride on Ken"], hi: ["केन पर सूर्योदय की नाव सवारी करें"] },
    fee: { en: "Jeep/Boat permits via MPOnline.", hi: "जीप/नौका परमिट MPOnline से।" },
    bookingUrl: { en: "https://forest.mponline.gov.in", hi: "https://forest.mponline.gov.in" },
  },

  /* 6) Sanjay–Dubri */
  {
    id: "sanjay-dubri",
    image: "/images/parks/sanjay-dubri.jpg",
    imagePos: "50% 35%",
    name: { en: "Sanjay–Dubri Tiger Reserve", hi: "संजय–डुबरी टाइगर रिज़र्व" },
    district: { en: "Sidhi / Singrauli", hi: "सीधी / सिंगरौली" },
    description: {
      en: "Undulating sal forests with good herbivore base; less crowded and very scenic drives.",
      hi: "लहरदार साल वन, भरपूर शाकाहारी वन्यजीव; भीड़ कम और बेहद सुंदर ड्राइव।",
    },
    bestTime: { en: "Nov–Apr", hi: "नवंबर–अप्रैल" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    zones: { en: ["Dubri", "Bhitri"], hi: ["डुबरी", "भीतरी"] },
    entryGates: { en: ["Dubri"], hi: ["डुबरी"] },
    timings: {
      en: { summer: "≈ 5:30–10:00 & 3:30–6:30", winter: "≈ 6:30–11:00 & 2:30–5:30" },
      hi: { summer: "≈ 5:30–10:00 व 3:30–6:30", winter: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: { en: ["Tiger", "Leopard", "Sloth bear", "Gaur", "Four-horned antelope"], hi: ["बाघ", "तेंदुआ", "भालू", "गौर", "चौसिंगा"] },
    howToReach: {
      en: "Rail: Rewa/Sidhi/Singrauli. Air: Prayagraj/Jabalpur (farther).",
      hi: "रेल: रीवा/सीधी/सिंगरौली। हवाई अड्डा: प्रयागराज/जबलपुर (दूर)।",
    },
    tips: { en: ["Expect pristine forests and fewer vehicles"], hi: ["कम वाहन और कच्चे, सुंदर जंगल का अनुभव"] },
    fee: { en: "Jeep permits via MPOnline.", hi: "जीप परमिट MPOnline से।" },
    bookingUrl: { en: "https://forest.mponline.gov.in", hi: "https://forest.mponline.gov.in" },
  },

  /* 7) Nauradehi */
  {
    id: "nauradehi",
    image: "/images/parks/nauradehi.jpg",
    imagePos: "50% 45%",
    name: { en: "Nauradehi Wildlife Sanctuary", hi: "नौरादेही अभयारण्य" },
    district: { en: "Sagar / Damoh", hi: "सागर / दमोह" },
    description: {
      en: "Large mosaic of dry deciduous forests and grasslands; good for herbivores & birds.",
      hi: "शुष्क पर्णपाती वन व घासभूमियों का विशाल मिश्रण; शाकाहारी व पक्षियों के लिए बढ़िया।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    zones: { en: ["Ghogra", "Singpur"], hi: ["घोगरा", "सिंगपुर"] },
    entryGates: { en: ["Ghogra", "Singpur"], hi: ["घोगरा", "सिंगपुर"] },
    timings: {
      en: { summer: "≈ 5:45–10:00 & 3:30–6:15", winter: "≈ 6:45–11:00 & 2:15–5:30" },
      hi: { summer: "≈ 5:45–10:00 व 3:30–6:15", winter: "≈ 6:45–11:00 व 2:15–5:30" },
    },
    wildlife: { en: ["Chital", "Nilgai", "Blackbuck (reintro area)", "Jackal", "Birds"], hi: ["चितल", "नीलगाय", "काला हिरण (पुनर्प्रस्थापना क्षेत्र)", "सियार", "पक्षी"] },
    howToReach: {
      en: "Rail: Sagar/Damoh. Air: Jabalpur/Bhopal (farther).",
      hi: "रेल: सागर/दमोह। हवाई अड्डा: जबलपुर/भोपाल (दूर)।",
    },
    tips: { en: ["Birding is excellent in winters"], hi: ["सर्दियों में बर्डिंग बेहतरीन रहती है"] },
    fee: { en: "Jeep permits via MPOnline.", hi: "जीप परमिट MPOnline से।" },
    bookingUrl: { en: "https://forest.mponline.gov.in", hi: "https://forest.mponline.gov.in" },
  },

  /* 8) Gandhi Sagar */
  {
    id: "gandhi-sagar",
    image: "/images/parks/gandhi-sagar.jpg",
    imagePos: "50% 40%",
    name: { en: "Gandhi Sagar Wildlife Sanctuary", hi: "गांधीसागर अभयारण्य" },
    district: { en: "Mandsaur / Neemuch", hi: "मंदसौर / नीमच" },
    description: {
      en: "Chambal riverine landscape with ravines, grasslands and hills around the Gandhi Sagar dam backwaters.",
      hi: "चंबल नदी तटीय भूभाग—रवाइन, घासभूमि और बांध बैकवॉटर के आसपास की पहाड़ियां।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep", "Boat (backwaters)"], hi: ["जीप", "नौका (बैकवॉटर)"] },
    zones: { en: ["Bhainsrorgarh buffer belts"], hi: ["भैंसरोगढ़ बफर बेल्ट"] },
    entryGates: { en: ["Dhola-Odwara / Local forest gates"], hi: ["ढोला-ओदवारा / स्थानीय वन द्वार"] },
    timings: {
      en: { summer: "≈ 6:00–10:00 & 3:30–6:30", winter: "≈ 6:45–11:00 & 2:30–5:30" },
      hi: { summer: "≈ 6:00–10:00 व 3:30–6:30", winter: "≈ 6:45–11:00 व 2:30–5:30" },
    },
    wildlife: { en: ["Chinkara", "Nilgai", "Jackal", "Water birds"], hi: ["चिंकाड़ा", "नीलगाय", "सियार", "जल-पक्षी"] },
    howToReach: {
      en: "Rail: Mandsaur/Neemuch. Air: Udaipur/Indore (farther).",
      hi: "रेल: मंदसौर/नीमच। हवाई अड्डा: उदयपुर/इंदौर (दूर)।",
    },
    tips: { en: ["Combine with Bhainsrorgarh/Bundi trip"], hi: ["भैंसरोगढ़/बूंदी यात्रा के साथ जोड़ें"] },
    fee: { en: "Permits via MPOnline (where applicable).", hi: "परमिट MPOnline से (जहां लागू)।" },
    bookingUrl: { en: "https://forest.mponline.gov.in", hi: "https://forest.mponline.gov.in" },
  },

  /* 9) Van Vihar (Bhopal) */
  {
    id: "van-vihar",
    image: "/images/parks/van-vihar.jpg",
    imagePos: "50% 35%",
    name: { en: "Van Vihar National Park (Bhopal)", hi: "वन विहार राष्ट्रीय उद्यान (भोपाल)" },
    district: { en: "Bhopal", hi: "भोपाल" },
    description: {
      en: "Urban national park along Upper Lake; good for easy birding, cycling & interpretation centre.",
      hi: "अपर लेक के किनारे शहरी राष्ट्रीय उद्यान; आसान बर्डिंग, साइक्लिंग और इंटर्प्रिटेशन सेंटर।",
    },
    bestTime: { en: "Oct–Mar (mornings/evenings)", hi: "अक्टूबर–मार्च (सुबह/शाम)" },
    safariTypes: { en: ["Battery buggy", "Cycle (inside)"], hi: ["बैटरी बग्गी", "साइकिल (अंदर)"] },
    zones: { en: ["Lakefront belts"], hi: ["लेकफ्रंट बेल्ट"] },
    entryGates: { en: ["VIP Road gate"], hi: ["वीआईपी रोड गेट"] },
    timings: {
      en: { summer: "≈ 6:30–6:30 (slots vary)", winter: "≈ 7:00–6:00 (slots vary)" },
      hi: { summer: "≈ 6:30–6:30 (स्लॉट परिवर्तन)", winter: "≈ 7:00–6:00 (स्लॉट परिवर्तन)" },
    },
    wildlife: { en: ["Water birds", "Herons", "Storks", "Deer", "Blackbuck"], hi: ["जल-पक्षी", "बगुले", "स्टोर्क", "हिरण", "काला हिरण"] },
    howToReach: {
      en: "Rail/Air: Bhopal city. Minutes from Upper Lake.",
      hi: "रेल/हवाई: भोपाल शहर। अपर लेक से कुछ ही मिनट।",
    },
    tips: { en: ["Best at sunrise for birds"], hi: ["बर्डिंग हेतु सूर्योदय सर्वश्रेष्ठ"] },
    fee: { en: "Entry + buggy/cycle tickets at gate / MPOnline (where enabled).", hi: "प्रवेश + बग्गी/साइकिल टिकट गेट/MPOnline पर।" },
    bookingUrl: { en: "https://forest.mponline.gov.in", hi: "https://forest.mponline.gov.in" },
  },

  /* 10) Kuno */
  {
    id: "kuno",
    image: "/images/parks/kuno.jpg",
    imagePos: "50% 30%",
    name: { en: "Kuno National Park", hi: "कूनो राष्ट्रीय उद्यान" },
    district: { en: "Sheopur", hi: "श्योपुर" },
    description: {
      en: "Riverine forests and plateaus; known for the cheetah reintroduction project and diverse grasslands.",
      hi: "नदीय वन व पठार; चीता पुनर्प्रस्थापना परियोजना और विविध घासभूमियों के लिए प्रसिद्ध।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    zones: { en: ["Ahera", "Tiktoli (buffer)"], hi: ["अहेरा", "टिकटोली (बफर)"] },
    entryGates: { en: ["Ahera gate"], hi: ["अहेरा गेट"] },
    timings: {
      en: { summer: "≈ 5:45–10:00 & 3:30–6:15", winter: "≈ 6:45–11:00 & 2:15–5:30" },
      hi: { summer: "≈ 5:45–10:00 व 3:30–6:15", winter: "≈ 6:45–11:00 व 2:15–5:30" },
    },
    wildlife: { en: ["Cheetah (project area)", "Leopard", "Wolf", "Hyena", "Chinkara"], hi: ["चीता (परियोजना क्षेत्र)", "तेंदुआ", "भेड़िया", "लकड़बग्घा", "चिंकाड़ा"] },
    howToReach: {
      en: "Rail: Gwalior/Sheopur Kalan. Air: Gwalior (≈150 km).",
      hi: "रेल: ग्वालियर/श्योपुर कलां। हवाई अड्डा: ग्वालियर (≈150 किमी)।",
    },
    tips: { en: ["Permits restricted—check MPOnline frequently"], hi: ["परमिट सीमित—MPOnline बार-बार जाँचें"] },
    fee: { en: "Jeep permits via MPOnline; limited slots.", hi: "जीप परमिट MPOnline से; स्लॉट सीमित।" },
    bookingUrl: { en: "https://forest.mponline.gov.in", hi: "https://forest.mponline.gov.in" },
  },
];

export default mpParks;