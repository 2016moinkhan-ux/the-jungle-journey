// src/components/AuthWrapper.jsx
"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "./AuthContext";

// Routes that do NOT require login
const PUBLIC_ROUTES = ["/login", "/signup", "/forgot-password", "/reset-password"];

export default function AuthWrapper({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const { user, ready } = useAuth();

  useEffect(() => {
    if (!ready) return; // ⏳ Wait until AuthContext finishes checking
    const isPublic = PUBLIC_ROUTES.includes(pathname);

    if (!user && !isPublic) {
      router.replace("/login");
    }
  }, [user, ready, pathname, router]);

  // While still loading auth state, show loader
  if (!ready) {
    return (
      <div className="flex h-screen items-center justify-center text-emerald-500">
        Loading...
      </div>
    );
  }

  // If not authed and trying to access private route, don’t flash children
  if (!user && !PUBLIC_ROUTES.includes(pathname)) {
    return null;
  }

  // ✅ Otherwise show children normally
  return <>{children}</>;
}