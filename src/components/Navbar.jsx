"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-neutral-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Title */}
        <Link href="/" className="text-emerald-400 font-bold text-lg">
          🌿 The Jungle Journey
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm">
          <Link href="/parks" className="hover:text-emerald-300">
            Parks
          </Link>
          <Link href="/blog" className="hover:text-emerald-300">
            Blog
          </Link>
          <Link href="/hotels" className="hover:text-emerald-300">
            Hotels
          </Link>
        </div>
      </div>
    </nav>
  );
}