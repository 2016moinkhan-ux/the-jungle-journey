// src/app/blog/page.jsx
import Link from "next/link";
import { getAllBlogs } from "@/lib/contentful";

export default async function BlogListingPage() {
  const blogs = await getAllBlogs();

  if (!blogs || blogs.length === 0) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">No Blogs Found</h1>
        <p className="text-gray-600 mt-2">Please add & publish blog posts in Contentful.</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">All Blogs</h1>

      <div className="space-y-8">
        {blogs.map((blog) => {
          const f = blog.fields || {};
          const slug = f.slug || blog.sys.id;

          return (
            <div
              key={blog.sys.id}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">
                <Link href={`/blog/${slug}`} className="hover:underline">
                  {f.title || "Untitled"}
                </Link>
              </h2>

              {f.author && (
                <p className="text-sm text-gray-500 mt-1">
                  By {f.author.fields?.name || "Unknown"}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}