// src/app/login/page.jsx
import { Suspense } from "react";
import LoginClient from "./LoginClient"; // <-- correct casing, no .jsx

export const dynamic = "force-dynamic"; // avoid strict prerender for this route

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="animate-pulse text-center">
            <div className="w-12 h-12 rounded-full border-4 border-white/40 border-t-white mx-auto mb-4 animate-spin" />
            <p className="text-white/80 text-sm">Loading…</p>
          </div>
        </div>
      }
    >
      <LoginClient />
    </Suspense>
  );
}