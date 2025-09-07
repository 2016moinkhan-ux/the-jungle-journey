// src/components/ParkFilters.jsx
"use client";

import { useMemo, useState } from "react";

/**
 * Client filter bar
 * props:
 *  - items: Park[]
 *  - labels: { searchPh, districtAll, safariAll }  // strings only
 *  - lang: "en" | "hi"
 *  - children: (filteredItems: Park[]) => ReactNode
 */
export default function ParkFilters({ items = [], labels, lang = "en", children }) {
  const [q, setQ] = useState("");
  const [district, setDistrict] = useState("");
  const [safari, setSafari] = useState("");

  // unique district options from data (localized)
  const districtOptions = useMemo(() => {
    const set = new Set();
    items.forEach((p) => {
      const d =
        (p?.district && (p.district[lang] ?? p.district.en ?? p.district.hi)) ||
        (typeof p?.district === "string" ? p.district : "");
      if (d && d.trim()) set.add(d.trim());
    });
    return ["", ...Array.from(set)]; // "" => All
  }, [items, lang]);

  // unique safari options from data (localized)
  const safariOptions = useMemo(() => {
    const set = new Set();
    items.forEach((p) => {
      const raw =
        (p?.safariTypes && (p.safariTypes[lang] ?? p.safariTypes.en ?? p.safariTypes.hi)) ||
        p?.safariTypes ||
        [];
      const arr = Array.isArray(raw) ? raw : String(raw).split(/[,\|]/);
      arr
        .map((s) => String(s).trim())
        .filter(Boolean)
        .forEach((s) => set.add(s));
    });
    return ["", ...Array.from(set)];
  }, [items, lang]);

  // apply filters
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return items.filter((p) => {
      // name/desc search
      const name =
        (p?.name && (p.name[lang] ?? p.name.en ?? p.name.hi)) ||
        (typeof p?.name === "string" ? p.name : "");
      const desc =
        (p?.description && (p.description[lang] ?? p.description.en ?? p.description.hi)) ||
        (typeof p?.description === "string" ? p.description : "");

      const matchesQ =
        !query ||
        String(name).toLowerCase().includes(query) ||
        String(desc).toLowerCase().includes(query) ||
        String(p?.id ?? "").toLowerCase().includes(query);

      // district match
      const dLocal =
        (p?.district && (p.district[lang] ?? p.district.en ?? p.district.hi)) ||
        (typeof p?.district === "string" ? p.district : "");
      const matchesDistrict = !district || String(dLocal) === district;

      // safari match
      const raw =
        (p?.safariTypes && (p.safariTypes[lang] ?? p.safariTypes.en ?? p.safariTypes.hi)) ||
        p?.safariTypes ||
        [];
      const arr = Array.isArray(raw) ? raw : String(raw).split(/[,\|]/);
      const hasSafari = arr.map((s) => String(s).trim());
      const matchesSafari = !safari || hasSafari.includes(safari);

      return matchesQ && matchesDistrict && matchesSafari;
    });
  }, [items, q, district, safari, lang]);

  return (
    <>
      {/* Filters row */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={labels?.searchPh || "Search..."}
          className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2"
        />

        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2"
        >
          <option value="">{labels?.districtAll || "All"}</option>
          {districtOptions.map((opt, i) =>
            opt ? (
              <option key={`${opt}-${i}`} value={opt}>
                {opt}
              </option>
            ) : null
          )}
        </select>

        <select
          value={safari}
          onChange={(e) => setSafari(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2"
        >
          <option value="">{labels?.safariAll || "All"}</option>
          {safariOptions.map((opt, i) =>
            opt ? (
              <option key={`${opt}-${i}`} value={opt}>
                {opt}
              </option>
            ) : null
          )}
        </select>
      </div>

      {/* Render filtered list */}
      {typeof children === "function" ? children(filtered) : null}
    </>
  );
}