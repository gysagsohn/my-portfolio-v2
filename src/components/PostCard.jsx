/**
 * PostCard.jsx
 *
 * Reusable blog/project card component rendered as a clickable image card.
 * Hovering reveals an overlay with the post title, summary, date, and a read prompt.
 *
 * Props:
 *   title   (string) — post title shown in the overlay
 *   summary (string) — short description shown in the overlay
 *   image   (string) — imported image asset for the card background
 *   slug    (string) — URL slug used to build the /blog/:slug link
 *   date    (string) — ISO date string (e.g. "2025-05-28"), formatted via formatDate
 *
 * Used in: Blog.jsx, Home.jsx
 */

import { Link } from 'react-router-dom';
import { formatDate } from '../functions/formatDate';
import '../styles/PostCard.css';

function PostCard({ title, summary, image, slug, date }) {
  return (
    <Link to={`/blog/${slug}`} className="post-card">
      {/*
        loading="lazy" defers image loading until the card is near the viewport.
        This improves initial page load time, especially on the blog grid page
        where multiple cards are rendered at once.
      */}
      <img src={image} alt={title} loading="lazy" />

      {/* Overlay fades in on hover — see PostCard.css for the transition */}
      <div className="post-overlay">
        <h3>{title}</h3>
        <p>{summary}</p>
        {date && <p className="post-date">{formatDate(date)}</p>}
        <p className="read-more">Click to read more →</p>
      </div>
    </Link>
  );
}

export default PostCard;
