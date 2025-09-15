// src/lib/contentful.js
import { createClient } from "contentful";

/** ----- Env setup ----- */
const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const ENV = process.env.CONTENTFUL_ENVIRONMENT || "master";

if (!SPACE || !TOKEN) {
  console.error("❌ Contentful env missing:", {
    SPACE: SPACE || "(missing)",
    TOKEN: TOKEN ? "present" : "(missing)",
    ENV,
  });
  throw new Error("Contentful environment variables not configured!");
}

/** ----- Client ----- */
export const client = createClient({
  space: SPACE,
  accessToken: TOKEN,      // Delivery (CDA) token
  environment: ENV,        // usually 'master'
  host: "cdn.contentful.com",
});

/** ----- Queries ----- */

// सभी blogs (latest first)
export async function getAllBlogs() {
  try {
    const entries = await client.getEntries({
      content_type: "pageBlogPost",   // ✅ तुम्हारा Content Type ID
      order: "-sys.createdAt",
    });
    return entries.items;
  } catch (error) {
    console.error("Contentful getAllBlogs error:", error);
    return [];
  }
}

// slug से एक blog
export async function getBlogBySlug(slug) {
  try {
    const res = await client.getEntries({
      content_type: "pageBlogPost",
      "fields.slug": slug,
      include: 2, // references (author, image) आदि साथ में
      limit: 1,
    });
    return res.items?.[0] || null;
  } catch (e) {
    console.error("getBlogBySlug error:", e);
    return null;
  }
}

// (optional) सभी slugs – pre-render के लिये
export async function getAllBlogSlugs() {
  try {
    const res = await client.getEntries({
      content_type: "pageBlogPost",
      select: "fields.slug",
    });
    return (res.items || [])
      .map((it) => it.fields?.slug)
      .filter(Boolean);
  } catch {
    return [];
  }
}