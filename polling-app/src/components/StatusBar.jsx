import React, { useEffect, useState } from "react";
import { fmtTime } from "../utils/time";

export function StatusBar({ lastSync, error, notifications, onClear }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={bar}>
      <div style={left}>
        <span style={{ ...dot, background: error ? "#f55" : "#c8f135", animation: "pulse-dot 2s infinite" }} />
        <span style={{ color: "var(--text-dim)" }}>{error ? "disconnected" : "live"}</span>
        {lastSync && (
          <span style={{ color: "var(--muted)", marginLeft: 16 }}>
            synced {fmtTime(lastSync)}
          </span>
        )}
      </div>
      {notifications.length > 0 && (
        <div style={right}>
          <span style={{ color: "var(--accent)" }}>{notifications[0].text}</span>
          <button onClick={onClear} style={clearBtn}>dismiss</button>
        </div>
      )}
    </div>
  );
}

const bar = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 20px", borderBottom: "1px solid var(--border)", background: "var(--surface)", fontFamily: "var(--font-mono)", fontSize: 12 };
const left = { display: "flex", alignItems: "center", gap: 8 };
const right = { display: "flex", alignItems: "center", gap: 12 };
const dot = { width: 6, height: 6, borderRadius: "50%", display: "inline-block" };
const clearBtn = { background: "none", border: "1px solid var(--border)", color: "var(--muted)", padding: "2px 8px", cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: 11 };
