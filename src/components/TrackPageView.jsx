// src/components/TrackPageView.jsx
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function TrackPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.gtag) return;

    const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");

    window.gtag("event", "page_view", {
      page_path: url,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}