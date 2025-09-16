// src/app/(protected)/layout.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import Navbar from "@/components/Navbar"; // ⬅️ add this

export default function ProtectedLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthed(true);
        setChecking(false);
      } else {
        setIsAuthed(false);
        setChecking(false);
        router.replace(`/login?next=${encodeURIComponent(pathname)}`);
      }
    });
    return () => unsub();
  }, [router, pathname]);

  if (checking) {
    return (
      <div className="min-h-screen grid place-items-center bg-[#0b3b2e] text-white">
        <div className="animate-pulse text-lg">Checking login…</div>
      </div>
    );
  }

  if (!isAuthed) return null;

  return (
    <div className="min-h-screen bg-[#051e18]">
      <Navbar />        {/* 🔒 protected pages पर top bar */}
      <div className="pt-4">{children}</div>
    </div>
  );
}