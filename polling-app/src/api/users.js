const BASE = "https://jsonplaceholder.typicode.com";

export async function getUsers() {
  const res = await fetch(`${BASE}/users`);
  if (!res.ok) throw new Error("failed to load users");
  return res.json();
}

export async function getUserById(id) {
  const res = await fetch(`${BASE}/users/${id}`);
  if (!res.ok) throw new Error(`user ${id} not found`);
  return res.json();
}

export function buildUserMap(users = []) {
  return users.reduce((acc, u) => {
    acc[u.id] = u;
    return acc;
  }, {});
}
