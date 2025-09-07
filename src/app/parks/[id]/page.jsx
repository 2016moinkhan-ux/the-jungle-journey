// Server Component
import Image from "next/image";
import Link from "next/link";
import mpParks from "@/data/parks";

export default async function ParkDetailPage({ params, searchParams }) {
  const p = await params;
  const sp = await searchParams;

  const id = p?.id;
  const lang = sp?.lang === "hi" ? "hi" : "en";

  const park = mpParks.find((x) => x.id === id);
  if (!park) {
    return (
      <main className="px-6 py-8">
        <p className="text-red-600">Park not found.</p>
        <Link href={`/parks?lang=${lang}`} className="text-green-700 underline">
          ← Back to list
        </Link>
      </main>
    );
  }

  // Small helper: safely pick en/hi (or raw string/array) without importing anything
  const pick = (val) => {
    if (val == null) return "";
    if (Array.isArray(val)) return val; // already array of strings
    if (typeof val === "object" && ("en" in val || "hi" in val)) {
      return lang === "hi" ? (val.hi ?? val.en ?? "") : (val.en ?? val.hi ?? "");
    }
    return val; // plain string
  };

  const L = {
    backToList: lang === "hi" ? "पार्क सूची पर वापस" : "Back to Parks",
    bestTime:   lang === "hi" ? "सर्वोत्तम समय" : "Best time",
    safari:     lang === "hi" ? "सफारी" : "Safari",
    bookPermit: lang === "hi" ? "आधिकारिक परमिट बुक करें" : "Book official permit",
    zones:      lang === "hi" ? "ज़ोन्स" : "Zones",
    entryGates: lang === "hi" ? "प्रवेश द्वार" : "Entry gates",
    timings:    lang === "hi" ? "सफारी समय" : "Safari timings",
    wildlife:   lang === "hi" ? "मुख्य वन्यजीव" : "Key wildlife",
    reach:      lang === "hi" ? "कैसे पहुँचें" : "How to reach",
    tips:       lang === "hi" ? "विज़िटर टिप्स" : "Visitor tips",
    fee:        lang === "hi" ? "शुल्क/नोट्स" : "Fee / Notes",
    booking:    lang === "hi" ? "बुकिंग" : "Booking",
    seatTypes:  lang === "hi" ? "सीट प्रकार" : "Seat types",
  };

  const name = pick(park.name);
  const district = pick(park.district);
  const desc = pick(park.description);
  const best = pick(park.bestTime);
  const safari = (pick(park.safariTypes) || []).join(", ");

  const zones = pick(park.zones);
  const gates = pick(park.entryGates);
  const timings = pick(park.timings);
  const wildlife = pick(park.wildlife);
  const reach = pick(park.reach);
  const tips = pick(park.tips);
  const fee = pick(park.fee);
  const booking = park.booking || {};
  const seatList = pick(booking.seat);
  const bookingNotes = pick(booking.notes);
  const bookingUrl = booking.permitUrl || "https://forest.mponline.gov.in/";

  return (
    <main className="px-6 py-8">
      <Link
        href={`/parks?lang=${lang}`}
        className="text-green-700 hover:text-green-800 underline"
      >
        ← {L.backToList}
      </Link>

      {/* HERO */}
      <section className="mt-4 overflow-hidden rounded-2xl relative">
        <Image
          src={park.image || "/images/parks/placeholder.jpg"}
          alt={name}
          width={1600}
          height={800}
          className="h-[420px] w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h1 className="text-3xl md:text-4xl font-semibold">{name}</h1>
          {district && (
            <p className="mt-1 text-sm opacity-90">{district}</p>
          )}
          {desc && (
            <p className="mt-3 max-w-4xl text-sm md:text-base leading-relaxed">
              {desc}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {best && (
              <span className="rounded-full bg-white/90 text-gray-900 px-3 py-1 text-xs md:text-sm">
                {L.bestTime}: {best}
              </span>
            )}
            {safari && (
              <span className="rounded-full bg-white/90 text-gray-900 px-3 py-1 text-xs md:text-sm">
                {L.safari}: {safari}
              </span>
            )}
          </div>

          <div className="mt-4">
            <a
              href={bookingUrl}
              target="_blank"
              className="inline-block rounded-lg bg-emerald-600 hover:bg-emerald-700 px-4 py-2 text-sm font-medium"
            >
              {L.bookPermit}
            </a>
          </div>
        </div>
      </section>

      {/* DETAIL SECTIONS */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <DetailCard title={L.zones} items={zones} />
        <DetailCard title={L.entryGates} items={gates} />

        <DetailCard
          title={L.timings}
          paragraphs={
            timings && typeof timings === "object"
              ? [
                  (timings.summer && (lang === "hi" ? `ग्रीष्म: ${timings.summer}` : `Summer: ${timings.summer}`)),
                  (timings.winter && (lang === "hi" ? `शीत: ${timings.winter}` : `Winter: ${timings.winter}`)),
                ].filter(Boolean)
              : timings
          }
        />

        <DetailCard title={L.wildlife} items={wildlife} />

        <DetailCard title={L.reach} paragraphs={reach} />
        <DetailCard title={L.tips} items={Array.isArray(tips) ? tips : tips ? [tips] : []} />
        <DetailCard title={L.fee} paragraphs={fee} />

        {/* Booking block */}
        {(seatList || bookingNotes) && (
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h3 className="font-semibold mb-3">{L.booking}</h3>
            {seatList && (
              <>
                <div className="text-sm mb-2 opacity-70">{L.seatTypes}</div>
                <Pills items={Array.isArray(seatList) ? seatList : [seatList]} />
              </>
            )}
            {bookingNotes && (
              <p className="mt-3 text-sm text-gray-700">
                {bookingNotes}
              </p>
            )}
            <a
              href={bookingUrl}
              target="_blank"
              className="mt-4 inline-block text-green-700 underline"
            >
              {L.bookPermit} →
            </a>
          </div>
        )}
      </div>

      <p className="mt-8 text-sm text-gray-500">Detail page (simple & stable)</p>
    </main>
  );
}

/* ---------- small UI helpers ---------- */

function DetailCard({ title, items, paragraphs }) {
  const hasList = Array.isArray(items) && items.length > 0;
  const hasParaArr = Array.isArray(paragraphs) && paragraphs.length > 0;
  const hasPara = typeof paragraphs === "string" && paragraphs.trim().length > 0;

  if (!hasList && !hasParaArr && !hasPara) return null;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      <h3 className="font-semibold mb-3">{title}</h3>
      {hasList && <Pills items={items} />}
      {hasParaArr &&
        paragraphs.map((p, idx) => (
          <p key={idx} className="text-sm text-gray-700 mb-2">
            {p}
          </p>
        ))}
      {hasPara && <p className="text-sm text-gray-700">{paragraphs}</p>}
    </div>
  );
}

function Pills({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it, idx) => (
        <span
          key={idx}
          className="rounded-full bg-gray-100 px-3 py-1 text-xs md:text-sm text-gray-800"
        >
          {it}
        </span>
      ))}
    </div>
  );
}