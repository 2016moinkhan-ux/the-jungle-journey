// src/app/sitemap.xml/route.js

import mpParks from "@/data/parks";
import blogs from "@/data/blogs";

const siteURL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function GET() {
  const urls = [];

  // 🟢 Parks ke liye
  mpParks.forEach((p) => {
    urls.push(`
      <url>
        <loc>${siteURL}/parks/${p.id}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `);
  });

  // 🟢 Blogs ke liye
  blogs.forEach((b) => {
    urls.push(`
      <url>
        <loc>${siteURL}/blog/${b.slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `);
  });

  // 🟢 Home page
  urls.push(`
    <url>
      <loc>${siteURL}</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
  `);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join("\n")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}