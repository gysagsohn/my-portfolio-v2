/**
 * ScrollToTop.jsx
 *
 * Utility component that scrolls the window to the top on every route change.
 * Without this, React Router preserves the scroll position when navigating
 * between pages, which means users could land mid-page on a new route.
 *
 * Renders nothing — this is a behaviour-only component.
 *
 * Used in: App.jsx (placed inside <BrowserRouter>, above <Routes>)
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route path changes
    window.scrollTo(0, 0);
  }, [pathname]);

  // No UI — this component only handles scroll behaviour
  return null;
}

export default ScrollToTop;
