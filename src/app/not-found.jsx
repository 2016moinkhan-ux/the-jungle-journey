// src/app/not-found.jsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen grid place-items-center text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(5,30,24,.75), rgba(5,30,24,.85)), url('/images/sad-monkey.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center px-6">
        <h1 className="text-6xl font-extrabold mb-2">404</h1>
        <p className="text-lg opacity-90">Page not found</p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-block bg-white text-[#0b3b2e] px-4 py-2 rounded-lg font-medium"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}