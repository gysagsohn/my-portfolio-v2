/**
 * Timeline.jsx
 *
 * Renders a career milestone timeline in two responsive layouts:
 * - Desktop (>1200px): vertical timeline with a "Show Full Timeline" expand toggle
 * - Mobile/tablet (≤1200px): horizontal scroll carousel with nav buttons and a progress bar
 *
 * The two layouts are always rendered; CSS controls which one is visible.
 * Timeline data is sourced from Data/timelineData.js.
 *
 * Used in: Home.jsx (My Journey section)
 */

import { useEffect, useRef, useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import timelineData from '../Data/timelineData';
import '../styles/Timeline.css';
import TimelineItem from './ui/TimelineItem';

function Timeline() {
  // ─── Refs ────────────────────────────────────────────────────────────────────

  // Ref to the horizontal scroll container — used to read/set scrollLeft
  const scrollRef = useRef(null);

  // ─── State ───────────────────────────────────────────────────────────────────

  // Progress bar fill percentage (0–100) driven by horizontal scroll position
  const [progress, setProgress] = useState(0);

  // Controls whether the desktop vertical timeline is fully expanded or clamped
  const [expanded, setExpanded] = useState(false);

  // ─── Handlers ────────────────────────────────────────────────────────────────

  /**
   * Recalculates the scroll progress percentage based on current scroll position.
   * Called on scroll events and after programmatic scrolls.
   */
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const total = el.scrollWidth - el.clientWidth;
    setProgress((el.scrollLeft / total) * 100);
  };

  /**
   * Scrolls the horizontal carousel left (-1) or right (1) by one card width.
   * Card width is read dynamically from the first child element so it stays
   * accurate if card sizes change — avoids a hardcoded magic number.
   */
  const scrollByCard = (dir = 1) => {
    const el = scrollRef.current;
    if (!el) return;

    // Read actual card width from DOM + add the gap (32px = --space-lg)
    // Falls back to 372px (340 + 32) if no child is found
    const cardWidth = (el.firstChild?.offsetWidth ?? 340) + 32;

    el.scrollBy({ left: cardWidth * dir, behavior: 'smooth' });

    // Update progress bar after the scroll animation completes (~600ms)
    setTimeout(handleScroll, 600);
  };

  // ─── Effects ─────────────────────────────────────────────────────────────────

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Listen for scroll events to keep the progress bar in sync
    el.addEventListener('scroll', handleScroll);

    // Set initial progress (handles case where scroll starts mid-way)
    handleScroll();

    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  // ─── Render ──────────────────────────────────────────────────────────────────

  return (
    <>
      {/* ══════════════════════════════════════════════════
          Desktop: Vertical Timeline (hidden on mobile via CSS)
          ══════════════════════════════════════════════════ */}
      <div className="milestone-vertical-wrapper">

        {/* Vertical line running down the left side */}
        <div className="milestone-vertical-line" />

        {/* Timeline items — clamped height until expanded */}
        <div
          id="milestone-vertical-track"
          className={`milestone-vertical-track ${expanded ? 'expanded' : ''}`}
        >
          {timelineData.map((entry, index) => (
            <TimelineItem
              key={index}
              year={entry.year}
              title={entry.title}
              description={entry.description}
            />
          ))}
        </div>

        {/* Toggle button to show/hide all entries */}
        <div className="timeline-toggle-wrapper">
          <button
            onClick={() => setExpanded(prev => !prev)}
            className="cta-button"
            aria-expanded={expanded}
            aria-controls="milestone-vertical-track"
          >
            {expanded ? 'Hide Timeline' : 'Show Full Timeline'}
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          Mobile/Tablet: Horizontal Scroll Carousel (hidden on desktop via CSS)
          ══════════════════════════════════════════════════ */}
      <div className="milestone-horizontal-wrapper">

        {/*
          Scroll buttons — two sets exist:
          1. Absolute-positioned (left/right of the scroll area) — shown on tablet
          2. Button row above the scroll area — shown on small mobile (≤500px)
          CSS controls which set is visible at each breakpoint.
        */}
        <div className="timeline-button left" onClick={() => scrollByCard(-1)} aria-label="Scroll Left">
          <HiOutlineChevronLeft size={24} />
        </div>
        <div className="timeline-button right" onClick={() => scrollByCard(1)} aria-label="Scroll Right">
          <HiOutlineChevronRight size={24} />
        </div>

        {/* Button row fallback for narrow mobile screens */}
        <div className="timeline-button-row">
          <button className="timeline-button left" onClick={() => scrollByCard(-1)} aria-label="Scroll Left">
            <HiOutlineChevronLeft size={24} />
          </button>
          <button className="timeline-button right" onClick={() => scrollByCard(1)} aria-label="Scroll Right">
            <HiOutlineChevronRight size={24} />
          </button>
        </div>

        {/* Scrollable card track */}
        <div className="milestone-horizontal-scroll" ref={scrollRef}>
          {timelineData.map((item, index) => (
            <div key={index} className="milestone-horizontal-card">
              <span className="milestone-year">{item.year}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Progress bar — width driven by scroll position percentage */}
        <div className="timeline-progress-container">
          <div className="timeline-progress-bar" style={{ width: `${progress}%` }} />
        </div>

      </div>
    </>
  );
}

export default Timeline;
