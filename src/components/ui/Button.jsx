/**
 * Button.jsx
 *
 * Reusable button/link component that handles both internal and external URLs.
 *
 * - Internal routes (e.g. "/blog", "/contact") → rendered as React Router <Link>
 *   for client-side navigation (no full page reload)
 * - External URLs (starting with "http") → rendered as a plain <a> tag
 *   because React Router <Link> only works for internal routes
 *
 * Props:
 *   children  (node)   — button label or content
 *   link      (string) — destination URL, defaults to '#'
 *   className (string) — CSS class(es) to apply, defaults to ''
 *
 * Used in: Home.jsx
 */

import { Link } from 'react-router-dom';

function Button({ children, link = '#', className = '', ...props }) {
  // External URLs must use a plain <a> tag — React Router <Link> only handles
  // internal routes and will break if given an absolute URL like "https://..."
  const isExternal = link.startsWith('http');

  if (isExternal) {
    return (
      <a
        href={link}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={link} className={className} {...props}>
      {children}
    </Link>
  );
}

export default Button;
