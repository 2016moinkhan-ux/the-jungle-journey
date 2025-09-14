// src/app/parks/page.jsx
import { use } from "react";
import HeroHeader from "@/components/HeroHeader";
import ParksClient from "./ParksClient";
import LanguageSwitch from "@/components/LanguageSwitch";
import parksModule from "@/data/parks";
import { LBL } from "@/i18n/lang";

/* ---------------- SEO / Meta (HI + EN) ---------------- */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateMetadata({ searchParams }) {
  const { lang: langParam } = await searchParams;
  const lang = langParam === "hi" ? "hi" : "en";

  const title =
    lang === "hi"
      ? "सभी पार्क | द जंगल जर्नी"
      : "All Parks | The Jungle Journey";

  const description =
    lang === "hi"
      ? "मध्य प्रदेश के राष्ट्रीय उद्यानों की सूची — खोजें, फ़िल्टर करें और सफ़ारी/होटल विकल्प देखें।"
      : "Browse Madhya Pradesh national parks — search, filter, and find safari/hotel options.";

  // Default OG image for parks listing (add this file once in public/images/og/)
  const ogImage = `${SITE_URL}/images/og/parks-list.jpg`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/parks?lang=${lang}`,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: `${SITE_URL}/parks?lang=${lang}`,
    },
  };
}
/* ---------------- End SEO block ---------------- */

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