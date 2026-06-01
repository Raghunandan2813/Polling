import React from "react";

export function PostCard({ post, user }) {
  const initials = user?.name?.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase() ?? "??";
  const color = `hsl(${(post.userId * 47) % 360}, 60%, 55%)`;

  return (
    <div style={card}>
      <div style={header}>
        <div style={{ ...avatar, background: color }}>{initials}</div>
        <div>
          <div style={name}>{user?.username ?? `user_${post.userId}`}</div>
          <div style={company}>{user?.company?.name ?? "—"}</div>
        </div>
        <div style={postId}>#{post.id}</div>
      </div>
      <div style={title}>{post.title}</div>
      <p style={body}>{post.body}</p>
    </div>
  );
}

const card = { background: "var(--surface)", border: "1px solid var(--border)", padding: "18px 20px", animation: "fade-in 0.3s ease", cursor: "default" };
const header = { display: "flex", alignItems: "center", gap: 10, marginBottom: 12 };
const avatar = { width: 32, height: 32, borderRadius: "50%", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 600, color: "#000", flexShrink: 0 };
const name = { fontSize: 12, fontWeight: 600, color: "var(--text)", fontFamily: "var(--font-display)" };
const company = { fontSize: 11, color: "var(--muted)" };
const postId = { marginLeft: "auto", fontSize: 11, color: "var(--border)" };
const title = { fontSize: 13, fontWeight: 600, color: "var(--accent)", textTransform: "lowercase", marginBottom: 8, lineHeight: 1.4 };
const body = { fontSize: 12, color: "var(--text-dim)", lineHeight: 1.6 };
