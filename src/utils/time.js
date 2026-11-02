// "Oct 31, 2026, 4:05 PM" in the viewer's locale.
export function formatTimestamp(ms) {
  return new Date(ms).toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}
