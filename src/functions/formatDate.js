/**
 * formatDate.js
 *
 * Formats an ISO date string into a localised Australian date (DD/MM/YYYY).
 * Returns an empty string if the input is missing or invalid — prevents
 * "Invalid Date" from appearing in the UI if a post has a bad date value.
 *
 * Used in: PostCard.jsx
 */

export function formatDate(dateString) {
  // Guard against missing or invalid date strings
  if (!dateString) return '';

  const date = new Date(dateString);

  // new Date() returns an object with NaN internals for invalid strings
  if (isNaN(date)) return '';

  return date.toLocaleDateString('en-AU'); // DD/MM/YYYY
}
