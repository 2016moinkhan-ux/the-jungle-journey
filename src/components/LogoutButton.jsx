"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthContext";

export default function LogoutButton() {
  const router = useRouter();
  const { logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-60"
    >
      {loading ? "Logging out…" : "Logout"}
    </button>
  );
}