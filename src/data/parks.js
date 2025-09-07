// src/data/parks.js
// MP National Parks / Tiger Reserves — EN + HI
// List fields (required for cards) + detail fields (optional for detail page)

const mpParks = [
  {
    id: "kanha",
    name: { en: "Kanha National Park", hi: "कान्हा राष्ट्रीय उद्यान" },
    district: { en: "Mandla / Balaghat", hi: "मंडला / बालाघाट" },
    description: {
      en: "India’s best-managed tiger reserve with sal forests opening into wide meadows that support the world’s only hard-ground barasingha population. Excellent tracks and reliable sightings.",
      hi: "भारत के सबसे बेहतर प्रबंधित बाघ अभयारण्यों में से एक—साल के जंगल चौड़े मैदानों में खुलते हैं जो विश्व की एकमात्र कठोर-भूमि बारासिंगा आबादी को सहारा देते हैं। शानदार ट्रैक और भरोसेमंद दृष्टिगोचर।",
    },
    bestTime: { en: "Oct–Jun (peak: Feb–May)", hi: "अक्टूबर–जून (सर्वश्रेष्ठ: फरवरी–मई)" },
    safariTypes: { en: ["Jeep", "Canter", "Night (limited)"], hi: ["जीप", "कैंटर", "रात्रि (सीमित)"] },
    image: "/images/parks/kanha.jpg",

    zones: { en: ["Kisli", "Mukki", "Kanha", "Sarhi"], hi: ["किसली", "मुकी", "कान्हा", "सरही"] },
    entryGates: {
      en: ["Khatia (Kisli)", "Mukki", "Kanha Gate (Mocha)", "Sarhi"],
      hi: ["खटिया (किसली)", "मुकी", "कान्हा गेट (मोचा)", "सरही"],
    },
    timings: {
      en: { summer: "≈ 5:30–10:30 & 3:30–6:30", winter: "≈ 6:30–11:00 & 2:30–5:30" },
      hi: { summer: "≈ 5:30–10:30 व 3:30–6:30", winter: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Barasingha", "Leopard", "Sloth bear", "Wild dog", "Gaur"],
      hi: ["बाघ", "बारासिंगा", "तेंदुआ", "भालू", "जंगली कुत्ता", "गौर"],
    },
    reach: {
      en: "Rail: Gondia/Jabalpur. Air: Jabalpur (~160 km), Nagpur (~260 km). Roads via Mandla/Balaghat.",
      hi: "रेल: गोंदिया/जबलपुर। एयर: जबलपुर (~160 किमी), नागपुर (~260 किमी)। सड़क: मंडला/बालाघाट से।",
    },
    tips: {
      en: ["Book safaris early (Mukki/Kisli)", "Dry months give longer sightlines"],
      hi: ["सफारी पहले से बुक करें (मुकी/किसली)", "सूखे महीनों में दृश्यता लंबी होती है"],
    },
    fee: {
      en: "Dynamic online permit; separate guide/vehicle at gate. Night safari on buffer routes.",
      hi: "डायनेमिक ऑनलाइन परमिट; गाइड/वाहन अलग से गेट पर। नाइट सफारी सीमित बफर रूट्स पर।",
    },
    booking: {
      permitUrl: "https://forest.mponline.gov.in/",
      seat: {
        en: ["Full Jeep (6 seats)", "Single seat in Canter", "Night safari (buffer)"],
        hi: ["फुल जीप (6 सीट)", "कैंटर में सिंगल सीट", "नाइट सफारी (बफर)"],
      },
      notes: {
        en: "Pick zone/gate while booking. Keep original ID for entry.",
        hi: "बुकिंग के समय ज़ोन/गेट चुनें। प्रवेश पर मूल पहचान पत्र साथ रखें।",
      },
    },
  },

  {
    id: "bandhavgarh",
    name: { en: "Bandhavgarh National Park", hi: "बांधवगढ़ राष्ट्रीय उद्यान" },
    district: { en: "Umaria", hi: "उमरिया" },
    description: {
      en: "High tiger density; mosaic of sal and bamboo around the ancient Bandhavgarh Fort.",
      hi: "उच्च बाघ घनत्व; प्राचीन बांधवगढ़ किले के आसपास साल-बाँस के घने वन।",
    },
    bestTime: { en: "Oct–Jun (Feb–May peak)", hi: "अक्टूबर–जून (फरवरी–मई सर्वोत्तम)" },
    safariTypes: { en: ["Jeep", "Canter"], hi: ["जीप", "कैंटर"] },
    image: "/images/parks/bandhavgarh.jpg",

    zones: { en: ["Tala", "Magadhi", "Khitauli"], hi: ["ताला", "मगध", "खितौली"] },
    entryGates: {
      en: ["Tala Gate", "Magadhi Gate", "Khitauli Gate"],
      hi: ["ताला गेट", "मगधि गेट", "खितौली गेट"],
    },
    timings: {
      en: { summer: "≈ 5:30–10:00 & 3:30–6:30", winter: "≈ 6:30–11:00 & 2:30–5:30" },
      hi: { summer: "≈ 5:30–10:00 व 3:30–6:30", winter: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Sloth bear", "Indian gaur", "Sambar"],
      hi: ["बाघ", "तेंदुआ", "भालू", "गौर", "सांभर"],
    },
    reach: {
      en: "Rail: Umaria/Katni. Air: Jabalpur (~165 km).",
      hi: "रेल: उमरिया/कटनी। एयर: जबलपुर (~165 किमी)।",
    },
    tips: {
      en: ["Tala gets busy—book well in advance", "Evening light is beautiful on hill meadows"],
      hi: ["ताला भीड़भाड़ वाला—पहले से बुक करें", "पहाड़ी घासभूमि पर शाम की रोशनी खूबसूरत"],
    },
    fee: {
      en: "Online permit via MPOnline; guide/vehicle separate.",
      hi: "MPOnline से परमिट; गाइड/वाहन अलग से।",
    },
    booking: {
      permitUrl: "https://forest.mponline.gov.in/",
      seat: {
        en: ["Full Jeep (6)", "Canter seat (limited)"],
        hi: ["फुल जीप (6)", "कैंटर सीट (सीमित)"],
      },
      notes: {
        en: "Popular zones sell out—check release times.",
        hi: "लोकप्रिय ज़ोन जल्दी भरते हैं—रिलीज़ टाइम पर नजर रखें।",
      },
    },
  },

  {
    id: "pench",
    name: { en: "Pench National Park", hi: "पेंच राष्ट्रीय उद्यान" },
    district: { en: "Seoni / Chhindwara", hi: "सिवनी / छिंदवाड़ा" },
    description: {
      en: "Inspiration for ‘The Jungle Book’; teak & mixed forests with multiple access gates and photogenic roads.",
      hi: "‘जंगल बुक’ की प्रेरणा; सागौन व मिश्रित वन, कई प्रवेश द्वार और फोटोजेनिक सड़कें।",
    },
    bestTime: { en: "Oct–Jun", hi: "अक्टूबर–जून" },
    safariTypes: { en: ["Jeep", "Canter", "Boat (select zones)"], hi: ["जीप", "कैंटर", "नौका (कुछ ज़ोन)"] },
    image: "/images/parks/pench.jpg",

    zones: { en: ["Turia", "Karmajhiri", "Jamun Nala (buffer)"], hi: ["तुरिया", "करमझीरी", "जामुन नाला (बफर)"] },
    entryGates: {
      en: ["Turia", "Karmajhiri", "Rukhad (buffer)"],
      hi: ["तुरिया", "करमझीरी", "रुखाड़ (बफर)"],
    },
    timings: {
      en: { summer: "≈ 5:30–10:30 & 3:30–6:30", winter: "≈ 6:30–11:00 & 2:30–5:30" },
      hi: { summer: "≈ 5:30–10:30 व 3:30–6:30", winter: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Wild dog", "Gaur", "Deer"],
      hi: ["बाघ", "तेंदुआ", "जंगली कुत्ता", "गौर", "हिरण"],
    },
    reach: {
      en: "Rail: Seoni/Nagpur. Air: Nagpur (~90 km to Turia).",
      hi: "रेल: सिवनी/नागपुर। एयर: नागपुर (~90 किमी, तुरिया)।",
    },
    tips: {
      en: ["Turia has good stay options", "Dust can be high—carry lens cloths"],
      hi: ["तुरिया में ठहरने के विकल्प अच्छे हैं", "धूल अधिक—लेंस कपड़ा रखें"],
    },
    fee: {
      en: "Online permits; boat safaris seasonal and limited.",
      hi: "ऑनलाइन परमिट; नाव सफारी मौसमी व सीमित।",
    },
    booking: {
      permitUrl: "https://forest.mponline.gov.in/",
      seat: {
        en: ["Full Jeep", "Canter seat"],
        hi: ["फुल जीप", "कैंटर सीट"],
      },
      notes: {
        en: "Pick Maharashtra MP side carefully for resort location.",
        hi: "रिसॉर्ट लोकेशन के अनुसार एमपी/महाराष्ट्र साइड ध्यान से चुनें।",
      },
    },
  },

  {
    id: "satpura",
    name: { en: "Satpura National Park", hi: "सतपुड़ा राष्ट्रीय उद्यान" },
    district: { en: "Narmadapuram (Hoshangabad)", hi: "नर्मदापुरम (होशंगाबाद)" },
    description: {
      en: "Rugged highlands with unique options—boat, kayak and walking safaris (guided) alongside jeep.",
      hi: "ऊबड़-खाबड़ उच्चभूमि; अनोखे विकल्प—नौका, कायक और गाइडेड वॉकिंग सफारी (जीप के साथ)।",
    },
    bestTime: { en: "Oct–Apr", hi: "अक्टूबर–अप्रैल" },
    safariTypes: { en: ["Jeep", "Boat", "Walking"], hi: ["जीप", "नौका", "पैदल"] },
    image: "/images/parks/satpura.jpg",

    zones: { en: ["Madai", "Panaarpani (buffer)", "Churna"], hi: ["मड़ई", "पनारपानी (बफर)", "चुरना"] },
    entryGates: {
      en: ["Madai Gate (Denwa backwaters)"],
      hi: ["मड़ई गेट (देनवा बैकवॉटर)"],
    },
    timings: {
      en: { summer: "≈ 6:00–10:30 & 3:30–6:30", winter: "≈ 7:00–11:00 & 2:30–5:30" },
      hi: { summer: "≈ 6:00–10:30 व 3:30–6:30", winter: "≈ 7:00–11:00 व 2:30–5:30" },
    },
    wildlife: {
      en: ["Leopard", "Sloth bear", "Gaur", "Crocodiles", "Birdlife"],
      hi: ["तेंदुआ", "भालू", "गौर", "मगर", "पक्षी जीवन"],
    },
    reach: {
      en: "Rail: Itarsi/Pipariya. Air: Bhopal (~140 km).",
      hi: "रेल: इटारसी/पिपरिया। एयर: भोपाल (~140 किमी)।",
    },
    tips: {
      en: ["Walking safaris by permit only", "Boating depends on water level"],
      hi: ["वॉकिंग सफारी विशेष परमिट से", "नौका सफारी जलस्तर पर निर्भर"],
    },
    fee: {
      en: "Different fees for walking/boat; guide mandatory.",
      hi: "वॉक/नौका के शुल्क अलग; गाइड अनिवार्य।",
    },
    booking: {
      permitUrl: "https://forest.mponline.gov.in/",
      seat: {
        en: ["Full Jeep", "Boat shared seat", "Walking group (limited)"],
        hi: ["फुल जीप", "नौका साझा सीट", "वॉकिंग समूह (सीमित)"],
      },
      notes: {
        en: "Walking/boat slots are very limited—plan ahead.",
        hi: "वॉक/नौका स्लॉट बहुत सीमित—पहले से योजना बनाएं।",
      },
    },
  },

  {
    id: "panna",
    name: { en: "Panna National Park", hi: "पन्ना राष्ट्रीय उद्यान" },
    district: { en: "Panna / Chhatarpur", hi: "पन्ना / छतरपुर" },
    description: {
      en: "Ken river & falls with scenic plateaus; gharial sanctuary nearby; good mix of wildlife and views.",
      hi: "केन नदी व झरने, सुंदर पठार; पास में घड़ियाल अभयारण्य; वन्यजीव व दृश्यों का अच्छा मिश्रण।",
    },
    bestTime: { en: "Oct–Apr", hi: "अक्टूबर–अप्रैल" },
    safariTypes: { en: ["Jeep", "Boat"], hi: ["जीप", "नौका"] },
    image: "/images/parks/panna.jpg",

    zones: { en: ["Madla", "Hinauta", "Akola (buffer)"], hi: ["मदला", "हिनौता", "अकोला (बफर)"] },
    entryGates: {
      en: ["Madla", "Hinauta"],
      hi: ["मदला", "हिनौता"],
    },
    timings: {
      en: { summer: "≈ 5:30–10:00 & 3:30–6:30", winter: "≈ 6:30–11:00 & 2:30–5:30" },
      hi: { summer: "≈ 5:30–10:00 व 3:30–6:30", winter: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Chinkara", "Crocodiles", "Gharial (nearby)"],
      hi: ["बाघ", "तेंदुआ", "चिंकारा", "मगर", "घड़ियाल (पास)"],
    },
    reach: {
      en: "Rail: Khajuraho/Satna. Air: Khajuraho (~25 km).",
      hi: "रेल: खजुराहो/सतना। एयर: खजुराहो (~25 किमी)।",
    },
    tips: {
      en: ["Combine with Khajuraho temples", "Boat safari is scenic near Ken Ghats"],
      hi: ["खजुराहो मंदिरों के साथ जोड़ें", "केन घाटों पर नाव सफारी सुंदर"],
    },
    fee: {
      en: "Boat rides have separate tickets; limited slots.",
      hi: "नाव सफारी के टिकट अलग; स्लॉट सीमित।",
    },
    booking: {
      permitUrl: "https://forest.mponline.gov.in/",
      seat: { en: ["Full Jeep", "Boat seat"], hi: ["फुल जीप", "नौका सीट"] },
      notes: {
        en: "Choose Madla vs Hinauta based on stay side.",
        hi: "ठहरने की तरफ के अनुसार मदला/हिनौता चुनें।",
      },
    },
  },

  {
    id: "kuno",
    name: { en: "Kuno National Park", hi: "कूनो राष्ट्रीय उद्यान" },
    district: { en: "Sheopur / Morena", hi: "श्योपुर / मुरैना" },
    description: {
      en: "Cheetah reintroduction site with open woodland & grassland; sightings vary by season & area.",
      hi: "चीता पुनर्स्थापन स्थल—खुले वन व घासभूमि; दर्शन मौसम/क्षेत्र पर निर्भर।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    image: "/images/parks/kuno.jpg",

    zones: { en: ["Ahera", "Palpur", "Jhirna (buffer)"], hi: ["अहरेरा", "पालपुर", "झिरना (बफर)"] },
    entryGates: { en: ["Ahera/Palpur"], hi: ["अहरेरा/पालपुर"] },
    timings: {
      en: { summer: "≈ 5:45–10:00 & 4:00–6:30", winter: "≈ 6:30–11:00 & 2:30–5:30" },
      hi: { summer: "≈ 5:45–10:00 व 4:00–6:30", winter: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: {
      en: ["Cheetah (enclosure/soft release areas)", "Leopard", "Hyena", "Antelopes"],
      hi: ["चीता (एनक्लोज़र/सॉफ्ट रिलीज़)", "तेंदुआ", "लकड़बग्घा", "एंटीलोप्स"],
    },
    reach: {
      en: "Rail: Gwalior/Shivpuri. Air: Gwalior (~150 km).",
      hi: "रेल: ग्वालियर/शिवपुरी। एयर: ग्वालियर (~150 किमी)।",
    },
    tips: {
      en: ["Cheetah viewing strictly regulated—follow latest advisories"],
      hi: ["चीता दर्शन नियंत्रित—नवीनतम निर्देश देखें"],
    },
    fee: {
      en: "Limited vehicles per day; permit must be pre-booked.",
      hi: "प्रतिदिन सीमित वाहन; परमिट अग्रिम बुकिंग से।",
    },
    booking: {
      permitUrl: "https://forest.mponline.gov.in/",
      seat: { en: ["Full Jeep (limited)"], hi: ["फुल जीप (सीमित)"] },
      notes: {
        en: "Expect checks; ID mandatory.",
        hi: "जांचें होती हैं; आईडी अनिवार्य।",
      },
    },
  },

  {
    id: "sanjay-dubri",
    name: { en: "Sanjay–Dubri Tiger Reserve", hi: "संजय–डुबरी टाइगर रिज़र्व" },
    district: { en: "Sidhi / Singrauli", hi: "सीधी / सिंगरौली" },
    description: {
      en: "Low crowds, dense forests and quiet—great for serious nature watching.",
      hi: "कम भीड़, घने जंगल और शांति—गंभीर प्रकृति-प्रेमियों के लिए उत्तम।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    image: "/images/parks/sanjay-dubri.jpg",

    zones: { en: ["Dubri", "Bhitthi (buffer)"], hi: ["डुबरी", "भित्ती (बफर)"] },
    entryGates: { en: ["Dubri Gate"], hi: ["डुबरी गेट"] },
    timings: {
      en: { summer: "≈ 5:45–10:00 & 3:30–6:15", winter: "≈ 6:45–11:00 & 2:30–5:15" },
      hi: { summer: "≈ 5:45–10:00 व 3:30–6:15", winter: "≈ 6:45–11:00 व 2:30–5:15" },
    },
    wildlife: {
      en: ["Tiger", "Leopard", "Bear", "Birds"],
      hi: ["बाघ", "तेंदुआ", "भालू", "पक्षी"],
    },
    reach: {
      en: "Rail: Rewa/Singrauli. Air: Prayagraj/Jabalpur (long drives).",
      hi: "रेल: रीवा/सिंगरौली। एयर: प्रयागराज/जबलपुर (लंबी ड्राइव)।",
    },
    tips: {
      en: ["Less touristy—arrange stays ahead", "Good for birds in winter"],
      hi: ["कम पर्यटक—ठहरने की व्यवस्था पहले करें", "सर्दियों में पक्षियों के लिए अच्छा"],
    },
    fee: {
      en: "Online jeep permits; few vehicles per day.",
      hi: "ऑनलाइन जीप परमिट; प्रतिदिन कम वाहन।",
    },
    booking: {
      permitUrl: "https://forest.mponline.gov.in/",
      seat: { en: ["Full Jeep"], hi: ["फुल जीप"] },
      notes: {
        en: "Carry cash for local guide/vehicle extras.",
        hi: "स्थानीय गाइड/वाहन अतिरिक्त के लिए नकद रखें।",
      },
    },
  },

  {
    id: "nauradehi",
    name: { en: "Nauradehi Wildlife Sanctuary", hi: "नौरादेही अभयारण्य" },
    district: { en: "Sagar / Damoh", hi: "सागर / दमोह" },
    description: {
      en: "Large mosaic of grasslands and dry forests; quiet safaris with a chance for wolves and hyenas.",
      hi: "घासभूमि-शुष्क वनों का विशाल मिश्रण; शांत सफारी—भेड़िया/लकड़बग्घा की संभावना।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep"], hi: ["जीप"] },
    image: "/images/parks/nauradehi.jpg",

    zones: { en: ["Ghughra", "Mohli"], hi: ["घुघरा", "मोहली"] },
    entryGates: { en: ["Ghughra Gate"], hi: ["घुघरा गेट"] },
    timings: {
      en: { summer: "≈ 6:00–10:00 & 3:30–6:30", winter: "≈ 6:30–11:00 & 2:30–5:30" },
      hi: { summer: "≈ 6:00–10:00 व 3:30–6:30", winter: "≈ 6:30–11:00 व 2:30–5:30" },
    },
    wildlife: {
      en: ["Wolf", "Hyena", "Chinkara", "Leopard (rare)"],
      hi: ["भेड़िया", "लकड़बग्घा", "चिंकारा", "तेंदुआ (दुर्लभ)"],
    },
    reach: {
      en: "Rail: Sagar/Damoh. Air: Jabalpur/Bhopal (long).",
      hi: "रेल: सागर/दमोह। एयर: जबलपुर/भोपाल (लंबी दूरी)।",
    },
    tips: {
      en: ["Carry water/food—basic facilities", "Great skies for astro in winter"],
      hi: ["पानी/खाना साथ रखें—सुविधाएँ सीमित", "सर्दियों में रात का आसमान शानदार"],
    },
    fee: {
      en: "Simple gate tickets + guide/vehicle at gate.",
      hi: "सरल गेट टिकट + गाइड/वाहन गेट पर।",
    },
    booking: {
      permitUrl: "https://forest.mponline.gov.in/",
      seat: { en: ["Full Jeep (on-spot often)"], hi: ["फुल जीप (अक्सर ऑन-स्पॉट)"] },
      notes: {
        en: "Online slots sparse—contact range in advance.",
        hi: "ऑनलाइन स्लॉट कम—रेंज से पहले संपर्क करें।",
      },
    },
  },

  {
    id: "gandhi-sagar",
    name: { en: "Gandhi Sagar Wildlife Sanctuary", hi: "गांधी सागर अभयारण्य" },
    district: { en: "Mandsaur / Neemuch", hi: "मंदसौर / नीमच" },
    description: {
      en: "Around the Chambal backwaters; scenic cliffs and grass patches; rewilding efforts ongoing.",
      hi: "चंबल बैकवॉटर के आसपास; मनमोहक चट्टानें व घासभूमि; रिवाइल्डिंग प्रयास जारी।",
    },
    bestTime: { en: "Nov–Mar", hi: "नवंबर–मार्च" },
    safariTypes: { en: ["Jeep", "Boat (backwaters)"], hi: ["जीप", "नौका (बैकवॉटर)"] },
    image: "/images/parks/gandhi-sagar.jpg",

    zones: { en: ["Camps area / Backwaters"], hi: ["कैंप क्षेत्र / बैकवॉटर"] },
    entryGates: { en: ["Bhainsrorgarh side / Local gates"], hi: ["भैंसरोगढ़ साइड / स्थानीय गेट"] },
    timings: {
      en: { summer: "≈ 6:00–10:00 & 4:00–6:30", winter: "≈ 6:30–11:00 & 3:00–5:30" },
      hi: { summer: "≈ 6:00–10:00 व 4:00–6:30", winter: "≈ 6:30–11:00 व 3:00–5:30" },
    },
    wildlife: {
      en: ["Antelopes", "Jackal", "Birdlife", "Occasional leopard"],
      hi: ["एंटीलोप", "सियार", "पक्षी जीवन", "कभी-कभार तेंदुआ"],
    },
    reach: {
      en: "Rail: Mandsaur/Neemuch. Air: Udaipur/Indore (long).",
      hi: "रेल: मंदसौर/नीमच। एयर: उदयपुर/इंदौर (लंबा)।",
    },
    tips: {
      en: ["Good for landscapes & birds", "Boat rides seasonal"],
      hi: ["लैंडस्केप व पक्षियों के लिए अच्छा", "नौका सफारी मौसमी"],
    },
    fee: {
      en: "Local permits; boat charges separate.",
      hi: "स्थानीय परमिट; नाव शुल्क अलग।",
    },
    booking: {
      permitUrl: "https://forest.mponline.gov.in/",
      seat: { en: ["Full Jeep", "Boat seat (seasonal)"], hi: ["फुल जीप", "नौका सीट (मौसमी)"] },
      notes: {
        en: "Confirm water levels before boat plan.",
        hi: "नौका की योजना से पहले जलस्तर की पुष्टि करें।",
      },
    },
  },

  {
    id: "van-vihar",
    name: { en: "Van Vihar National Park & Zoo (Bhopal)", hi: "वन विहार राष्ट्रीय उद्यान वज़ू (भोपाल)" },
    district: { en: "Bhopal", hi: "भोपाल" },
    description: {
      en: "Urban park by Upper Lake; cycling tracks, rescued carnivores & waterbirds. Easy city nature break.",
      hi: "अप्पर लेक के किनारे शहरी उद्यान; साइक्लिंग ट्रैक, रेस्क्यू carnivores और जलपक्षी—आसान नेचर ब्रेक।",
    },
    bestTime: { en: "Oct–Mar (pleasant)", hi: "अक्टूबर–मार्च (सुहावना)" },
    safariTypes: { en: ["Battery vehicles / cycles (inside)"], hi: ["बैटरी वाहन / साइकिल (अंदर)"] },
    image: "/images/parks/van-vihar.jpg",

    zones: { en: ["Lakefront & enclosures"], hi: ["लेकफ्रंट व एनक्लोज़र"] },
    entryGates: { en: ["VIP Road Gate — Upper Lake"], hi: ["वीआईपी रोड गेट — अपर लेक"] },
    timings: {
      en: { summer: "≈ 6:30–6:30", winter: "≈ 6:30–6:30" },
      hi: { summer: "≈ 6:30–6:30", winter: "≈ 6:30–6:30" },
    },
    wildlife: {
      en: ["Rescued carnivores", "Herbivores", "Waterbirds", "Urban birds"],
      hi: ["रेस्क्यू carnivores", "शाकाहारी", "जलपक्षी", "शहरी पक्षी"],
    },
    reach: {
      en: "Rail/Air: Bhopal city. On VIP Road by Upper Lake.",
      hi: "रेल/एयर: भोपाल। अपर लेक की वीआईपी रोड पर।",
    },
    tips: {
      en: ["Cycle hire available; take water", "Great sunsets by the lake"],
      hi: ["साइकिल किराये पर; पानी साथ रखें", "लेक किनारे सूर्यास्त शानदार"],
    },
    fee: {
      en: "Nominal tickets; battery vehicle rides extra.",
      hi: "नाममात्र टिकट; बैटरी वाहन अलग शुल्क।",
    },
    booking: {
      permitUrl: "https://forest.mponline.gov.in/",
      seat: { en: ["Battery vehicle seat", "Cycle pass"], hi: ["बैटरी वाहन सीट", "साइकिल पास"] },
      notes: {
        en: "City park—permits typically at gate; weekends busier.",
        hi: "शहर का पार्क—अधिकतर पास गेट पर; सप्ताहांत व्यस्त।",
      },
    },
  },
];

export default mpParks;