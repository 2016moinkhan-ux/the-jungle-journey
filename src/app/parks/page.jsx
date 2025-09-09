// src/app/parks/page.jsx
import { use } from "react";
import HeroHeader from "@/components/HeroHeader";
import ParksClient from "./ParksClient";
import LanguageSwitch from "@/components/LanguageSwitch";
// 🔁 data/parks में export नाम अलग हो सकता है, इसलिए दोनों तरीके से safely import:
import parksModule from "@/data/parks";
import { LBL } from "@/i18n/lang";

export default function ParksPage({ searchParams }) {
  // ✅ Next 15: unwrap searchParams
  const sp = use(searchParams);
  const rawLang = sp?.lang;
  const lang = rawLang === "hi" ? "hi" : "en";

  // ✅ parks array safely निकालो (चाहे default export हो या named)
  const mpParks =
    Array.isArray(parksModule?.mpParks)
      ? parksModule.mpParks
      : Array.isArray(parksModule?.parks)
      ? parksModule.parks
      : Array.isArray(parksModule)
      ? parksModule
      : [];

  // ✅ heading/subtitle (i18n से, लेकिन fallback भी रखा है)
  const title = "The Jungle Journey";
  const subtitle =
    (LBL && LBL[lang] && LBL[lang].subtitle) ||
    (lang === "hi" ? "मध्य प्रदेश — राष्ट्रीय उद्यान" : "Madhya Pradesh — National Parks");

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-green-950 to-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6">
        <HeroHeader title={title} subtitle={subtitle} />
        <LanguageSwitch />
      </div>

      {/* Parks Grid */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-24">
        {/* ParksClient को हमेशा string lang और Array parks दो */}
        <ParksClient lang={lang} parks={mpParks} />
      </section>
    </main>
  );
}