// src/app/layout.jsx
import "./globals.css";
import { AuthProvider } from "@/components/AuthContext";
import { ToastProvider } from "@/components/ToastProvider";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics"; 
import TrackPageView from "@/components/TrackPageView";   // ✅ Add this

export const metadata = {
  title: "The Jungle Journey",
  description:
    "Explore Madhya Pradesh’s National Parks, Wildlife Sanctuaries & Tiger Reserves.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-white text-neutral-900 overflow-x-hidden">
        {/* ✅ Google Analytics script */}
        <GoogleAnalytics />

        {/* ✅ Page view tracker */}
        <Suspense fallback={null}>
          <TrackPageView />
        </Suspense>

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