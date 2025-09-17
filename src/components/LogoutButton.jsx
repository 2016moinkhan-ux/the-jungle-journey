"use client";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/login"; // logout ke baad login page
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
}