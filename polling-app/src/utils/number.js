export function formatPercent(value, total) {
  if (!total) return "0%";
  const percent = (value / total) * 100;
  return `${percent.toFixed(1)}%`;
}

export function formatCompact(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toString();
}
