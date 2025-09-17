"use client";
import { useState } from "react";

export default function PasswordInput({ value, onChange }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder="Password"
        className="w-full p-2 border rounded"
        required
      />
      <span
        onClick={() => setShow(!show)}
        className="absolute right-3 top-2 cursor-pointer text-gray-500"
      >
        {show ? "🙈" : "👁"}
      </span>
    </div>
  );
}