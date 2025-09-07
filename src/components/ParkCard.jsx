"use client";

import Image from "next/image";
import Link from "next/link";
import { T } from "@/i18n/lang";

/**
 * Safe merge for labels so that missing keys never crash the UI.
 */
function mergeLabels(L = {}) {
  const fallback = {
    bestTime: "Best time",
    safari: "Safari",
    viewDetails: "View details",
    bookPermit: "Book official permit",
  };
  return { ...fallback, ...L };
}

/**
 * Normalizes any localized value into a string
 * - accepts {en/hi}, array, or string
 */
function asText(value, lang) {
  const v = T(value, lang);
  if (Array.isArray(v)) return v.filter(Boolean).join(", ");
  return v || "";
}

export default function ParkCard({ park, lang, labels: Lprop }) {
  const L = mergeLabels(Lprop);

  // localized fields (ALWAYS strings)
  const name = asText(park.name, lang);
  const district = asText(park.district, lang);
  const desc = asText(park.description, lang);
  const best = asText(park.bestTime, lang);
  const safari = asText(park.safariTypes, lang);

  // assets
  const img =
    typeof park.image === "string" && park.image.trim()
      ? park.image
      : "/images/parks/placeholder.jpg";

  const href = `/parks/${park.id}?lang=${lang}`;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      <Link href={href} className="block">
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
          <Image
            src={img}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </div>
      </Link>

      <div className="p-4">
        <h3 className="text-lg font-semibold">
          <Link href={href}>{name}</Link>
        </h3>
        {district && (
          <p className="mt-1 text-sm text-gray-500">{district}</p>
        )}
        {desc && (
          <p className="mt-3 line-clamp-3 text-sm text-gray-700">{desc}</p>
        )}

        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          {best && (
            <span className="rounded-full bg-gray-100 px-3 py-1">
              {L.bestTime}: {best}
            </span>
          )}
          {safari && (
            <span className="rounded-full bg-gray-100 px-3 py-1">
              {L.safari}: {safari}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center gap-4">
          <Link href={href} className="text-green-700 hover:underline">
            {L.viewDetails}
          </Link>
          <a
            href="https://forest.mponline.gov.in/"
            target="_blank"
            rel="noreferrer"
            className="text-green-700 hover:underline"
          >
            {L.bookPermit || L.bookOfficialPermit || "Book official permit"}
          </a>
        </div>
      </div>
    </div>
  );
}