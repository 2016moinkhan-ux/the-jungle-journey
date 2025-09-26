// src/app/forgot-password/page.jsx
import { Suspense } from "react";
import ForgotPasswordClient from "./ForgotPasswordClient";

// Force runtime render so pre-render me hook errors na aaye
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Forgot Password | The Jungle Journey",
  description: "Reset your Jungle Journey account password.",
};

export default function ForgotPasswordPage() {
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
      <ForgotPasswordClient />
    </Suspense>
  );
}