// src/app/login/page.jsx
"use client";

import { Suspense, useEffect, useState } from "react";
import LoginClient from "./LoginClient";

// prerender avoid karne ke liye
export const dynamic = "force-dynamic";

export default function LoginPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-white">
        <div className="animate-pulse text-center">
          <div className="w-12 h-12 rounded-full border-4 border-gray-300 border-t-emerald-500 mx-auto mb-4 animate-spin" />
          <p className="text-gray-600 text-sm">Loading…</p>
        </div>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] flex items-center justify-center bg-white">
          <div className="animate-pulse text-center">
            <div className="w-12 h-12 rounded-full border-4 border-gray-300 border-t-emerald-500 mx-auto mb-4 animate-spin" />
            <p className="text-gray-600 text-sm">Loading…</p>
          </div>
        </div>
      }
    >
      {/* ✅ White background apply */}
      <div className="min-h-screen bg-white text-neutral-900">
        <LoginClient />
      </div>
    </Suspense>
  );
}