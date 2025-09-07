// src/i18n/lang.js
export const T = (val, lang = "en") => {
  if (val == null) return "";
  if (typeof val === "string") return val;
  if (Array.isArray(val)) {
    // array of strings (already localized) OR object {en,hi}[]
    if (val.length === 0) return "";
    return val.map((v) => (typeof v === "string" ? v : v?.[lang] || v?.en || "")).filter(Boolean).join(", ");
  }
  if (typeof val === "object") return val[lang] ?? val.en ?? "";
  return String(val);
};

export const getLang = (sp) => {
  // sp can be an object or URLSearchParams
  const v = sp?.get ? sp.get("lang") : sp?.lang;
  return v === "hi" ? "hi" : "en";
};

// Labels that can be safely passed to Client components (ONLY strings)
export const LABELS = {
  en: {
    appTitle: "The Jungle Journey",
    listTitle: "The Jungle Journey",
    totalLabel: "total",
    searchPh: "Search...",
    districtAll: "All",
    safariAll: "All",
    bestTime: "Best time",
    safari: "Safari",
    viewDetails: "View details",
    backToList: "Back to Parks",
    bookPermit: "Book official permit",
    moreInfo: "More information",

    zones: "Zones",
    entryGates: "Entry gates",
    timings: "Safari timings",
    wildlife: "Key wildlife",
    reach: "How to reach",
    tips: "Visitor tips",
    fee: "Fees / Notes",
  },
  hi: {
    appTitle: "द जंगल जर्नी",
    listTitle: "द जंगल जर्नी",
    totalLabel: "कुल",
    searchPh: "खोजें...",
    districtAll: "सभी",
    safariAll: "सभी",
    bestTime: "सबसे अच्छा समय",
    safari: "सफारी",
    viewDetails: "विवरण देखें",
    backToList: "पार्क सूची पर वापस",
    bookPermit: "आधिकारिक परमिट बुक करें",
    moreInfo: "अधिक जानकारी",

    zones: "क्षेत्र",
    entryGates: "प्रवेश द्वार",
    timings: "सफारी समय",
    wildlife: "मुख्य वन्यजीव",
    reach: "कैसे पहुँचें",
    tips: "यात्री सुझाव",
    fee: "शुल्क / नोट्स",
  },
};