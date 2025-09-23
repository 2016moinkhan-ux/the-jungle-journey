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
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000); // har 8 sec me change
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Background ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* 🔲 readability overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
}