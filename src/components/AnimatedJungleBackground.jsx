// src/components/AnimatedJungleBackground.jsx
"use client";

import { useState, useEffect } from "react";

const images = [
  "/images/jungle-1.webp",
  "/images/jungle-2.webp",
  "/images/jungle-3.webp",
];

export default function AnimatedJungleBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((p) => (p + 1) % images.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    // pointer-events-none -> background click block na kare
    // z-0 -> safe stacking; foreground ko z-10 de denge
    <div className="fixed inset-0 z-0 pointer-events-none">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-center bg-cover bg-fixed transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
          aria-hidden
        />
      ))}

      {/* readability overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden />
    </div>
  );
}