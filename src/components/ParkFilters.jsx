// src/components/ParkFilters.jsx
"use client";

import { useMemo } from "react";

/** helper: {en,hi} या string → चुनी हुई भाषा की string */
const pick = (v, lang) =>
  typeof v === "string" ? v : (v?.[lang] || v?.en || "");

/** helper: list normalize */
const list = (v, lang) => {
  const arr = Array.isArray(v) ? v : v?.[lang] || v?.en || [];
  return (arr || []).map((x) => (typeof x === "string" ? x : pick(x, lang)));
};

/**
 * Props (client-safe)
 * - q, setQ                       → search text state
 * - district, setDistrict         → selected district
 * - safari, setSafari             → selected safari type
 * - parks OR items                → array of park objects
 * - lang                          → "en" | "hi"
 */
export default function ParkFilters(props) {
  const {
    q,
    setQ,
    district,
    setDistrict,
    safari,
    setSafari,
    parks,
    items,
    lang = "en",
  } = props;

  const base = Array.isArray(parks) ? parks : Array.isArray(items) ? items : [];

  // labels (client-safe)
  const L = {
    searchPh:
      lang === "hi" ? "खोजें (उदा. पेंच)" : "Search park (e.g. Pench)",
    districtAll: lang === "hi" ? "सभी ज़िले" : "All districts",
    safariAll: lang === "hi" ? "सभी सफ़ारी" : "All safaris",
  };

  // options: districts & safaris (language-aware)
  const { districts, safaris } = useMemo(() => {
    const dset = new Set();
    const sset = new Set();

    base.forEach((p) => {
      // district
      const d = pick(p?.district, lang)?.trim();
      if (d) dset.add(d);

      // safaris
      list(p?.safariTypes, lang).forEach((s) => {
        const v = (s || "").trim();
        if (v) sset.add(v);
      });
    });

    return {
      districts: ["", ...Array.from(dset).sort((a, b) => a.localeCompare(b))],
      safaris: ["", ...Array.from(sset).sort((a, b) => a.localeCompare(b))],
    };
  }, [base, lang]);

  return (
    <div className="mb-6 grid gap-3 sm:grid-cols-3">
      {/* Search */}
      <input
        type="text"
        value={q}
        onChange={(e) => setQ?.(e.target.value)}
        placeholder={L.searchPh}
        className="w-full rounded-xl border border-emerald-800/30 bg-emerald-950/40 px-3 py-2 text-emerald-50 placeholder:text-emerald-200/60 focus:border-emerald-400/60 focus:outline-none"
      />

      {/* District */}
      <select
        value={district}
        onChange={(e) => setDistrict?.(e.target.value)}
        className="w-full rounded-xl border border-emerald-800/30 bg-emerald-950/40 px-3 py-2 text-emerald-50 focus:border-emerald-400/60 focus:outline-none"
      >
        <option value="">{L.districtAll}</option>
        {districts
          .filter((d) => d) // remove the leading ""
          .map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
      </select>

      {/* Safari type */}
      <select
        value={safari}
        onChange={(e) => setSafari?.(e.target.value)}
        className="w-full rounded-xl border border-emerald-800/30 bg-emerald-950/40 px-3 py-2 text-emerald-50 focus:border-emerald-400/60 focus:outline-none"
      >
        <option value="">{L.safariAll}</option>
        {safaris
          .filter((s) => s) // remove the leading ""
          .map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
      </select>
    </div>
  );
}