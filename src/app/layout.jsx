// src/app/layout.jsx
import "./globals.css";
import AnimatedJungleBackground from "@/components/AnimatedJungleBackground";
import { AuthProvider } from "@/components/AuthContext";
import { ToastProvider } from "@/components/ToastProvider";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";  // 🟢 Add Suspense import

export const metadata = {
  title: "The Jungle Journey",
  description:
    "Explore Madhya Pradesh’s National Parks, Wildlife Sanctuaries & Tiger Reserves.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen text-white overflow-x-hidden">
        {/* Background slideshow (behind everything) */}
        <AnimatedJungleBackground />

        {/* App content */}
        <AuthProvider>
          <ToastProvider>
            <div className="relative z-10">
              {/* 🟢 Wrap Navbar inside Suspense */}
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