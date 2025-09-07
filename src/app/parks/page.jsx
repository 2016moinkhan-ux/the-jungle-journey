// src/app/parks/page.jsx  (Server Component)
import mpParks from "@/data/parks";
import { LABELS, getLang } from "@/i18n/lang";
import ParksClient from "./ParksClient";
import LanguageSwitch from "@/components/LanguageSwitch";

export const dynamic = "force-static";

export default async function ParksPage({ searchParams }) {
  const sp = await searchParams;
  const lang = getLang(sp);
  const L = LABELS[lang];

  return (
    <main className="px-6 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">{L.listTitle}</h1>
        <LanguageSwitch lang={lang} />
      </div>

      <p className="mb-5 text-sm text-gray-500">— ({L.totalLabel}: {mpParks.length})</p>

      {/* Client renderer (filters + cards) */}
      <ParksClient items={mpParks} lang={lang} labels={L} />
    </main>
  );
}