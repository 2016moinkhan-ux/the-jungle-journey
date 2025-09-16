"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const doLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/login"); // logout होते ही वापस login पर भेज दो
    } catch (err) {
      console.error("Logout error:", err.message);
    }
  };

  return (
    <button
      onClick={doLogout}
      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
    >
      Logout
    </button>
  );
}