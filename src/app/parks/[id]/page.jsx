// src/app/parks/[id]/page.jsx
import mpParks from "@/data/parks";

// helpers
const pick = (v, lang) =>
  typeof v === "string" ? v : (v?.[lang] || v?.en || "");

const list = (v, lang) => {
  const arr = Array.isArray(v) ? v : v?.[lang] || v?.en || [];
  return (arr || []).map((x) => (typeof x === "string" ? x : pick(x, lang)));
};

const LBL = (lang) => ({
  backToList: lang === "hi" ? "पार्क सूची में लौटें" : "Back to Parks",
  bestTime: lang === "hi" ? "उत्तम समय" : "Best time",
  safari: lang === "hi" ? "सफारी" : "Safari",
  zones: lang === "hi" ? "ज़ोन" : "Zones",
  entryGates: lang === "hi" ? "प्रवेश द्वार" : "Entry gates",
  timings: lang === "hi" ? "सफारी समय" : "Safari timings",
  wildlife: lang === "hi" ? "मुख्य वन्यजीव" : "Key wildlife",
  reach: lang === "hi" ? "कैसे पहुँचें" : "How to reach",
  tips: lang === "hi" ? "विज़िटर टिप्स" : "Visitor tips",
  fee: lang === "hi" ? "फीस/परमिट" : "Fees / Permits",
  bookPermit: lang === "hi" ? "आधिकारिक परमिट" : "Book official permit",
});

export default async function ParkDetailPage(props) {
  // ✅ Next 15: props, searchParams, params — तीनों को await-सुरक्षित तरीके से पढ़ो
  const awaited = await props;
  const spRaw = await awaited.searchParams;
  const pRaw = await awaited.params;

  // searchParams कभी object (with .lang) तो कभी URLSearchParams (with .get) हो सकता है
  const spLang =
    typeof spRaw?.get === "function" ? spRaw.get("lang") : spRaw?.lang;
  const lang = spLang === "hi" ? "hi" : "en";
  const L = LBL(lang);

  // params भी thenable/object हो सकता है
  const id = (pRaw && (await pRaw).id) ?? pRaw?.id ?? "";
  const park = mpParks.find((pk) => pk.id === id);

  if (!park) {
    return (
      <main className="px-6 py-10">
        <a href={`/parks?lang=${lang}`} className="text-emerald-700">
          ← {L.backToList}
        </a>
        <h2 className="mt-6 text-2xl font-semibold">Not found</h2>
      </main>
    );
  }

  // normalize fields
  const name = pick(park.name, lang);
  const district = pick(park.district, lang);
  const desc = pick(park.description, lang);
  const best = pick(park.bestTime, lang);
  const safariText = list(park.safariTypes, lang).join(", ");
  const zones = list(park.zones, lang);
  const gates = list(park.entryGates, lang);
  const wildlife = list(park.wildlife, lang);
  const reach = pick(park.howToReach, lang);
  const tips = list(park.tips, lang);
  const fee = pick(park.fee, lang);
  const bookingUrl = pick(park.bookingUrl, lang) || "";

  // timings may be string | array | {summer,winter}
  const tRaw = park.timings?.[lang] ?? park.timings?.en ?? park.timings;
  const timingsParas = Array.isArray(tRaw)
    ? tRaw
    : tRaw && typeof tRaw === "object"
    ? Object.entries(tRaw)
        .filter(([, v]) => !!v)
        .map(([k, v]) => {
          const key =
            k.toLowerCase() === "summer"
              ? lang === "hi"
                ? "ग्रीष्मकाल"
                : "Summer"
              : k.toLowerCase() === "winter"
              ? lang === "hi"
                ? "शीतकाल"
                : "Winter"
              : k;
          return `${key}: ${v}`;
        })
    : tRaw
    ? [tRaw]
    : [];

  return (
    <main className="px-6 py-8">
      <a
        href={`/parks?lang=${lang}`}
        className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800"
      >
        <span aria-hidden>←</span> {L.backToList}
      </a>

      {/* Hero */}
      <section className="relative mt-6 overflow-hidden rounded-2xl">
        <img
          src={park.image}
          alt={name}
          className="h-[420px] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-x-6 bottom-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow">
            {name}
          </h1>
          <p className="mt-1 text-white/85">{district}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {best && (
              <span className="rounded-full bg-white/90 px-3 py-1 text-sm text-gray-900">
                {L.bestTime}: {best}
              </span>
            )}
            {safariText && (
              <span className="rounded-full bg-white/90 px-3 py-1 text-sm text-gray-900">
                {L.safari}: {safariText}
              </span>
            )}
          </div>

          {bookingUrl && (
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
            >
              {L.bookPermit}
            </a>
          )}
        </div>
      </section>

      {desc && <p className="mt-6 text-gray-800 max-w-4xl">{desc}</p>}

      {/* Sections */}
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Card title={`🗺️ ${L.zones}`} pills={zones} />
        <Card title={`🚪 ${L.entryGates}`} pills={gates} />
        <Card title={`⏱️ ${L.timings}`} paragraphs={timingsParas} />
        <Card title={`🐾 ${L.wildlife}`} pills={wildlife} />
        <Card title={`🧭 ${L.reach}`} paragraphs={[reach]} />
        <Card title={`💡 ${L.tips}`} bullets={tips} />
        {fee && <Card title={`💳 ${L.fee}`} paragraphs={[fee]} />}
      </div>
    </main>
  );
}

// small reusable detail card
function Card({ title, pills = [], bullets = [], paragraphs = [] }) {
  const hasPills = pills && pills.length > 0;
  const hasBullets = bullets && bullets.length > 0;
  const hasParas = paragraphs && paragraphs.filter(Boolean).length > 0;

  if (!hasPills && !hasBullets && !hasParas) return null;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="font-semibold mb-3">{title}</h3>

      {hasPills && (
        <div className="flex flex-wrap gap-2">
          {pills.map((it, idx) => (
            <span
              key={idx}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800"
            >
              {it}
            </span>
          ))}
        </div>
      )}

      {hasBullets && (
        <ul className="list-disc pl-5 space-y-1 text-gray-800">
          {bullets.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      )}

      {hasParas && (
        <div className="space-y-2 text-gray-800">
          {paragraphs.filter(Boolean).map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      )}
    </div>
  );
}