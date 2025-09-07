"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebase";

export default function RequireAuth({ children }) {
  const router = useRouter();
  const [status, setStatus] = useState("loading"); // loading | authed | guest

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setStatus("authed");
      } else {
        setStatus("guest");
        router.replace("/login");
      }
    });
    return () => unsub();
  }, [router]);

  if (status === "loading") {
    return (
      <div className="grid place-items-center min-h-screen">
        <div className="animate-pulse text-gray-600">Checking session…</div>
      </div>
    );
  }

  if (status === "guest") return null; // redirect hone tak blank

  return <>{children}</>;
}