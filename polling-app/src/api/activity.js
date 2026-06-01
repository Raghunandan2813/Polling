const BASE = "https://jsonplaceholder.typicode.com";

let _seenIds = new Set();

export async function pollActivity() {
  const res = await fetch(`${BASE}/todos?_limit=10&_sort=id&_order=desc`);
  if (!res.ok) throw new Error("activity poll failed");
  const items = await res.json();

  const fresh = items.filter((t) => !_seenIds.has(t.id));
  items.forEach((t) => _seenIds.add(t.id));

  return {
    items,
    newCount: fresh.length,
    ts: Date.now(),
  };
}

export function resetActivityCursor() {
  _seenIds = new Set();
}
