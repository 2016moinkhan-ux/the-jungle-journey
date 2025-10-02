// src/data/parkLinks.js
// Direct safari booking (non-official portals).
// Keys must match mpParks[].id EXACTLY.

const parkLinks = {
  kanha: {
    en: "https://www.kanhanationalparkonline.in/online-kanha-safari-booking.html",
    hi: "https://www.kanhanationalparkonline.in/online-kanha-safari-booking.html",
  },
  bandhavgarh: {
    en: "https://www.bandhavgarhnationalpark.in/online-bandhavgarh-safari-booking.html",
    hi: "https://www.bandhavgarhnationalpark.in/online-bandhavgarh-safari-booking.html",
  },
  pench: {
    en: "https://www.penchnationalparkonline.in/online-pench-safari-booking.html",
    hi: "https://www.penchnationalparkonline.in/online-pench-safari-booking.html",
  },
  satpura: {
    en: "https://www.satpuranationalparkonline.in/online-satpura-safari-booking.php",
    hi: "https://www.satpuranationalparkonline.in/online-satpura-safari-booking.php",
  },
  panna: {
    en: "https://www.pannanationalparkonline.in/panna-online-safari-booking.html",
    hi: "https://www.pannanationalparkonline.in/panna-online-safari-booking.html",
  },

  // Sanjay–Dubri: abhi official aggregator par hi le ja rahe hain
  "sanjay-dubri": {
    en: "https://mpforest.co.in",
    hi: "https://mpforest.co.in",
  },

  // Van Vihar: MPOnline gate (direct)
  "van-vihar": {
    en: "https://forest.mponline.gov.in/Tier2Forest/SelectTripCategoryEntryNew.aspx?ParkID=VVNP&T=Tier2",
    hi: "https://forest.mponline.gov.in/Tier2Forest/SelectTripCategoryEntryNew.aspx?ParkID=VVNP&T=Tier2",
  },

  // ❌ Don’t add keys for: kuno, gandhi-sagar, nauradehi, madhav, dinosaur
  // In par Safari Booking button hide rahega, Official Permit dikhayenge.
};

export default parkLinks;