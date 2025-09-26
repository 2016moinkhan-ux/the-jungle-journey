// src/components/ToastProvider.jsx
"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const ToastCtx = createContext({
  show: (_msg, _type = "success", _ms = 2200) => {},
});

export function useToast() {
  return useContext(ToastCtx);
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const [mounted, setMounted] = useState(false);
  const idRef = useRef(0);

  useEffect(() => {
    // ensure we are on client before touching document
    setMounted(true);
  }, []);

  const show = (message, type = "success", ms = 2200) => {
    const id = ++idRef.current;
    setToasts((t) => [...t, { id, message, type }]);
    if (ms > 0) {
      setTimeout(() => {
        setToasts((t) => t.filter((x) => x.id !== id));
      }, ms);
    }
  };

  const toastUi = (
    <div className="fixed inset-x-0 top-4 z-[100] flex flex-col items-center gap-2 px-4 pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`pointer-events-auto rounded-md px-4 py-2 text-sm shadow-lg ${
            t.type === "error"
              ? "bg-red-600 text-white"
              : "bg-emerald-600 text-white"
          }`}
        >
          {t.message}
        </div>
      ))}
    </div>
  );

  return (
    <ToastCtx.Provider value={{ show }}>
      {children}
      {/* portal only after client mount to avoid "document is not defined" */}
      {mounted ? createPortal(toastUi, document.body) : null}
    </ToastCtx.Provider>
  );
}