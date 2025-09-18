// src/app/layout.jsx
import "./globals.css";
import AuthWrapper from "@/components/AuthWrapper";

export const metadata = {
  title: "The Jungle Journey",
  description:
    "Explore Madhya Pradesh’s National Parks, Wildlife Sanctuaries & Tiger Reserves.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white">
        {/* 🔐 Global auth context (Firebase listeners etc.) */}
        <AuthWrapper>{children}</AuthWrapper>
      </body>
    </html>
  );
}