// src/app/layout.jsx  (Server Component — NO "use client")
import { Suspense } from "react";
import "./globals.css";

import AnimatedJungleBackground from "@/components/AnimatedJungleBackground";
import { ToastProvider } from "@/components/ToastProvider";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/components/AuthContext";

export const metadata = {
  title: "The Jungle Journey",
  description:
    "Explore Madhya Pradesh’s National Parks, Wildlife Sanctuaries & Tiger Reserves.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen text-white overflow-x-hidden">
        {/* Background slideshow behind everything */}
        <AnimatedJungleBackground />

        {/* App content above bg */}
        <AuthProvider>
          <ToastProvider>
            <div className="relative z-10">
              {/* ⬇️ Navbar (and anything using useSearchParams/usePathname) inside Suspense */}
              <Suspense fallback={null}>
                <Navbar />
              </Suspense>

              {/* Children may also contain client hooks; keeping them outside is fine.
                  If kabhi zarurat lage to children ko bhi Suspense me wrap kar sakte hain. */}
              {children}
            </div>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}