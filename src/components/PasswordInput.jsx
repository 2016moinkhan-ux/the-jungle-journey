"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // npm i lucide-react (already ho to skip)

export default function PasswordInput({
  value,
  onChange,
  placeholder = "Password",
  name = "password",
  required = true,
  className = "",
  id,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <input
        id={id || name}
        name={name}
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        minLength={6}
        autoComplete={name === "password" ? "current-password" : "new-password"}
        className="w-full rounded-xl px-3 py-2 pr-12
                   bg-neutral-800/80 text-white placeholder-white/60
                   outline-none ring-1 ring-white/10
                   focus:bg-neutral-800 focus:ring-white/25"
      />

      {/* Eye toggle — high contrast + big tap area */}
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        aria-label={show ? "Hide password" : "Show password"}
        className="absolute right-2 top-1/2 -translate-y-1/2
                   p-2 rounded-md text-white/90
                   hover:bg-white/10 focus:bg-white/10"
      >
        {show ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}