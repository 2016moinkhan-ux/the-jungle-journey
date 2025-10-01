"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

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
        className="
          w-full rounded-xl px-3 py-2 pr-12
          bg-white text-gray-900 placeholder:text-gray-400
          border border-gray-300
          focus:border-emerald-500 focus:ring focus:ring-emerald-200
          outline-none
        "
      />

      {/* Eye toggle */}
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        aria-label={show ? "Hide password" : "Show password"}
        className="
          absolute right-2 top-1/2 -translate-y-1/2
          p-2 rounded-md text-gray-500
          hover:text-gray-700 focus:text-gray-700
        "
      >
        {show ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}