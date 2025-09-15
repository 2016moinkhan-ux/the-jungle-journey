// src/components/GoogleAnalytics.jsx
"use client";
import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      {/* GA4 loader */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DQ9TCKQH9D"
        strategy="afterInteractive"
      />
      {/* GA4 init */}
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DQ9TCKQH9D', { send_page_view: true });
        `}
      </Script>
    </>
  );
}