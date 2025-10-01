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
 * - q, setQ
 * - district, setDistrict
 * - safari, setSafari
 * - parks OR items
 * - lang: "en" | "hi"
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

  const L = {
    searchLabel: lang === "hi" ? "खोजें" : "Search",
    searchPh: lang === "hi" ? "खोजें (उदा. पेंच)" : "Search park (e.g. Pench)",
    districtLabel: lang === "hi" ? "ज़िला" : "District",
    districtAll: lang === "hi" ? "सभी ज़िले" : "All districts",
    safariLabel: lang === "hi" ? "सफ़ारी" : "Safari",
    safariAll: lang === "hi" ? "सभी सफ़ारी" : "All safaris",
  };

  // options: districts & safaris (language-aware)
  const { districts, safaris } = useMemo(() => {
    const dset = new Set();
    const sset = new Set();

    base.forEach((p) => {
      const d = pick(p?.district, lang)?.trim();
      if (d) dset.add(d);

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

  const inputBase =
    "w-full h-10 rounded-lg bg-white border border-neutral-300 px-3 text-sm text-neutral-800 placeholder:text-neutral-400 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  const selectBase =
    "w-full h-10 rounded-lg bg-white border border-neutral-300 px-3 text-sm text-neutral-800 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-3 sm:p-4 shadow-sm">
      <div className="grid gap-3 sm:grid-cols-3">
        {/* Search */}
        <div className="flex flex-col gap-1">
          <label htmlFor="park-search" className="text-xs text-neutral-600">
            {L.searchLabel}
          </label>
          <input
            id="park-search"
            type="text"
            value={q}
            onChange={(e) => setQ?.(e.target.value)}
            placeholder={L.searchPh}
            autoCapitalize="none"
            autoCorrect="off"
            className={inputBase}
          />
        </div>

        {/* District */}
        <div className="flex flex-col gap-1">
          <label htmlFor="park-district" className="text-xs text-neutral-600">
            {L.districtLabel}
          </label>
          <select
            id="park-district"
            value={district}
            onChange={(e) => setDistrict?.(e.target.value)}
            className={selectBase}
          >
            <option value="">{L.districtAll}</option>
            {districts
              .filter((d) => d)
              .map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
          </select>
        </div>

        {/* Safari */}
        <div className="flex flex-col gap-1">
          <label htmlFor="park-safari" className="text-xs text-neutral-600">
            {L.safariLabel}
          </label>
          <select
            id="park-safari"
            value={safari}
            onChange={(e) => setSafari?.(e.target.value)}
            className={selectBase}
          >
            <option value="">{L.safariAll}</option>
            {safaris
              .filter((s) => s)
              .map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
}