// /src/app/parks/[id]/page.jsx
import { use, useMemo } from "react";
import Link from "next/link";
import mpParks from "@/data/parks";

export default function ParkDetailPage({ params, searchParams }) {
  // ✅ Next 15: unwrap params & searchParams (they are Promises now)
  const { id } = use(params);
  const sp = use(searchParams);
  const lang = sp?.lang === "hi" ? "hi" : "en";

  // ✅ park find (memoized)
  const park = useMemo(() => mpParks.find((p) => p.id === id), [id]);

  if (!park) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6 text-white">
        <h1 className="text-2xl font-semibold">Park not found</h1>
        <Link
          href={`/parks?lang=${lang}`}
          className="underline mt-4 inline-block"
        >
          ← Back to Parks
        </Link>
      </div>
    );
  }

  // --- helpers ---
  const t = (field, fallback = "") =>
    (typeof field === "string"
      ? field
      : field?.[lang] ?? field?.en ?? fallback) ?? fallback;

  const list = (field) => {
    const v = t(field, []);
    return Array.isArray(v) ? v.join(", ") : String(v || "");
  };

  const summer = t(park.timings?.summer);
  const winter = t(park.timings?.winter);

  // both names supported: officialBooking / booking.official, and mapLink / map.google
  const bookingUrl = park.officialBooking || park.booking?.official;
  const mapUrl = park.mapLink || park.map?.google;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 text-white">
      <Link
        href={`/parks?lang=${lang}`}
        className="inline-block mb-4 opacity-90 hover:opacity-100"
      >
        ← Back to Parks
      </Link>

      {/* Banner image */}
      <div className="rounded-2xl overflow-hidden mb-6">
        <div
          className="h-64 md:h-72 bg-cover bg-center"
          style={{
            backgroundImage: `url(${park.image})`,
            backgroundPosition: park.imagePos || "50% 35%",
          }}
          aria-label={t(park.name)}
        />
      </div>

      <h1 className="text-4xl font-bold mb-4">{t(park.name)}</h1>
      <p className="mb-6 opacity-90">{t(park.description)}</p>

      <div className="flex flex-wrap gap-3 mb-8">
        {t(park.bestTime) && (
          <span className="px-3 py-1 rounded-full bg-emerald-800/50">
            Best time: {t(park.bestTime)}
          </span>
        )}
        {list(park.safariTypes) && (
          <span className="px-3 py-1 rounded-full bg-emerald-800/50">
            Safari: {list(park.safariTypes)}
          </span>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Info title="District" value={t(park.district)} />
        <Info title="Zones" value={list(park.zones)} />
        <Info title="Entry gates" value={list(park.entryGates)} />
        <Info title="Wildlife" value={list(park.wildlife)} />
        <Info title="Timings (Summer)" value={summer} />
        <Info title="Timings (Winter)" value={winter} />
        <Info
          title="How to reach"
          value={t(park.howToReach)}
          className="md:col-span-2"
        />
      </div>

      <div className="flex flex-wrap gap-4">
        {bookingUrl && (
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition"
          >
            Book official permit ↗
          </a>
        )}
        {mapUrl && (
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-emerald-900 hover:bg-emerald-800 transition"
          >
            Open on Google Maps ↗
          </a>
        )}
      </div>
    </div>
  );
}

function Info({ title, value, className = "" }) {
  if (!value) return null;
  return (
    <div className={`bg-emerald-900/40 rounded-xl px-4 py-3 ${className}`}>
      <div className="text-sm opacity-80">{title}</div>
      <div className="text-base mt-1">{value}</div>
    </div>
  );
}