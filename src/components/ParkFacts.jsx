// src/components/ParkFacts.jsx
"use client";

import { Leaf } from "lucide-react";

export default function ParkFacts({ park, lang = "en", L }) {
  // safety helpers
  const arr = (x) => (Array.isArray(x) ? x : x ? [x] : []);
  const txt = (obj) =>
    obj && typeof obj === "object" ? obj[lang] || obj.en || "" : obj || "";

  const zones = arr(park.zones);
  const gates = arr(park.entryGates);
  const wildlife = arr(park.keyWildlife);
  const tips = arr(park.tips?.[lang] || park.tips?.en);
  const bestTime = txt(park.bestTime);
  const safariTimings = park.safariTimings || park.timings || {};
  const reach = txt(park.howToReach);

  return (
    <section className="mt-8 grid gap-6 md:grid-cols-2">
      {/* Zones */}
      <Card title={L.zones} icon={<Leaf />}>
        <TagList items={zones} />
      </Card>

      {/* Entry gates */}
      <Card title={L.entryGates} icon={<Leaf />}>
        <TagList items={gates} />
      </Card>

      {/* Safari timings */}
      <Card title={L.safariTimings} icon={<Leaf />}>
        <div className="space-y-2 text-sm text-white/90">
          {safariTimings?.summer && (
            <p>
              {L.summer}: <span className="opacity-80">{safariTimings.summer}</span>
            </p>
          )}
          {safariTimings?.winter && (
            <p>
              {L.winter}: <span className="opacity-80">{safariTimings.winter}</span>
            </p>
          )}
          {!safariTimings?.summer && !safariTimings?.winter && bestTime && (
            <p>
              {L.bestTime}: <span className="opacity-80">{bestTime}</span>
            </p>
          )}
        </div>
      </Card>

      {/* Key wildlife */}
      <Card title={L.keyWildlife} icon={<Leaf />}>
        <TagList items={wildlife} />
      </Card>

      {/* How to reach */}
      <Card title={L.howToReach} icon={<Leaf />}>
        <p className="text-sm text-white/90">{reach || L.na}</p>
      </Card>

      {/* Visitor tips */}
      <Card title={L.visitorTips} icon={<Leaf />}>
        {tips.length ? (
          <ul className="list-disc pl-5 space-y-1 text-sm text-white/90">
            {tips.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-white/60">{L.na}</p>
        )}
      </Card>
    </section>
  );
}

/* ---------- small UI helpers ---------- */

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
  if (!items?.length) {
    return <p className="text-sm text-white/60">—</p>;
  }
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