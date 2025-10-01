"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthContext";

export default function RootRedirect() {
  const { user, ready } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!ready) return; // wait for firebase init
    if (user) {
      router.replace("/protected");   // logged in → splash (then parks)
    } else {
      router.replace("/login");       // logged out → login page only
    }
  }, [ready, user, router]);

  return (
    <main className="flex h-screen items-center justify-center text-neutral-400">
      Loading...
    </main>
  );
}