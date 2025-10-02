// src/components/GoogleAnalytics.jsx
import Script from "next/script";

export default function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID; // e.g. G-D9QTCKQH9D
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', { send_page_view: false }); // 👈 important change
        `}
      </Script>
    </>
  );
}