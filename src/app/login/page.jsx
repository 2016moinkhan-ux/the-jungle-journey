// src/app/login/page.jsx
import { Suspense } from "react";
import LoginClient from "./LoginClient";

export const dynamic = "force-dynamic"; // prerender errors se bachao

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] grid place-items-center">
          <div className="animate-pulse text-center">
            <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-white mx-auto mb-4 animate-spin" />
            <p className="text-white/70 text-sm">Loading…</p>
          </div>
        </div>
      }
    >
      <LoginClient />
    </Suspense>
  );
}