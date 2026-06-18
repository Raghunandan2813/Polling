import React from "react";

export function Badge({ children, color = "var(--accent)" }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "2px 6px",
      borderRadius: "4px",
      fontSize: "11px",
      fontWeight: "bold",
      backgroundColor: color,
      color: "#fff"
    }}>
      {children}
    </span>
  );
}
