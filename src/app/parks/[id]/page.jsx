// src/app/parks/[id]/page.jsx
import Link from "next/link";
import mpParks from "@/data/parks";
import { LBL } from "@/i18n/lang";

export const revalidate = 0; // dev में fresh

export default async function ParkDetailPage({ params, searchParams }) {
  // ✅ Next 15: unwrap Promises
  const { id = "" } = (await params) ?? {};
  const sp = (await searchParams) ?? {};

  // ✅ lang निकालो (URLSearchParams या plain object—दोनों case safe)
  const rawLang = typeof sp.get === "function" ? sp.get("lang") : sp?.lang;
  const lang = rawLang === "hi" ? "hi" : "en";

  // ✅ park ढूंढो
  const park = mpParks.find((p) => p.id === id);
  if (!park) {
    // 404 page पर भेज दो
    return (
      <main className="min-h-[60vh] grid place-items-center text-white">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-2">Not found</h1>
          <p className="opacity-70 mb-6">We couldn’t find this park.</p>
          <Link
            href={`/parks?lang=${lang}`}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 hover:bg-emerald-500"
          >
            ← {LBL[lang].backToParks}
          </Link>
        </div>
      </main>
    );
  }

  // ✅ labels/texts
  const ui = LBL[lang];
  const title = park.name?.[lang] || park.name?.en || park.id;
  const desc = park.description?.[lang] || park.description?.en || "";
  const bestTime = park.bestTime?.[lang] || park.bestTime?.en || "";
  const safariList = (park.safariTypes?.[lang] || park.safariTypes?.en || []).join(", ");
  const district = park.district?.[lang] || park.district?.en || "";
  const zones = (park.zones?.[lang] || park.zones?.en || []).join(", ");
  const gates = (park.entryGates?.[lang] || park.entryGates?.en || []).join(", ");
  const summer = park.timings?.summer?.[lang] || park.timings?.summer?.en || "";
  const winter = park.timings?.winter?.[lang] || park.timings?.winter?.en || "";
  const wildlife = (park.wildlife?.[lang] || park.wildlife?.en || []).join(", ");
  const howToReach = park.howToReach?.[lang] || park.howToReach?.en || "";
  const tips = park.tips?.[lang] || park.tips?.en || [];
  const booking =
    park.officialBooking ||
    park.bookingUrl?.[lang] ||
    park.bookingUrl?.en ||
    "https://forest.mponline.gov.in";

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-green-950 to-black text-white">
      {/* Top bar back link */}
      <div className="mx-auto max-w-6xl px-4 pt-5">
        <Link
          href={`/parks?lang=${lang}`}
          className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200"
        >
          ← {ui.backToParks}
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-green-900/40 to-green-950/60">
          <div
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage: `url(${park.image})`,
              backgroundSize: "cover",
              backgroundPosition: park.imagePos || "50% 40%",
              filter: "brightness(0.8)",
            }}
          />
          <div className="relative z-10 p-6 md:p-10">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow">
              {title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-3">
              {bestTime && (
                <span className="px-3 py-1 rounded-full bg-emerald-900/60 text-sm">
                  {ui.bestTime}: {bestTime}
                </span>
              )}
              {safariList && (
                <span className="px-3 py-1 rounded-full bg-emerald-900/60 text-sm">
                  {ui.safari}: {safariList}
                </span>
              )}
            </div>

            <div className="mt-5">
              <a
                href={booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 font-medium hover:bg-emerald-500"
              >
                {ui.bookOfficial} ↗
              </a>
            </div>

            {desc && (
              <p className="mt-6 max-w-4xl text-white/90 leading-relaxed">{desc}</p>
            )}
          </div>
        </div>
      </section>

      {/* Facts grid */}
      <section className="mx-auto max-w-6xl px-4 py-8 grid gap-5 md:grid-cols-2">
        <FactCard label={ui.district} value={district} />
        <FactCard label={ui.zones} value={zones} />
        <FactCard label={ui.entryGates} value={gates} />
        <FactCard label={ui.wildlife} value={wildlife} />
        <FactCard label={ui.timings.summer} value={summer} />
        <FactCard label={ui.timings.winter} value={winter} />
        <FactCard label={ui.howToReach} value={howToReach} span />
        {Array.isArray(tips) && tips.length > 0 && (
          <FactCard
            label={ui.tips}
            value={
              <ul className="list-disc pl-5 space-y-1">
                {tips.map((t, i) => (
                  <li key={i} className="text-white/90">
                    {t}
                  </li>
                ))}
              </ul>
            }
            span
          />
        )}
      </section>
    </main>
  );
}

/* ------------------ Small presentational card ------------------ */
function FactCard({ label, value, span = false }) {
  if (!value) return null;
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-green-900/30 p-5 ${
        span ? "md:col-span-2" : ""
      }`}
    >
      <div className="text-white/60 text-sm mb-2">{label}</div>
      {typeof value === "string" ? (
        <div className="text-white/90">{value}</div>
      ) : (
        value
      )}
    </div>
  );
}