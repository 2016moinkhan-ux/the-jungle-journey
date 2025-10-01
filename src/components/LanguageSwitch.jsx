"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

function setQuery(params, key, val) {
  const p = new URLSearchParams(params.toString());
  if (val) p.set(key, val);
  else p.delete(key);
  return p.toString();
}

export default function LanguageSwitch() {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();

  const lang = params.get("lang") === "hi" ? "hi" : "en";

  const go = (nextLang) => {
    const qs = setQuery(params, "lang", nextLang === "en" ? null : "hi");
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const baseBtn =
    "px-3 py-1 rounded-full text-sm border font-medium transition select-none";
  const active =
    "bg-emerald-600 border-emerald-600 text-white shadow-sm hover:bg-emerald-500";
  const idle =
    "bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100";

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => go("en")}
        className={`${baseBtn} ${lang === "en" ? active : idle}`}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => go("hi")}
        className={`${baseBtn} ${lang === "hi" ? active : idle}`}
      >
        हिंदी
      </button>
    </div>
  );
}