"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="font-bold text-emerald-700 text-lg">
          The Jungle Journey
        </Link>

        {/* Menu Links */}
        <div className="flex items-center gap-6 text-slate-700 font-medium">
          <Link href="/parks" className="hover:text-emerald-700">
            Parks
          </Link>
          <Link href="/about" className="hover:text-emerald-700">
            About
          </Link>
          <Link href="/login" className="hover:text-emerald-700">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}