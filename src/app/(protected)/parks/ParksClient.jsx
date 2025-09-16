// src/app/parks/ParksClient.jsx
"use client";

import { useState, useMemo } from "react";
import ParkCard from "@/components/ParkCard";
import ParkFilters from "@/components/ParkFilters";

// helper: {en,hi} या string → चुनी हुई भाषा की string
const pick = (v, lang) =>
  typeof v === "string" ? v : v?.[lang] || v?.en || "";

/**
 * ParksClient:
 * - props: parks (array), lang ("en"|"hi")
 * - अंदर filters (search, district, safari) + cards दिखेंगे
 */
export default function ParksClient({ parks = [], lang = "en" }) {
  const [q, setQ] = useState("");
  const [district, setDistrict] = useState("");
  const [safari, setSafari] = useState("");

  // filter parks
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
    <>
      {/* Filters */}
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

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p) => (
          <ParkCard key={p.id} park={p} lang={lang} />
        ))}
      </div>
    </>
  );
}