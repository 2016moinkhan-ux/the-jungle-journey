// src/app/not-found.jsx
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] flex items-center justify-center bg-white text-neutral-800 px-4">
      <div className="text-center">
        <div className="mx-auto mb-6 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] relative">
          <Image
            src="/images/sad-monkey.jpg"   // <- public/images/sad-monkey.jpg
            alt="Sad Monkey"
            fill
            sizes="(max-width: 640px) 180px, 220px"
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold">
          404 – Page Not Found
        </h1>
        <p className="mt-2 text-sm sm:text-base text-neutral-600">
          The page you are looking for doesn’t exist or may have moved.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm hover:bg-neutral-100"
          >
            Go Home
          </Link>
          <Link
            href="/parks"
            className="rounded-lg bg-emerald-600 text-white px-4 py-2 text-sm hover:bg-emerald-500"
          >
            Browse Parks
          </Link>
        </div>
      </div>
    </main>
  );
}