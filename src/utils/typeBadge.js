// src/utils/typeBadge.js
// Map park "type" to a consistent Tailwind style + short label.
// Safe defaults included.

export const TYPE_STYLES = {
  "Tiger Reserve": {
    text: "text-orange-800",
    bg: "bg-orange-100/90",
    ring: "ring-orange-200",
    label: "Tiger Reserve",
  },
  "National Park": {
    text: "text-green-800",
    bg: "bg-green-100/90",
    ring: "ring-green-200",
    label: "National Park",
  },
  "Wildlife Sanctuary": {
    text: "text-blue-800",
    bg: "bg-blue-100/90",
    ring: "ring-blue-200",
    label: "Wildlife Sanctuary",
  },
};

export function getTypeStyle(type) {
  const fallback = {
    text: "text-slate-800",
    bg: "bg-slate-100/90",
    ring: "ring-slate-200",
    label: type || "Park",
  };
  return TYPE_STYLES[type] || fallback;
}