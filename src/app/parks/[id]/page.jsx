// src/app/parks/[id]/page.jsx
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import mpParks from "@/data/parks";
import { LBL } from "@/i18n/lang";

// small helpers
const t = (val, lang) =>
  typeof val === "string" ? val : val?.[lang] ?? val?.en ?? "";

const list = (val, lang) => {
  const arr =
    Array.isArray(val) ? val :
    Array.isArray(val?.[lang]) ? val[lang] :
    Array.isArray(val?.en) ? val.en : [];
  return arr;
};

export default function ParkDetailPage({ params, searchParams }) {
  // ✅ Next 15 safe: unwrap with use()
  const pr = use(params);
  const sp = use(searchParams);

  const id = pr?.id || "";
  const lang = sp?.lang === "hi" ? "hi" : "en";
  const ui = LBL?.[lang] ?? LBL?.en ?? {};

  const park = mpParks.find((p) => p.id === id);
  if (!park) return notFound();

  const name = t(park.name, lang);
  const district = t(park.district, lang);
  const desc = t(park.description, lang);
  const bestTime = t(park.bestTime, lang);
  const timingsSummer = t(park.timings?.summer, lang);
  const timingsWinter = t(park.timings?.winter, lang);

  const safariTypes = list(park.safariTypes, lang);
  const zones = list(park.zones, lang);
  const gates = list(park.entryGates, lang);
  const wildlife = list(park.wildlife, lang);

  const official = park.officialBooking;   // MPOnline / official portal
  const website = park.website;            // park की अपनी site
  const mapLink = park.mapLink;            // Google Maps

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Top bar */}
      <div className="mx-auto max-w-6xl px-4 py-5 flex items-center justify-between">
        <Link
          href={`/parks?lang=${lang}`}
          className="rounded-md border border-white/20 px-3 py-1.5 text-sm hover:bg-white/10"
        >
          ← {lang === "hi" ? "सभी पार्क" : "All Parks"}
        </Link>

        <div className="text-sm opacity-80">
          {lang === "hi" ? "The Jungle Journey" : "The Jungle Journey"}
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
          {/* Image */}
          <div className="aspect-[16/9] w-full overflow-hidden bg-black/50">
            {/* public/images/parks/*.jpg से इमेज */}
            <img
              src={park.image}
              alt={name}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          {/* Title + Buttons */}
          <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">
                {name}
              </h1>
              <p className="mt-1 text-sm text-white/70">{district}</p>
            </div>

            {/* ✅ Buttons: जो लिंक होगा वही दिखेगा */}
            <div className="flex flex-wrap items-center gap-2">
              {official && (
                <a
                  href={official}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium hover:bg-emerald-500"
                >
                  {lang === "hi" ? "Official Permit" : "Official Permit"}
                </a>
              )}

              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium hover:bg-indigo-500"
                >
                  {lang === "hi" ? "Park Website" : "Park Website"}
                </a>
              )}

              {mapLink && (
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-amber-600 px-3 py-2 text-sm font-medium hover:bg-amber-500"
                >
                  {lang === "hi" ? "Google Map" : "Google Map"}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* About */}
          <article className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h2 className="mb-2 text-lg font-semibold">
              {lang === "hi" ? "परिचय" : "About"}
            </h2>
            <p className="text-sm leading-relaxed text-white/80">{desc}</p>
          </article>

          {/* Quick facts */}
          <article className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h2 className="mb-2 text-lg font-semibold">
              {lang === "hi" ? "मुख्य जानकारी" : "Quick Facts"}
            </h2>

            <ul className="space-y-1.5 text-sm text-white/80">
              {bestTime && (
                <li>
                  <span className="font-medium">
                    {lang === "hi" ? "उपयुक्त समय:" : "Best Time:"}
                  </span>{" "}
                  {bestTime}
                </li>
              )}

              {(timingsSummer || timingsWinter) && (
                <li>
                  <span className="font-medium">
                    {lang === "hi" ? "समय:" : "Timings:"}
                  </span>{" "}
                  <span className="whitespace-pre-line">
                    {timingsSummer && (lang === "hi" ? `गर्मी: ${timingsSummer}` : `Summer: ${timingsSummer}`)}
                    {timingsSummer && timingsWinter ? "\n" : ""}
                    {timingsWinter && (lang === "hi" ? `सर्दी: ${timingsWinter}` : `Winter: ${timingsWinter}`)}
                  </span>
                </li>
              )}

              {!!safariTypes.length && (
                <li>
                  <span className="font-medium">
                    {lang === "hi" ? "सफारी प्रकार:" : "Safari Types:"}
                  </span>{" "}
                  {safariTypes.join(", ")}
                </li>
              )}

              {!!zones.length && (
                <li>
                  <span className="font-medium">
                    {lang === "hi" ? "ज़ोन्स:" : "Zones:"}
                  </span>{" "}
                  {zones.join(", ")}
                </li>
              )}

              {!!gates.length && (
                <li>
                  <span className="font-medium">
                    {lang === "hi" ? "प्रवेश द्वार:" : "Entry Gates:"}
                  </span>{" "}
                  {gates.join(", ")}
                </li>
              )}

              {!!wildlife.length && (
                <li>
                  <span className="font-medium">
                    {lang === "hi" ? "वन्यजीव:" : "Wildlife:"}
                  </span>{" "}
                  {wildlife.join(", ")}
                </li>
              )}
            </ul>
          </article>
        </div>
      </section>

      {/* Footer back link */}
      <div className="mx-auto max-w-6xl px-4 pb-12">
        <Link
          href={`/parks?lang=${lang}`}
          className="inline-block rounded-md border border-white/20 px-3 py-1.5 text-sm hover:bg-white/10"
        >
          ← {lang === "hi" ? "वापस सूची पर" : "Back to list"}
        </Link>
      </div>
    </main>
  );
}