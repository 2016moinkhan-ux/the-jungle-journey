// src/app/blog/[slug]/page.jsx
import Image from "next/image";
import Link from "next/link";
import { getAllBlogs, getBlogBySlug } from "@/lib/contentful";

// build time पर slugs pre-render करने के लिए
export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return (blogs || [])
    .map((b) => b?.fields?.slug)
    .filter(Boolean)
    .map((slug) => ({ slug }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;           // params को await करो
  const entry = await getBlogBySlug(slug);

  if (!entry) {
    return (
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">Blog not found</h1>
        <Link href="/blog" className="text-blue-600 underline mt-4 inline-block">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  const f = entry.fields || {};
  const author = f.author?.fields?.name || "Unknown";
  const hero = f.heroImage?.fields?.file?.url
    ? `https:${f.heroImage.fields.file.url}`
    : null;

  return (
    <article className="p-8 max-w-3xl mx-auto space-y-4">
      <Link href="/blog" className="text-blue-600 underline">← Back</Link>

      <h1 className="text-3xl font-bold">{f.title}</h1>
      <p className="text-gray-600">By {author}</p>

      {hero && (
        <Image
          src={hero}
          alt={f.title || "Blog image"}
          width={1200}
          height={600}
          className="rounded-lg my-4"
          priority
        />
      )}

      {f.subtitle && <p className="text-lg">{f.subtitle}</p>}
      {typeof f.body === "string" && (
        <div className="prose max-w-none">
          {f.body}
        </div>
      )}
    </article>
  );
}