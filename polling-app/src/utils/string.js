export function truncate(str, max = 50) {
  if (!str) return "";
  return str.length > max ? str.slice(0, max) + "..." : str;
}
