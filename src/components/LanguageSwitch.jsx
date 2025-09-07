"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function LanguageSwitch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentLang = searchParams.get("lang") === "hi" ? "hi" : "en";

  function switchLang(lang) {
    const params = new URLSearchParams(searchParams);
    params.set("lang", lang);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => switchLang("en")}
        className={`px-3 py-1 rounded-full border ${
          currentLang === "en"
            ? "bg-gray-900 text-white"
            : "bg-white text-gray-900"
        }`}
      >
        English
      </button>
      <button
        onClick={() => switchLang("hi")}
        className={`px-3 py-1 rounded-full border ${
          currentLang === "hi"
            ? "bg-gray-900 text-white"
            : "bg-white text-gray-900"
        }`}
      >
        हिंदी
      </button>
    </div>
  );
}