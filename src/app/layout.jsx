// src/app/layout.jsx
import "./globals.css";
// ❌ Removed global AnimatedJungleBackground (we'll use it only on Home)
import { AuthProvider } from "@/components/AuthContext";
import { ToastProvider } from "@/components/ToastProvider";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

export const metadata = {
  title: "The Jungle Journey",
  description:
    "Explore Madhya Pradesh’s National Parks, Wildlife Sanctuaries & Tiger Reserves.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ✅ Global white background + dark text for all pages */}
      <body className="relative min-h-screen bg-white text-neutral-900 overflow-x-hidden">
        <AuthProvider>
          <ToastProvider>
            <div className="relative z-10">
              <Suspense fallback={null}>
                <Navbar />
              </Suspense>
              {children}
            </div>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}