"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // 👈 install icons if not already

export default function PasswordInput({
  value,
  onChange,
  placeholder = "Password",
  name = "password",
  className = "",
  required = true,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <input
        type={show ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full p-3 rounded-lg bg-white/10 border border-white/20
                   text-white placeholder-white/50 outline-none
                   focus:ring-2 focus:ring-emerald-400 pr-11"
        autoComplete={show ? "off" : "current-password"}
      />

      {/* 👁️ Toggle button */}
      <button
        type="button"
        aria-label={show ? "Hide password" : "Show password"}
        onClick={() => setShow((s) => !s)}
        className="absolute right-3 top-1/2 -translate-y-1/2
                   text-emerald-300 hover:text-emerald-200 transition"
      >
        {show ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}