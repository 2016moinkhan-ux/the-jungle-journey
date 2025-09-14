// src/app/sitemap.js
import parks from "@/data/parks";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  // Listing page
  const urls = [
    {
      url: `${base}/parks`,
      lastModified: new Date(),
    },
  ];

  // Har park ke liye ek entry
  parks.forEach((park) => {
    urls.push({
      url: `${base}/parks/${park.id}`,
      lastModified: new Date(),
    });
  });

  return urls;
}