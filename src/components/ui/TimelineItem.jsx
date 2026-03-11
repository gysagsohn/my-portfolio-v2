/**
 * TimelineItem.jsx
 *
 * Renders a single entry in the desktop vertical timeline.
 * Displays a dot on the timeline line, plus a card with year, title, and description.
 *
 * Props:
 *   year        (string) — date range displayed in amber (e.g. "2024 — 2025")
 *   title       (string) — role or milestone title
 *   description (string) — short description of the entry
 *
 * Used in: Timeline.jsx (desktop vertical layout only)
 */

import '../../styles/TimelineItem.css';

function TimelineItem({ year, title, description }) {
  return (
    <div className="milestone-vertical-item">

      {/* Dot that sits on the vertical timeline line — positioned via CSS */}
      <div className="milestone-vertical-dot" />

      {/* Card content */}
      <div className="timeline-card">
        <span className="milestone-year">{year}</span>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

    </div>
  );
}

export default TimelineItem;
