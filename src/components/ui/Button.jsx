// src/components/ui/Button.jsx
"use client";

import { motion } from "framer-motion";

export default function Button({ children, className = "", ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.92 }}   // 👈 dabne ka effect
      whileHover={{ scale: 1.03 }} // 👈 halka hover zoom (desktop ke liye)
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`rounded-md px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}