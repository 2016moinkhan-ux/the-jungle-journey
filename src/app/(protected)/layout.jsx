// src/app/(protected)/layout.jsx
"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { getClientAuth } from "@/firebase/firebase";

export default function ProtectedLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [checking, setChecking] = useState(true);
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const auth = getClientAuth();
    if (!auth) {
      // No client auth available — treat as signed out
      const next = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
      router.replace(`/login?next=${encodeURIComponent(next)}`);
      setChecking(false);
      return;
    }

    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthed(true);
      } else {
        setIsAuthed(false);
        const next = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
        router.replace(`/login?next=${encodeURIComponent(next)}`);
      }
      setChecking(false);
    });

    return () => unsub();
  }, [router, pathname, searchParams]);

  if (checking) {
    return (
      <div className="min-h-screen bg-white text-neutral-900 flex items-center justify-center">
        <span className="text-sm text-neutral-500">Loading…</span>
      </div>
    );
  }

  // While redirecting to /login, render nothing
  if (!isAuthed) return null;

  return <>{children}</>;
}