// src/app/layout.jsx
import "./globals.css";
import AuthWrapper from "@/components/AuthWrapper";
import AnimatedJungleBackground from "@/components/AnimatedJungleBackground";

export const metadata = {
  title: "The Jungle Journey",
  description:
    "Explore Madhya Pradesh’s National Parks, Wildlife Sanctuaries & Tiger Reserves.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* NOTE: body par koi bg-* class mat rakho */}
      <body className="relative min-h-screen text-white overflow-x-hidden">
        {/* Jungle slideshow background (behind everything) */}
        <AnimatedJungleBackground />

        {/* App content above bg */}
        <AuthWrapper>
          <div className="relative z-10">{children}</div>
        </AuthWrapper>
      </body>
    </html>
  );
}