"use client";

import { useMemo, useState } from "react";
import ParkCard from "@/components/ParkCard";
import ParkFilters from "@/components/ParkFilters";

// Helper: {en,hi} ya plain string → selected language string
const pick = (v, lang) =>
  typeof v === "string" ? v : v?.[lang] || v?.en || "";

/**
 * ParksClient
 * props:
 *  - parks: array of park objects
 *  - lang: "en" | "hi"
 */
export default function ParksClient({ parks = [], lang = "en" }) {
  const [q, setQ] = useState("");
  const [district, setDistrict] = useState("");
  const [safari, setSafari] = useState("");

  // Filtered parks (memoized)
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return parks.filter((p) => {
      const name = pick(p.name, lang).toLowerCase();
      const dist = pick(p.district, lang).toLowerCase();

      const sArr = Array.isArray(p.safariTypes)
        ? p.safariTypes
        : p.safariTypes?.[lang] || p.safariTypes?.en || [];

      const sStr = (sArr || [])
        .map((s) => (typeof s === "string" ? s : pick(s, lang)))
        .join(" ")
        .toLowerCase();

      const okQ = query ? name.includes(query) || dist.includes(query) : true;
      const okD = district ? dist === district.toLowerCase() : true;
      const okS = safari ? sStr.includes(safari.toLowerCase()) : true;

      return okQ && okD && okS;
    });
  }, [parks, lang, q, district, safari]);

  return (
    <section className="space-y-5 md:space-y-6">
      {/* Filters section (anchor-ready for /parks#safaris) */}
      <div id="safaris">
        <ParkFilters
          q={q}
          setQ={setQ}
          district={district}
          setDistrict={setDistrict}
          safari={safari}
          setSafari={setSafari}
          parks={parks}
          lang={lang}
        />
      </div>

      {/* Small summary / count */}
      + <div className="mt-2 md:mt-3 text-sm text-neutral-600">
        {lang === "hi" ? "कुल परिणाम: " : "Results: "}
        <span className="font-medium text-neutral-900">{filtered.length}</span>
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-center">
          <p className="text-neutral-700">
            {lang === "hi"
              ? "कोई परिणाम नहीं मिला। फ़िल्टर बदलकर देखें।"
              : "No results found. Try adjusting the filters."}
          </p>
        </div>
      )}

      {/* Cards grid */}
      {filtered.length > 0 && (
        <div className="grid gap-5 md:gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p) => (
            <ParkCard key={p.id} park={p} lang={lang} />
          ))}
        </div>
      )}
    </section>
  );
}