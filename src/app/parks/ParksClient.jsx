"use client";

import { useMemo, useState } from "react";
import ParkCard from "@/components/ParkCard";
import ParkFilters from "@/components/ParkFilters";

// helper: {en,hi} object या string —> localized string
const pick = (v, lang) =>
  typeof v === "string" ? v : (v?.[lang] || v?.en || "");

// client-safe labels (सिर्फ strings + fallbacks)
const safeLabels = (L, lang) => ({
  appTitle: L?.appTitle || "The Jungle Journey",
  listTitle:
    L?.listTitle ||
    (lang === "hi" ? "मध्य प्रदेश — राष्ट्रीय उद्यान" : "Madhya Pradesh — National Parks"),
  totalLabel: L?.totalLabel || (lang === "hi" ? "कुल" : "Total"),
  searchPh: L?.searchPh || (lang === "hi" ? "खोजें (उदा. पेंच)" : "Search park (e.g. Pench)"),
  districtAll: L?.districtAll || (lang === "hi" ? "सभी ज़िले" : "All districts"),
  safariAll: L?.safariAll || (lang === "hi" ? "सभी सफ़ारी प्रकार" : "All safaris"),
  bestTime: L?.bestTime || (lang === "hi" ? "उत्तम समय" : "Best time"),
  safari: L?.safari || (lang === "hi" ? "सफारी" : "Safari"),
  viewDetails: L?.viewDetails || (lang === "hi" ? "विवरण देखें" : "View details"),
  bookPermit: L?.bookPermit || (lang === "hi" ? "आधिकारिक परमिट" : "Book official permit"),
  backToList: L?.backToList || (lang === "hi" ? "लौटें" : "Back to Parks"),
});

export default function ParksClient({ items = [], labels, lang = "en" }) {
  const L = safeLabels(labels, lang);

  // UI state
  const [q, setQ] = useState("");
  const [district, setDistrict] = useState(""); // "" means ALL
  const [safari, setSafari] = useState("");     // "" means ALL

  // derive options (language-aware)
  const { districts, safaris } = useMemo(() => {
    const dset = new Set();
    const sset = new Set();

    items.forEach((p) => {
      const d = pick(p.district, lang)?.trim();
      if (d) dset.add(d);

      const sArr =
        Array.isArray(p.safariTypes)
          ? p.safariTypes
          : p.safariTypes?.[lang] || p.safariTypes?.en || [];
      (sArr || []).forEach((s) => {
        const v = typeof s === "string" ? s : pick(s, lang);
        if (v) sset.add(v);
      });
    });

    return {
      districts: Array.from(dset).sort((a, b) => a.localeCompare(b)),
      safaris: Array.from(sset).sort((a, b) => a.localeCompare(b)),
    };
  }, [items, lang]);

  // filter list (language-aware)
  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();

    return items.filter((p) => {
      const name = pick(p.name, lang).toLowerCase();
      const dist = pick(p.district, lang).toLowerCase();

      // safari string join (for search/filter)
      const sArr =
        Array.isArray(p.safariTypes)
          ? p.safariTypes
          : p.safariTypes?.[lang] || p.safariTypes?.en || [];
      const sStr = (sArr || [])
        .map((s) => (typeof s === "string" ? s : pick(s, lang)))
        .join(" ")
        .toLowerCase();

      const okQ = ql ? name.includes(ql) || dist.includes(ql) : true;
      const okD = district ? dist === district.toLowerCase() : true;
      const okS = safari ? sStr.includes(safari.toLowerCase()) : true;

      return okQ && okD && okS;
    });
  }, [items, lang, q, district, safari]);

  return (
    <>
      {/* Filters: अब placeholder option हमेशा दिखेगा */}
      <ParkFilters
        q={q}
        setQ={setQ}
        district={district}
        setDistrict={setDistrict}
        safari={safari}
        setSafari={setSafari}
        items={items}
        labels={L}
        lang={lang}
      />

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p) => (
          <ParkCard key={p.id} park={p} L={L} lang={lang} />
        ))}
      </div>
    </>
  );
}