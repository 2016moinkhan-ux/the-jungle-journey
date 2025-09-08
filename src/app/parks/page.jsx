// src/app/parks/page.jsx  (SERVER COMPONENT – no "use client")
import mpParks from "@/data/parks";
import { LABELS, getLang } from "@/i18n/lang";
import ParksClient from "./ParksClient";
import LanguageSwitch from "@/components/LanguageSwitch";

export default async function ParksPage({ searchParams }) {
  // Next 15: searchParams is thenable → await it
  const sp = await searchParams;
  const lang = getLang(sp);     // "en" | "hi"
  const L = LABELS[lang];       // server-side labels (may contain helpers)

  // ✅ Server पर ही total text बना लो (कोई function client को मत दो)
  const totalText =
    (typeof L.total === "function")
      ? L.total(mpParks.length)                                   // अगर helper मौजूद है
      : `${L.totalLabel || "Total"}: ${mpParks.length}`;           // वरना fallback

  // ✅ Client-safe labels: सिर्फ strings
  const LClient = {
    appTitle: L.appTitle,
    listTitle: L.listTitle,
    totalLabel: L.totalLabel || "Total",
    searchPh: L.searchPh,
    districtAll: L.districtAll,
    safariAll: L.safariAll,
    bestTime: L.bestTime,
    safari: L.safari,
    viewDetails: L.viewDetails,
    bookPermit: L.bookPermit,
    moreInfo: L.moreInfo,
    zones: L.zones,
    entryGates: L.entryGates,
    timings: L.timings,
    wildlife: L.wildlife,
    reach: L.reach,
    tips: L.tips,
    fee: L.fee,
  };

  return (
    <main className="px-6 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">{L.appTitle}</h1>
        <LanguageSwitch currentLang={lang} />
      </div>

      <h2 className="text-2xl font-bold mb-2">{L.listTitle}</h2>
      <p className="text-sm text-gray-500 mb-6">— {totalText}</p>

      {/* IMPORTANT: key={lang} ताकि भाषा बदलते ही री-माउंट हो */}
      <ParksClient key={lang} items={mpParks} labels={LClient} lang={lang} />
    </main>
  );
}