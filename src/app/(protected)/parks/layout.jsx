// src/app/(protected)/layout.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { getClientAuth } from "@/firebase/firebase";

export default function ProtectedLayout({ children }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const auth = getClientAuth();
    if (!auth) {
      setChecking(false);
      return;
    }

    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthed(true);
      } else {
        setIsAuthed(false);
        router.replace("/login");
      }
      setChecking(false);
    });

    return () => unsub();
  }, [router]);

  if (checking) {
    return (
      <div className="flex h-screen items-center justify-center text-emerald-200">
        Loading...
      </div>
    );
  }

  if (!isAuthed) {
    return null; // jab tak redirect nahi hota blank dikhao
  }

  // ⚡ FIX: Yaha Navbar include nahi karna hai
  return <>{children}</>;
}