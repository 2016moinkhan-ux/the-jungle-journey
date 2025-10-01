"use client";
import { motion } from "framer-motion";

export default function HeroHeader({ title, subtitle }) {
  return (
    <div className="relative mb-8 text-center md:text-left">
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-3xl md:text-5xl font-extrabold text-neutral-900
          tracking-tight
        "
      >
        {title}
      </motion.h1>

      {/* Subtitle */}
      {subtitle && (
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="
            mt-2 text-lg md:text-2xl font-medium text-neutral-600
          "
        >
          {subtitle}
        </motion.h2>
      )}
    </div>
  );
}