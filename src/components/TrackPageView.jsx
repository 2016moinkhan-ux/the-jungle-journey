"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
        // dev debugging ke liye
        debug_mode: process.env.NODE_ENV !== "production",
      });
    }
  }, [pathname, search]);

  return null;
}