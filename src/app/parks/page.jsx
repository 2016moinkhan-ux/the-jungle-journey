// src/app/parks/page.jsx
import { use } from "react";
import HeroHeader from "@/components/HeroHeader";
import ParksClient from "./ParksClient";
import LanguageSwitch from "@/components/LanguageSwitch";
import parksModule from "@/data/parks";
import { LBL } from "@/i18n/lang";

// ⭐ SEO for listing page
export async function generateMetadata({ searchParams }) {
  const sp = await searchParams;
  const lang = sp?.lang === "hi" ? "hi" : "en";

  const title =
    lang === "hi"
      ? "सभी पार्क | The Jungle Journey"
      : "All Parks | The Jungle Journey";

  const description =
    lang === "hi"
      ? "मध्य प्रदेश के सभी नेशनल पार्क एक जगह—बेस्ट टाइम, जोन, सफारी व आधिकारिक बुकिंग लिंक।"
      : "All Madhya Pradesh national parks in one place—best time, zones, safaris and official booking links.";

  return {
    title,
    description,
    alternates: {
      canonical: "/parks",
      languages: {
        en: "/parks?lang=en",
        hi: "/parks?lang=hi",
      },
    },
    openGraph: {
      title,
      description,
      url: "/parks",
      type: "website",
    },
  };
}

export default function ParksPage({ searchParams }) {
  // ✅ Next 15: unwrap searchParams safely
  const sp = use(searchParams);
  const rawLang = sp?.lang;
  const lang = rawLang === "hi" ? "hi" : "en";

  // ✅ parks data (default export / named दोनों cases safe)
  const mpParks =
    Array.isArray(parksModule?.mpParks)
      ? parksModule.mpParks
      : Array.isArray(parksModule?.parks)
      ? parksModule.parks
      : Array.isArray(parksModule)
      ? parksModule
      : [];

  // ✅ i18n subtitle (fallback safety)
  const subtitle =
    LBL?.[lang]?.subtitle ||
    (lang === "hi"
      ? "मध्य प्रदेश — राष्ट्रीय उद्यान"
      : "Madhya Pradesh — National Parks");

  return (
    <main className="relative min-h-screen text-white">
      {/* Header */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-6">
        <div className="flex items-center justify-between">
          <HeroHeader title="The Jungle Journey" subtitle={subtitle} />
          <LanguageSwitch />
        </div>
      </div>

      {/* Listing grid + search/filters */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-24">
        <ParksClient lang={lang} parks={mpParks} />
      </section>
    </main>
  );
}