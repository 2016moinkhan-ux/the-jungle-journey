// src/app/robots.js
export default function robots() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const host = base.replace(/\/+$/, ""); // remove trailing slash

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/", // sab pages crawl allowed
      },
    ],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}