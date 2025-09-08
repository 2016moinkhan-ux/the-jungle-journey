"use client";

import { motion } from "framer-motion";

// helper: {en,hi} object या string —> localized string
const pick = (v, lang) =>
  typeof v === "string" ? v : (v?.[lang] || v?.en || "");

export default function ParkCard({ park, L, lang = "en" }) {
  const name = pick(park.name, lang);
  const district = pick(park.district, lang);
  const desc = pick(park.description, lang);
  const best = pick(park.bestTime, lang);

  // safari types as readable text
  const safariArr = Array.isArray(park.safariTypes)
    ? park.safariTypes
    : park.safariTypes?.[lang] || park.safariTypes?.en || [];
  const safari = (safariArr || [])
    .map((s) => (typeof s === "string" ? s : pick(s, lang)))
    .join(", ");

  // ✅ नया: object-position को data से पढ़ो (fallback "50% 50%")
  const objectPosition = park.imagePos || "50% 50%";

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={park.image}
          alt={name}
          className="h-56 w-full object-cover"
          style={{ objectPosition }}
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 text-white drop-shadow">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm opacity-90">{district}</p>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-3 p-4">
        {desc && (
          <p className="line-clamp-3 text-[15px] leading-6 text-gray-700">
            {desc}
          </p>
        )}

        <div className="mt-1 flex flex-wrap gap-2">
          {best && (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
              {L.bestTime}: {best}
            </span>
          )}
          {safari && (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
              {L.safari}: {safari}
            </span>
          )}
        </div>

        <a
          href={`/parks/${park.id}?lang=${lang}`}
          className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800"
        >
          {L.viewDetails} <span aria-hidden>→</span>
        </a>
      </div>
    </motion.article>
  );
}