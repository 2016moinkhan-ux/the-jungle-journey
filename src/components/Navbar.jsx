"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email || "");
      } else {
        setUserEmail("");
      }
    });
    return () => unsub();
  }, []);

  const doLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/login");
    } catch (err) {
      console.error("Logout error:", err.message);
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-[#0b3b2e] text-white shadow-md">
      {/* Left side - Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl">🌿</span>
        <h1 className="text-xl font-bold">The Jungle Journey</h1>
      </div>

      {/* Right side - User info + Logout */}
      <div className="flex items-center space-x-4">
        {userEmail && (
          <span className="text-sm text-gray-200">
            {userEmail}
          </span>
        )}
        <button
          onClick={doLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm font-medium"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}