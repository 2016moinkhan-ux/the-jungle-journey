// src/app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "The Jungle Journey",
  description: "MP National Parks — list & details",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}