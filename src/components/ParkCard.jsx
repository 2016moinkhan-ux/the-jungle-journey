// src/components/ParkCard.jsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/** helper: {en,hi} या string → चुनी हुई भाषा की string */
const pick = (v, lang) =>
  typeof v === "string" ? v : (v?.[lang] || v?.en || "");

/** helper: list normalize */
const list = (v, lang) => {
  const arr = Array.isArray(v) ? v : v?.[lang] || v?.en || [];
  return (arr || []).map((x) => (typeof x === "string" ? x : pick(x, lang)));
};

export default function ParkCard({ park, lang = "en" }) {
  // labels (client-safe)
  const L = {
    bestTime: lang === "hi" ? "उत्तम समय" : "Best time",
    safari: lang === "hi" ? "सफारी" : "Safari",
    viewDetails: lang === "hi" ? "विवरण देखें" : "View details",
  };

  // localized values
  const name = pick(park?.name, lang);
  const district = pick(park?.district, lang);
  const desc = pick(park?.description, lang);
  const best = pick(park?.bestTime, lang);
  const safariArr = list(park?.safariTypes, lang);

  // image settings
  const src = park?.image || "/images/parks/placeholder.jpg";
  const pos = park?.imagePos || "50% 50%";

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-emerald-900/20 bg-gradient-to-b from-emerald-900/20 to-emerald-900/5 shadow-lg backdrop-blur-sm">
      {/* Image / Hover zoom */}
      <div className="relative h-56 w-full overflow-hidden">
        <motion.img
          src={src}
          alt={name || "Park image"}
          className="h-full w-full object-cover"
          style={{ objectPosition: pos }}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          loading="lazy"
        />
        {/* bottom gradient for text legibility */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        {/* Title overlay */}
        <div className="absolute inset-x-4 bottom-3">
          <h3 className="text-white text-lg font-semibold drop-shadow">
            {name}
          </h3>
          {district ? (
            <p className="text-white/85 text-sm drop-shadow">{district}</p>
          ) : null}
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        {/* Description (short) */}
        {desc ? (
          <p className="line-clamp-2 text-emerald-50/90 text-sm">
            {desc}
          </p>
        ) : null}

        {/* Badges */}
        <div className="mt-3 flex flex-wrap gap-2">
          {best ? (
            <span className="rounded-full bg-emerald-100/90 px-3 py-1 text-xs text-emerald-900 ring-1 ring-emerald-700/20">
              {L.bestTime}: {best}
            </span>
          ) : null}

          {safariArr.length > 0 ? (
            <span className="rounded-full bg-emerald-100/90 px-3 py-1 text-xs text-emerald-900 ring-1 ring-emerald-700/20">
              {L.safari}: {safariArr.join(", ")}
            </span>
          ) : null}
        </div>

        {/* CTA */}
        <div className="mt-4">
          <Link
            href={`/parks/${park?.id}?lang=${lang}`}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
          >
            {L.viewDetails}
            <svg
              className="h-4 w-4 opacity-90"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* subtle rim light */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
    </article>
  );
}