"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ParkCard from "@/components/ParkCard";
import ParkFilters from "@/components/ParkFilters";
// ❌ import LanguageSwitch from "@/components/LanguageSwitch";  // REMOVE
import { T } from "@/i18n/lang";

export default function ParksClient({ items, labels }) {
  const sp = useSearchParams();
  const lang = sp.get("lang") === "hi" ? "hi" : "en";

  const [q, setQ] = useState("");
  const [district, setDistrict] = useState("");
  const [safari, setSafari] = useState("");

  const filtered = useMemo(() => {
    return items.filter((p) => {
      const name = T(p.name, lang).toLowerCase();
      const dist = T(p.district, lang).toLowerCase();
      const saf = Array.isArray(T(p.safariTypes, lang))
        ? T(p.safariTypes, lang).join(", ").toLowerCase()
        : (T(p.safariTypes, lang) || "").toLowerCase();

      const okQ = q
        ? name.includes(q.toLowerCase()) || dist.includes(q.toLowerCase())
        : true;
      const okD = district ? dist === district.toLowerCase() : true;
      const okS = safari ? saf.includes(safari.toLowerCase()) : true;

      return okQ && okD && okS;
    });
  }, [items, q, district, safari, lang]);

  return (
    <div>
      {/* 🔸 LanguageSwitch हटा दिया — अब सिर्फ header में रहेगा */}

      <ParkFilters
        items={items}
        labels={labels}
        lang={lang}
        q={q}
        setQ={setQ}
        district={district}
        setDistrict={setDistrict}
        safari={safari}
        setSafari={setSafari}
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p) => (
          <ParkCard key={p.id} park={p} lang={lang} labels={labels} />
        ))}
      </div>
    </div>
  );
}