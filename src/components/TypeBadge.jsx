// src/components/TypeBadge.jsx
"use client";

/**
 * Renders designation/type badges for a park.
 * Supports multilingual values from park.designation
 * Example: ["National Park", "Tiger Reserve"]
 */
export default function TypeBadges({ park, lang = "en", className = "" }) {
  let items = [];

  // 1) New designation system
  const desig = park?.designation;
  if (Array.isArray(desig)) {
    items = desig;
  } else if (desig && typeof desig === "object") {
    items = desig[lang] || desig.en || [];
  }

  // 2) Fallback to legacy "type"
  if ((!items || items.length === 0) && park?.type) {
    const t = typeof park.type === "string" ? park.type : park.type[lang] || park.type.en;
    items = t ? [t] : [];
  }

  if (!items || items.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((txt, i) => (
        <span
          key={i}
          className="rounded-full bg-amber-100/90 px-3 py-1 text-xs text-amber-900 ring-1 ring-amber-700/20"
        >
          {txt}
        </span>
      ))}
    </div>
  );
}