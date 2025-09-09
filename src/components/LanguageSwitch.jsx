// src/components/LanguageSwitch.jsx
"use client";

import { useMemo, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function LanguageSwitch({ className = "" }) {
  const pathname = usePathname();
  const router = useRouter();
  const sp = useSearchParams();

  // current language -> "en" | "hi"
  const lang = (sp?.get("lang") === "hi" ? "hi" : "en");

  // build a new query string but with lang replaced
  const makeHref = useCallback((nextLang) => {
    const params = new URLSearchParams(sp?.toString() || "");
    if (nextLang) params.set("lang", nextLang);
    else params.delete("lang");
    return `${pathname}?${params.toString()}`;
  }, [pathname, sp]);

  const other = lang === "hi" ? "en" : "hi";
  const labels = useMemo(() => ({
    en: { self: "English", other: "हिंदी" },
    hi: { self: "हिंदी", other: "English" },
  }), []);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* current */}
      <span
        aria-label="current language"
        className="select-none rounded-full border border-green-400/40 bg-green-700/20 px-3 py-1 text-xs font-medium text-green-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
      >
        {labels[lang].self}
      </span>

      {/* switch button */}
      <button
        type="button"
        onClick={() => router.push(makeHref(other))}
        className="rounded-full border border-zinc-500/50 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-100 hover:bg-zinc-700/60 hover:border-zinc-400 transition"
      >
        {labels[lang].other}
      </button>
    </div>
  );
}