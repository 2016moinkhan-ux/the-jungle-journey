// src/app/robots.txt/route.js
export async function GET() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const content = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`.trim();

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}