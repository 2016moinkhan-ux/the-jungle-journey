// src/app/forgot-password/page.jsx
import { Suspense } from "react";
import ForgotPasswordClient from "./ForgotPasswordClient";

export const metadata = {
  title: "Forgot Password | The Jungle Journey",
  description: "Reset your Jungle Journey account password.",
};

// Bailout issues avoid: ensure runtime is dynamic (no static prerender complaints)
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={null}>
      <ForgotPasswordClient />
    </Suspense>
  );
}