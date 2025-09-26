"use client";

import { Suspense } from "react";
import LoginClient from "./LoginClient";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="animate-pulse text-center">
            <div className="w-12 h-12 rounded-full border-4 border-t-4 border-green-500 mx-auto mb-4"></div>
            <p className="text-white/70 text-sm">Loading...</p>
          </div>
        </div>
      }
    >
      <LoginClient />
    </Suspense>
  );
}