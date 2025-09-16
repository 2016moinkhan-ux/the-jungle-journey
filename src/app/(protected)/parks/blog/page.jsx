// src/app/blog/page.jsx
export const metadata = {
  title: "Blog — The Jungle Journey",
  description: "Travel tips, park guides, and wildlife stories.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Blog</h1>
      <p className="text-gray-700">Posts coming soon…</p>
    </main>
  );
}