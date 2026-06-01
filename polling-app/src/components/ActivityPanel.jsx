import React from "react";

export function ActivityPanel({ items = [] }) {
  return (
    <div style={panel}>
      <div style={heading}>activity stream</div>
      <div style={list}>
        {items.map((item) => (
          <div key={item.id} style={{ ...row, opacity: item.completed ? 0.4 : 1 }}>
            <span style={{ ...status, background: item.completed ? "var(--muted)" : "var(--accent)" }} />
            <span style={label}>{item.title}</span>
            <span style={uid}>u{item.userId}</span>
          </div>
        ))}
        {items.length === 0 && <div style={empty}>waiting…</div>}
      </div>
    </div>
  );
}

const panel = { background: "var(--surface)", border: "1px solid var(--border)", height: "100%", display: "flex", flexDirection: "column" };
const heading = { padding: "12px 16px", borderBottom: "1px solid var(--border)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-display)" };
const list = { overflowY: "auto", flex: 1 };
const row = { display: "flex", alignItems: "flex-start", gap: 8, padding: "10px 16px", borderBottom: "1px solid var(--border)", animation: "slide-in 0.2s ease" };
const status = { width: 6, height: 6, borderRadius: "50%", flexShrink: 0, marginTop: 5 };
const label = { fontSize: 11, color: "var(--text-dim)", lineHeight: 1.5, flex: 1 };
const uid = { fontSize: 10, color: "var(--border)", flexShrink: 0 };
const empty = { padding: 20, color: "var(--muted)", fontSize: 12 };
