// src/components/RequireAuth.jsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthContext"; // use existing context

export default function RequireAuth({ children }) {
  const router = useRouter();
  const { user, ready } = useAuth(); // { user, ready } from AuthContext

  // Firebase state restore होते समय
  if (!ready) {
    return (
      <div className="min-h-[60vh] grid place-items-center text-white/80">
        Loading...
      </div>
    );
  }

  // Not logged in → /login with ?next=
  useEffect(() => {
    if (ready && !user) {
      const next = encodeURIComponent(
        window.location.pathname + (window.location.search || "")
      );
      router.replace(`/login?next=${next}`);
    }
  }, [ready, user, router]);

  // Redirect होने तक छोटा placeholder
  if (!user) {
    return (
      <div className="min-h-[60vh] grid place-items-center text-white/60">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}