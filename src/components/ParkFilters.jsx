// src/components/ParkFilters.jsx
"use client";

import { useMemo } from "react";

// helper: {en,hi} object या string —> localized string
const pick = (v, lang) =>
  typeof v === "string" ? v : (v?.[lang] || v?.en || "");

// client-safe labels (सिर्फ strings + fallbacks)
const safeLabels = (L, lang) => ({
  searchPh:
    L?.searchPh ||
    (lang === "hi" ? "खोजें (उदा. पेंच)" : "Search park (e.g. Pench)"),
  districtAll: L?.districtAll || (lang === "hi" ? "सभी ज़िले" : "All"),
  safariAll: L?.safariAll || (lang === "hi" ? "सभी सफ़ारी प्रकार" : "All"),
  clearFilters: L?.clearFilters || (lang === "hi" ? "फ़िल्टर साफ़ करें" : "Clear filters"),
});

export default function ParkFilters({
  q,
  setQ,
  district,
  setDistrict,
  safari,
  setSafari,
  items = [],
  labels,
  lang = "en",
}) {
  const L = safeLabels(labels, lang);

  // options (language-aware)
  const { districts, safaris } = useMemo(() => {
    const dset = new Set();
    const sset = new Set();

    items.forEach((p) => {
      const d = pick(p.district, lang)?.trim();
      if (d) dset.add(d);

      const sArr = Array.isArray(p.safariTypes)
        ? p.safariTypes
        : p.safariTypes?.[lang] || p.safariTypes?.en || [];
      (sArr || []).forEach((s) => {
        const v = typeof s === "string" ? s : pick(s, lang);
        if (v) sset.add(v);
      });
    });

    return {
      districts: ["", ...Array.from(dset).sort((a, b) => a.localeCompare(b))],
      safaris: ["", ...Array.from(sset).sort((a, b) => a.localeCompare(b))],
    };
  }, [items, lang]);

  const somethingActive = Boolean(
    (q && q.trim() !== "") || (district && district !== "") || (safari && safari !== "")
  );

  const handleClear = () => {
    setQ("");
    setDistrict("");
    setSafari("");
  };

  return (
    <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-3 items-start">
      {/* Search */}
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={L.searchPh}
        className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
      />

      {/* District */}
      <select
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
      >
        {districts.map((d, i) => (
          <option key={i} value={d || ""}>
            {d || L.districtAll}
          </option>
        ))}
      </select>

      {/* Safari type + Clear */}
      <div className="flex gap-3">
        <select
          value={safari}
          onChange={(e) => setSafari(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
        >
          {safaris.map((s, i) => (
            <option key={i} value={s || ""}>
              {s || L.safariAll}
            </option>
          ))}
        </select>

        {/* Clear filters */}
        <button
          type="button"
          onClick={handleClear}
          disabled={!somethingActive}
          className={`shrink-0 rounded-xl px-3 py-2 border transition
            ${somethingActive
              ? "border-emerald-300 text-emerald-700 hover:bg-emerald-50"
              : "border-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          aria-label={L.clearFilters}
          title={L.clearFilters}
        >
          {L.clearFilters}
        </button>
      </div>
    </div>
  );
}