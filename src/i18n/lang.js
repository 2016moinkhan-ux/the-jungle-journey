// src/i18n/lang.js

export const LABELS = {
  en: {
    appTitle: "The Jungle Journey",
    listTitle: "Madhya Pradesh — National Parks",
    totalPrefix: "Total",
    searchPh: "Search park (e.g. Pench)",
    districtAll: "All Districts",
    safariAll: "All Safaris",
    bestTime: "Best time",
    safari: "Safari",
    viewDetails: "View details →",
    backToList: "← Back to Parks",
    bookPermit: "Book Official Permit",
    moreInfo: "More Info",
    zones: "Zones",
    entryGates: "Entry Gates",
    timings: "Timings",
    wildlife: "Key Wildlife",
    reach: "How to Reach",
    tips: "Visitor Tips",
    fee: "Permits & Fees",
  },
  hi: {
    appTitle: "The Jungle Journey",
    listTitle: "मध्य प्रदेश — राष्ट्रीय उद्यान",
    totalPrefix: "कुल",
    searchPh: "खोजें (उदा. पेंच)",
    districtAll: "सभी ज़िले",
    safariAll: "सभी सफ़ारी",
    bestTime: "उत्तम समय",
    safari: "सफ़ारी",
    viewDetails: "विस्तार देखें →",
    backToList: "← पार्क सूची पर",
    bookPermit: "आधिकारिक परमिट बुक करें",
    moreInfo: "और जानकारी",
    zones: "ज़ोन्स",
    entryGates: "प्रवेश द्वार",
    timings: "समय",
    wildlife: "मुख्य वन्यजीव",
    reach: "कैसे पहुँचें",
    tips: "यात्री सुझाव",
    fee: "परमिट व शुल्क",
  },
};

/** value → localized text (string) */
export function T(value, lang) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "object") {
    const v = value[lang] ?? value.en ?? "";
    return Array.isArray(v) ? v.join(", ") : String(v);
  }
  return String(value);
}

/** value → array (for list-y fields like safariTypes, zones) */
export function toArray(value, lang) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === "object") {
    const v = value[lang] ?? value.en ?? [];
    return Array.isArray(v) ? v : v ? [v] : [];
  }
  return [value];
}

/** lang resolver: accepts URLSearchParams OR plain object */
export function getLang(sp) {
  const raw =
    (sp && typeof sp.get === "function" && sp.get("lang")) ||
    (sp && sp.lang) ||
    "";
  const v = String(raw).toLowerCase();
  return v === "hi" ? "hi" : "en";
}