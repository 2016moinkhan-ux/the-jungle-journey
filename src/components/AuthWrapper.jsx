"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase";

export default function AuthWrapper({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [checking, setChecking] = useState(true);
  const [user, setUser] = useState(null);

  // ye pages without login accessible honge
  const publicRoutes = ["/login", "/signup", "/forgot-password", "/reset-password"];

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setChecking(false);

      if (!u && !publicRoutes.includes(pathname)) {
        router.replace("/login");
      }
    });
    return () => unsub();
  }, [pathname, router]);

  if (checking) {
    return (
      <div className="flex h-screen items-center justify-center text-emerald-200">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}