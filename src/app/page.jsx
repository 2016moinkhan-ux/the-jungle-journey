// src/app/page.jsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-6 py-10">
      <p>Go to <Link className="text-emerald-700 underline" href="/parks">/parks</Link></p>
    </main>
  );
}