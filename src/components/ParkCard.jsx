// src/components/ParkCard.jsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TypeBadges from "./TypeBadge";

/** pick {en,hi} or plain string */
const pick = (v, lang) =>
  typeof v === "string" ? v : (v?.[lang] || v?.en || "");

/** normalize list with i18n */
const list = (v, lang) => {
  const arr = Array.isArray(v) ? v : v?.[lang] || v?.en || [];
  return (arr || []).map((x) => (typeof x === "string" ? x : pick(x, lang)));
};

export default function ParkCard({ park, lang = "en" }) {
  // labels
  const L = {
    bestTime: lang === "hi" ? "उत्तम समय" : "Best time",
    safari: lang === "hi" ? "सफारी" : "Safari",
    viewDetails: lang === "hi" ? "विवरण देखें" : "View details",
  };

  // content
  const name = pick(park?.name, lang);
  const district = pick(park?.district, lang);
  const desc = pick(park?.description, lang);
  const best = pick(park?.bestTime, lang);
  const safariArr = list(park?.safariTypes, lang);

  // image
  const src = park?.image || "/images/parks/placeholder.jpg";
  const pos = park?.imagePos || "50% 50%";

  return (
    <article
      className="
        group relative overflow-hidden rounded-2xl
        border border-neutral-200 bg-white
        shadow-sm transition hover:shadow-md
      "
    >
      {/* Image */}
      <div className="relative w-full h-44 sm:h-56 overflow-hidden">
        <motion.img
          src={src}
          alt={name || "Park image"}
          className="h-full w-full object-cover"
          style={{ objectPosition: pos }}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
          loading="lazy"
        />
        {/* legibility gradient (doesn't block taps) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
        {/* Title overlay */}
        <div className="absolute inset-x-4 bottom-3">
          <h3 className="text-white text-[1.05rem] sm:text-lg font-semibold drop-shadow">
            {name}
          </h3>
          {district ? (
            <p className="text-white/90 text-xs sm:text-sm drop-shadow">
              {district}
            </p>
          ) : null}
        </div>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5">
        {/* Description */}
        {desc ? (
          <p className="text-[0.95rem] text-neutral-800 leading-relaxed line-clamp-2">
            {desc}
          </p>
        ) : null}

        {/* Designation badges */}
        <TypeBadges park={park} lang={lang} className="mt-3" />

        {/* Fact chips */}
        <div className="mt-3 flex flex-wrap gap-2">
          {best ? (
            <span className="rounded-full bg-neutral-100 px-3 py-1 text-[0.8rem] text-neutral-900 ring-1 ring-neutral-200">
              {L.bestTime}: {best}
            </span>
          ) : null}
          {safariArr.length > 0 ? (
            <span className="rounded-full bg-neutral-100 px-3 py-1 text-[0.8rem] text-neutral-900 ring-1 ring-neutral-200">
              {L.safari}: {safariArr.join(", ")}
            </span>
          ) : null}
        </div>

        {/* CTA */}
        <div className="mt-4">
          <Link
            href={`/parks/${park?.id}?lang=${lang}`}
            aria-label={`${L.viewDetails}: ${name}`}
            className="
              inline-flex md:inline-flex w-full md:w-auto
              items-center justify-center gap-2 rounded-lg
              bg-neutral-900 text-white
              px-4 py-3 text-[0.95rem] font-medium
              transition-colors hover:bg-neutral-800
              focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/60
            "
          >
            {L.viewDetails}
            <svg
              className="h-4.5 w-4.5 opacity-90"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* subtle rim */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/[0.03]" />
    </article>
  );
}