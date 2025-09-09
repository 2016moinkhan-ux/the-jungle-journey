"use client";
import { motion } from "framer-motion";
import { TreePalm, Leaf, Trees } from "lucide-react"; // icons

export default function HeroHeader({ title, subtitle }) {
  return (
    <div className="relative mb-8">
      {/* Left vines/leaves */}
      <div className="absolute -left-8 top-0 flex flex-col gap-3 opacity-80">
        <Leaf className="w-8 h-8 text-emerald-500 animate-bounce" />
        <Trees className="w-10 h-10 text-emerald-600 animate-pulse" />
        <TreePalm className="w-8 h-8 text-green-700" />
      </div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-4xl md:text-5xl font-extrabold text-emerald-300
          drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]
          tracking-wide text-center md:text-left
        "
      >
        🌿 {title} 🌿
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="
          mt-2 text-lg md:text-2xl font-semibold text-emerald-200
          drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]
          text-center md:text-left
        "
      >
        {subtitle}
      </motion.h2>
    </div>
  );
}