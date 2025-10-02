// src/components/AuthWrapper.jsx
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "./AuthContext";
import Spinner from "@/components/ui/Spinner"; // ✅ new

// Public routes (no auth needed)
const PUBLIC_ROUTES = ["/login", "/signup", "/forgot-password", "/reset-password"];

export default function AuthWrapper({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const { user, ready } = useAuth();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!ready) return; // wait for Firebase to resolve
    const isPublic = PUBLIC_ROUTES.includes(pathname);

    if (!user && !isPublic) {
      setRedirecting(true);
      router.replace("/login");
    } else {
      setRedirecting(false);
    }
  }, [user, ready, pathname, router]);

  // Show loader while checking auth or during redirect
  if (!ready || redirecting) {
    return (
      <div
        className="flex h-screen items-center justify-center"
        aria-live="polite"
        aria-busy="true"
      >
        <Spinner size={42} />
      </div>
    );
  }

  // If trying to open a private page without auth, block render
  if (!user && !PUBLIC_ROUTES.includes(pathname)) {
    return null;
  }

  // ✅ Otherwise, render app normally
  return <>{children}</>;
}