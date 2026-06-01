import React from "react";

export function Sidebar({ userMap }) {
  const users = Object.values(userMap);

  return (
    <aside style={aside}>
      <div style={heading}>online · {users.length}</div>
      {users.map((u) => {
        const color = `hsl(${(u.id * 47) % 360}, 60%, 55%)`;
        return (
          <div key={u.id} style={row}>
            <div style={{ ...avatar, background: color }}>
              {u.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
            </div>
            <div>
              <div style={uname}>{u.username}</div>
              <div style={city}>{u.address?.city}</div>
            </div>
          </div>
        );
      })}
      {users.length === 0 && <div style={empty}>loading…</div>}
    </aside>
  );
}

const aside = { width: 200, borderRight: "1px solid var(--border)", overflowY: "auto", flexShrink: 0 };
const heading = { padding: "12px 14px", borderBottom: "1px solid var(--border)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-display)" };
const row = { display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderBottom: "1px solid var(--border)" };
const avatar = { width: 28, height: 28, borderRadius: "50%", fontSize: 10, fontWeight: 700, display: "grid", placeItems: "center", color: "#000", flexShrink: 0 };
const uname = { fontSize: 11, fontWeight: 600, color: "var(--text)" };
const city = { fontSize: 10, color: "var(--muted)" };
const empty = { padding: 14, color: "var(--muted)", fontSize: 12 };
