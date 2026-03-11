/**
 * Header.jsx
 *
 * Site-wide sticky header with logo, theme toggle, and navigation.
 *
 * Features:
 * - Logo links back to home
 * - Theme toggle cycles through: light → dark → retro → light
 *   Theme is persisted in localStorage and applied as a class on <body>
 *   Falls back to the OS system preference (prefers-color-scheme) if no saved theme
 * - Desktop nav: pill-shaped grouped nav with active pipe decorators
 * - Mobile nav: collapsible dropdown triggered by a toggle button
 *
 * Used in: App.jsx (rendered on every page above <Routes>)
 */

import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';

// Navigation items — add or remove routes here to update both desktop and mobile nav
const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' },
];

function Header() {

  // ─── State ──

  const [theme, setTheme] = useState(() => {
    // On first load: check localStorage for a saved preference
    const saved = localStorage.getItem('theme');
    if (saved) return saved;

    // No saved preference — fall back to the OS/browser system setting
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    return prefersDark ? 'dark' : 'light';
  });

  // Controls whether the mobile dropdown nav is open
  const [menuOpen, setMenuOpen] = useState(false);

  //  Effects 

  useEffect(() => {
    // Apply theme class to <body> so all CSS variables update site-wide.
    // Remove all theme classes first to avoid stacking (e.g. "dark retro").
    document.body.classList.remove('light', 'dark', 'retro');
    document.body.classList.add(theme);

    // Persist the user's theme choice across page loads
    localStorage.setItem('theme', theme);
  }, [theme]);

  //  Handlers 

  // Cycles through the three themes in order
  const cycleTheme = () => {
    const next =
      theme === 'light' ? 'dark' :
      theme === 'dark'  ? 'retro' : 'light';
    setTheme(next);
  };

  // Toggles the mobile nav open/closed
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    <header className="site-header">

      {/* ── Left: Logo + Theme Toggle ── */}
      <div className="header-left">
        <Link to="/" className="logo">~GySohn</Link>
        <button
          className="dark-toggle"
          aria-label="Cycle theme"
          onClick={cycleTheme}
        >
          {/* Icon reflects the current active theme */}
          {theme === 'light' && '🌞'}
          {theme === 'dark'  && '🌙'}
          {theme === 'retro' && '👾'}
        </button>
      </div>

      {/* ── Desktop Nav (hidden on mobile via CSS) ── */}
      <nav className="navbar-box grouped-nav">
        {navItems.map(({ name, to }) => (
          <div key={to} className="nav-item-group">
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? 'nav-link active with-pipes' : 'nav-link'
              }
            >
              {/* Pipe characters are decorative — hidden unless the link is active */}
              <span className="pipe left" aria-hidden="true">|</span>
              <span className="nav-text">{name}</span>
              <span className="pipe right" aria-hidden="true">|</span>
            </NavLink>
          </div>
        ))}
      </nav>

      {/* ── Mobile Nav Toggle + Dropdown (shown below 1200px via CSS) ── */}
      <div className="mobile-menu-wrapper">
        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-links"
        >
          {/* Retro mode gets a special label; other themes show open/close arrows */}
          {theme === 'retro' ? '👾 MENU' : `Menu ${menuOpen ? '▲' : '▼'}`}
        </button>

        {menuOpen && (
          <nav id="mobile-nav-links" className="mobile-nav-links">
            {navItems.map(({ name, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)} // Close menu after navigating
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>
        )}
      </div>

    </header>
  );
}

export default Header;
