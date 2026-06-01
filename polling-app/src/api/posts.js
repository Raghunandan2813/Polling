const BASE = "https://jsonplaceholder.typicode.com";

export async function getPosts(limit = 15) {
  const res = await fetch(`${BASE}/posts?_limit=${limit}`);
  if (!res.ok) throw new Error("failed to load posts");
  return res.json();
}

export async function getPostComments(postId) {
  const res = await fetch(`${BASE}/posts/${postId}/comments?_limit=3`);
  if (!res.ok) throw new Error("failed to load comments");
  return res.json();
}
