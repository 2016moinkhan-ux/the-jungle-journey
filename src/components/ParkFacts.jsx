// src/components/ParkFacts.jsx
"use client";

import parkLinks from "@/data/parkLinks";
import { Leaf, MapPin, Globe } from "lucide-react";

export default function ParkFacts({ park, lang = "en", L = {} }) {
  // helpers
  const arr = (x) => (Array.isArray(x) ? x : x ? [x] : []);
  const txt = (obj) =>
    obj && typeof obj === "object" ? obj[lang] || obj.en || "" : obj || "";

  // data
  const zones = arr(park.zones);
  const gates = arr(park.entryGates);
  const wildlife = arr(park.keyWildlife || park.wildlife);
  const tips = arr(park.tips?.[lang] || park.tips?.en);
  const bestTime = txt(park.bestTime);
  const safariTimings = park.safariTimings || park.timings || {};
  const reach = txt(park.howToReach);

  const websiteUrl =
    typeof park.website === "string"
      ? park.website
      : park.website?.[lang] || park.website?.en || "";

  const mapUrl =
    park.mapLink ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      txt(park.name) || "National Park"
    )}`;

  // prefer park.safariBooking else fallback to /data/parkLinks
  const safariBooking =
    typeof park.safariBooking === "string"
      ? park.safariBooking
      : park.safariBooking?.[lang] ||
        park.safariBooking?.en ||
        parkLinks?.[park.id]?.[lang] ||
        parkLinks?.[park.id]?.en ||
        "";

  // labels fallbacks
  const LABELS = {
    zones: L.zones || (lang === "hi" ? "ज़ोन" : "Zones"),
    entryGates: L.entryGates || (lang === "hi" ? "प्रवेश द्वार" : "Entry gates"),
    safariTimings: L.safariTimings || (lang === "hi" ? "सफारी समय" : "Safari timings"),
    summer: L.summer || (lang === "hi" ? "गर्मी" : "Summer"),
    winter: L.winter || (lang === "hi" ? "सर्दी" : "Winter"),
    bestTime: L.bestTime || (lang === "hi" ? "श्रेष्ठ समय" : "Best time"),
    keyWildlife: L.keyWildlife || (lang === "hi" ? "मुख्य वन्यजीव" : "Key wildlife"),
    howToReach: L.howToReach || (lang === "hi" ? "कैसे पहुँचे" : "How to reach"),
    visitorTips: L.visitorTips || (lang === "hi" ? "विज़िटर टिप्स" : "Visitor tips"),
    na: L.na || "—",
    ctaWebsite: L.ctaWebsite || (lang === "hi" ? "वेबसाइट" : "Website"),
    ctaMap: L.ctaMap || (lang === "hi" ? "गूगल मैप्स" : "Google Maps"),
    ctaSafari: L.ctaSafari || (lang === "hi" ? "सफारी बुकिंग" : "Safari Booking"),
  };

  return (
    <section className="mt-8 grid gap-6 md:grid-cols-2">
      {/* CTA buttons */}
      <div className="md:col-span-2">
        <div className="flex flex-wrap items-center gap-3">
          {websiteUrl ? (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/15 transition"
            >
              <Globe className="h-4 w-4" />
              {LABELS.ctaWebsite}
            </a>
          ) : null}

          {mapUrl ? (
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/15 transition"
            >
              <MapPin className="h-4 w-4" />
              {LABELS.ctaMap}
            </a>
          ) : null}

          {safariBooking ? (
            <a
              href={safariBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-500 transition"
            >
              <Leaf className="h-4 w-4" />
              {LABELS.ctaSafari}
            </a>
          ) : null}
        </div>
      </div>

      {/* Zones */}
      <Card title={LABELS.zones} icon={<Leaf />}>
        <TagList items={zones} />
      </Card>

      {/* Entry gates */}
      <Card title={LABELS.entryGates} icon={<Leaf />}>
        <TagList items={gates} />
      </Card>

      {/* Safari timings */}
      <Card title={LABELS.safariTimings} icon={<Leaf />}>
        <div className="space-y-2 text-sm text-white/90">
          {safariTimings?.summer && (
            <p>
              {LABELS.summer}: <span className="opacity-80">{safariTimings.summer}</span>
            </p>
          )}
          {safariTimings?.winter && (
            <p>
              {LABELS.winter}: <span className="opacity-80">{safariTimings.winter}</span>
            </p>
          )}
          {!safariTimings?.summer && !safariTimings?.winter && bestTime && (
            <p>
              {LABELS.bestTime}: <span className="opacity-80">{bestTime}</span>
            </p>
          )}
        </div>
      </Card>

      {/* Key wildlife */}
      <Card title={LABELS.keyWildlife} icon={<Leaf />}>
        <TagList items={wildlife} />
      </Card>

      {/* How to reach */}
      <Card title={LABELS.howToReach} icon={<Leaf />}>
        <p className="text-sm text-white/90">{reach || LABELS.na}</p>
      </Card>

      {/* Tips */}
      <Card title={LABELS.visitorTips} icon={<Leaf />}>
        {tips.length ? (
          <ul className="list-disc pl-5 space-y-1 text-sm text-white/90">
            {tips.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-white/60">{LABELS.na}</p>
        )}
      </Card>
    </section>
  );
}

/* UI helpers */
function Card({ title, icon, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-green-900/30 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur">
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-700/50">
          {icon}
        </span>
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function TagList({ items }) {
  if (!items?.length) return <p className="text-sm text-white/60">—</p>;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it, idx) => (
        <span
          key={`${it}-${idx}`}
          className="rounded-full bg-green-800/60 px-3 py-1 text-sm text-white/90"
        >
          {it}
        </span>
      ))}
    </div>
  );
}