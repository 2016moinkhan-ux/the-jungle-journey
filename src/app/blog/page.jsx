// src/app/blog/page.jsx

export const metadata = {
  title: "Blog – The Jungle Journey",
  description: "Travel tips, park guides, and wildlife stories from The Jungle Journey.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-emerald-700 mb-4">
        The Jungle Journey Blog
      </h1>
      <p className="text-gray-700">
        Welcome to our blog section! 🐯🌿  
        Here we’ll share travel tips, safari stories, and guides to Indian National Parks.
      </p>

      <div className="mt-8 space-y-6">
        <article className="p-4 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-bold text-emerald-600">✨ Coming Soon</h2>
          <p className="text-gray-600">
            Stay tuned for exciting blog posts and updates about safaris, hotels, and wildlife!
          </p>
        </article>
      </div>
    </main>
  );
}