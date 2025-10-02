"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { GA_ID } from "./GoogleAnalytics";  // ✅ वही GA_ID reuse

export default function TrackPageView() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    if (!GA_ID || !pathname) return;

    const url = pathname + (search?.toString() ? `?${search.toString()}` : "");

    if (typeof window.gtag === "function") {
      console.log("[GA] page_view", url);

      window.gtag("event", "page_view", {
        page_path: url,
        page_location: window.location.href,   // ✅ सही URL भेजे
        page_title: document.title || "",      // ✅ title भी भेजे
      });
    }
  }, [pathname, search]);

  return null;
}