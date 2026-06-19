import React from "react";

export function Button({ children, onClick, variant = "primary" }) {
  const isPrimary = variant === "primary";
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        borderRadius: "4px",
        border: isPrimary ? "none" : "1px solid var(--border)",
        background: isPrimary ? "var(--accent)" : "transparent",
        color: isPrimary ? "#000" : "var(--text-dim)",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        cursor: "pointer",
        transition: "opacity 0.2s",
      }}
    >
      {children}
    </button>
  );
}
