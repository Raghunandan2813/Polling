import React from "react";
import { useFeed } from "../hooks/useFeed";
import { PostCard } from "../components/PostCard";
import { ActivityPanel } from "../components/ActivityPanel";
import { Sidebar } from "../components/Sidebar";
import { StatusBar } from "../components/StatusBar";

export default function FeedPage() {
  const { posts, userMap, activity, notifications, loading, error, lastSync, clearNotifications } = useFeed();

  return (
    <div style={wrap}>
      <header style={hdr}>
        <span style={logo}>livefeed</span>
        <span style={sub}>polling every 7s</span>
      </header>

      <StatusBar lastSync={lastSync} error={error} notifications={notifications} onClear={clearNotifications} />

      <div style={layout}>
        <Sidebar userMap={userMap} />

        <main style={feed}>
          {loading && <div style={msg}>connecting…</div>}
          {error && <div style={{ ...msg, color: "#f55" }}>error: {error.message}</div>}
          {posts.map((p) => (
            <PostCard key={p.id} post={p} user={userMap[p.userId]} />
          ))}
        </main>

        <div style={side}>
          <ActivityPanel items={activity} />
        </div>
      </div>
    </div>
  );
}

const wrap = { display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" };
const hdr = { padding: "14px 20px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "baseline", gap: 12 };
const logo = { fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "var(--accent)" };
const sub = { fontSize: 11, color: "var(--muted)" };
const layout = { display: "flex", flex: 1, overflow: "hidden" };
const feed = { flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 1 };
const side = { width: 280, borderLeft: "1px solid var(--border)", overflow: "hidden" };
const msg = { padding: 24, color: "var(--muted)", fontSize: 13 };
