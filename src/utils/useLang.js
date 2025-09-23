// src/utils/useLang.js
"use client";
import { useSearchParams } from "next/navigation";

export default function useLang() {
  const sp = useSearchParams();
  return sp?.get("lang") === "hi" ? "hi" : "en";
}