/**
 * NotFound.jsx
 *
 * Custom 404 page shown when a route doesn't match any defined path.
 * Styled with a humorous "Internal Hellfire" theme to match the site personality.
 *
 * Used in: App.jsx (catch-all route: path="*")
 */

import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

function NotFound() {
  return (
    <section className="not-found">
      <h1>666 – Internal Hellfire</h1>
      <p>You've summoned a forbidden route. This page has been banished to the shadow realm.</p>
      <div className="hellfire-icon">🔥</div>
      <Link to="/" className="back-home">Return to safety (Home)</Link>
    </section>
  );
}

export default NotFound;
