// src/app/(protected)/parks/page.jsx
import HeroHeader from "@/components/HeroHeader";
import ParksClient from "./ParksClient";
import parksModule from "@/data/parks";
import { LBL } from "@/i18n/lang";

export const dynamic = "force-dynamic"; // ensures runtime evaluation

async function getLang(searchParams) {
  const sp = await searchParams;
  return sp?.lang === "hi" ? "hi" : "en";
}

export async function generateMetadata({ searchParams }) {
  const lang = await getLang(searchParams);

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
      languages: { en: "/parks?lang=en", hi: "/parks?lang=hi" },
    },
  };
}

export default async function ParksPage({ searchParams }) {
  const lang = await getLang(searchParams);

  const mpParks =
    Array.isArray(parksModule?.mpParks)
      ? parksModule.mpParks
      : Array.isArray(parksModule?.parks)
      ? parksModule.parks
      : Array.isArray(parksModule)
      ? parksModule
      : [];

  const subtitle =
    LBL?.[lang]?.subtitle ||
    (lang === "hi"
      ? "मध्य प्रदेश — राष्ट्रीय उद्यान"
      : "Madhya Pradesh — National Parks & Safaris");

  return (
    <main className="relative min-h-screen bg-white text-neutral-900">
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-6 md:pt-8">
        <HeroHeader title="The Jungle Journey" subtitle={subtitle} />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-24">
        <ParksClient lang={lang} parks={mpParks} />
      </section>
    </main>
  );
}