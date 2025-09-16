// src/app/parks/[id]/page.jsx

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import mpParks from "@/data/parks";
import { LBL } from "@/i18n/lang";

/* ---------------- Helpers (lang-aware) ---------------- */
const t = (val, lang) =>
  typeof val === "string" ? val : val?.[lang] ?? val?.en ?? "";
const list = (val, lang) => {
  const arr =
    Array.isArray(val) ? val :
    Array.isArray(val?.[lang]) ? val[lang] :
    Array.isArray(val?.en) ? val.en : [];
  return arr;
};

/* ---------------- SEO / Meta (HI + EN) ---------------- */
const siteURL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateMetadata({ params, searchParams }) {
  // In Next 13+/15, params & searchParams can be async—await them:
  const { id } = await params;
  const { lang: langParam } = await searchParams;

  const lang = langParam === "hi" ? "hi" : "en";
  const park = mpParks.find((p) => p.id === id);

  if (!park) {
    const title =
      lang === "hi"
        ? `पार्क नहीं मिला | The Jungle Journey`
        : `Park not found | The Jungle Journey`;
    const description =
      lang === "hi"
        ? "मध्य प्रदेश के राष्ट्रीय उद्यान और सफारी के बारे में जानकारी।"
        : "Explore Madhya Pradesh’s national parks and safaris.";
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `${siteURL}/parks/${id}?lang=${lang}`,
        images: [`${siteURL}/images/og/default.jpg`],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [`${siteURL}/images/og/default.jpg`],
      },
      alternates: {
        canonical: `${siteURL}/parks/${id}?lang=${lang}`,
      },
    };
  }

  const name = t(park.name, lang);
  const summary = t(park.description, lang);

  const title =
    lang === "hi"
      ? `${name} | द जंगल जर्नी`
      : `${name} | The Jungle Journey`;
  const description =
    (summary && summary.slice(0, 150)) ||
    (lang === "hi"
      ? "मध्य प्रदेश के राष्ट्रीय उद्यान, सफारी और यात्रा की जानकारी।"
      : "Discover MP’s jungles, safaris and best time to visit.");

  const imgFile = park.image || `/images/parks/${park.id}.jpg`;
  const ogImageAbs = imgFile.startsWith("http")
    ? imgFile
    : `${siteURL}${imgFile}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteURL}/parks/${park.id}?lang=${lang}`,
      type: "article",
      images: [
        {
          url: ogImageAbs,
          width: 1200,
          height: 630,
          alt: name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageAbs],
    },
    alternates: {
      canonical: `${siteURL}/parks/${park.id}?lang=${lang}`,
    },
  };
}

/* ---------------- Page UI (unchanged design) ---------------- */
export default function ParkDetailPage({ params, searchParams }) {
  // ✅ Next 15 safe unwrap
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

  const official = park.officialBooking;
  const website = park.website;
  const mapLink = park.mapLink;

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
        <div className="text-sm opacity-80">The Jungle Journey</div>
      </div>

      {/* Hero card */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-2xl card-surface">
          {/* Image + overlay */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
            <img
              src={park.image}
              alt={name}
              className="h-full w-full object-cover"
              loading="eager"
            />

            {/* dark gradient veil (readable text) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Animated text overlay */}
            <div className="absolute left-5 right-5 bottom-5 md:left-7 md:right-7 md:bottom-6">
              <div className="fade-slide-in text-shadow-soft">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  {name}
                </h1>
                <p className="mt-1 text-sm md:text-base text-white/80">
                  {district}
                </p>

                {/* Quick chips on image */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {bestTime && (
                    <span className="chip chip-glow">
                      {lang === "hi" ? "उपयुक्त समय" : "Best time"}: {bestTime}
                    </span>
                  )}
                  {!!safariTypes.length && (
                    <span className="chip chip-glow">
                      {lang === "hi" ? "सफारी" : "Safari"}: {safariTypes.join(", ")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Buttons row (below image) */}
          <div className="flex flex-wrap items-center gap-2 p-5 md:items-center md:justify-end">
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
      </section>

      {/* Details Grid */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* About */}
          <article className="card-surface p-6">
            <h2 className="mb-2 text-lg font-semibold">
              {lang === "hi" ? "परिचय" : "About"}
            </h2>
            <p className="text-sm leading-relaxed text-white/80">{desc}</p>
          </article>

          {/* Quick facts */}
          <article className="card-surface p-6">
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
                    {timingsSummer &&
                      (lang === "hi"
                        ? `गर्मी: ${timingsSummer}`
                        : `Summer: ${timingsSummer}`)}
                    {timingsSummer && timingsWinter ? "\n" : ""}
                    {timingsWinter &&
                      (lang === "hi"
                        ? `सर्दी: ${timingsWinter}`
                        : `Winter: ${timingsWinter}`)}
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
                    {lang === "hi" ? "прवेश द्वार:" : "Entry Gates:"}
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