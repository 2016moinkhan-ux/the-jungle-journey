// src/components/AuthWrapper.jsx
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { getClientAuth } from "@/firebase/firebase";

// Routes that do NOT require login
const PUBLIC_ROUTES = ["/login", "/signup", "/forgot-password", "/reset-password"];

export default function AuthWrapper({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [checking, setChecking] = useState(true);
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    // get client-side auth instance
    const auth = getClientAuth();

    // If we are on server, or auth couldn't be created yet, just wait a tick
    if (!auth) {
      setChecking(false);
      return;
    }

    const unsub = onAuthStateChanged(auth, (user) => {
      const isPublic = PUBLIC_ROUTES.includes(pathname);
      if (user) {
        setIsAuthed(true);
      } else {
        setIsAuthed(false);
        if (!isPublic) router.replace("/login");
      }
      setChecking(false);
    });

    return () => unsub();
  }, [pathname, router]);

  // While verifying auth, show a tiny loader
  if (checking) {
    return (
      <div className="flex h-screen items-center justify-center text-emerald-200">
        Loading...
      </div>
    );
  }

  // If not authed and we already triggered redirect, don’t flash children
  if (!isAuthed && !PUBLIC_ROUTES.includes(pathname)) return null;

  return <>{children}</>;
}