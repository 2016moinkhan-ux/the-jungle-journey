import { Suspense } from "react";
import ProtectedSplashClient from "./ProtectedSplashClient";

export const dynamic = "force-dynamic";

export default function ProtectedPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-neutral-600">
          Loading...
        </div>
      }
    >
      <ProtectedSplashClient />
    </Suspense>
  );
}