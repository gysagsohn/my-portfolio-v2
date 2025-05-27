import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' },
];

function Header() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;

    // Detect system preference
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
  console.log(`Theme set to: ${theme}`);
}, [theme]);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.remove('light', 'dark', 'retro');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const cycleTheme = () => {
    const next =
      theme === 'light' ? 'dark' :
      theme === 'dark' ? 'retro' : 'light';
    setTheme(next);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="site-header">
      <div className="header-left">
        <Link to="/" className="logo">~GySohn</Link>
        <button
          className="dark-toggle"
          aria-label="Cycle theme"
          onClick={cycleTheme}
        >
          {theme === 'light' && '🌞'}
          {theme === 'dark' && '🌙'}
          {theme === 'retro' && '👾'}
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="navbar-box grouped-nav">
        {navItems.map(({ name, to },) => (
          <div key={to} className="nav-item-group">
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? 'nav-link active with-pipes' : 'nav-link'
              }
            >
              <span className="pipe left" aria-hidden="true">|</span>
              <span className="nav-text">{name}</span>
              <span className="pipe right" aria-hidden="true">|</span>
            </NavLink>
          </div>
        ))}
      </nav>

      {/* Mobile Nav Toggle */}
      <div className="mobile-menu-wrapper">
        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
        >
          {theme === 'retro' ? '👾 MENU' : `Menu ${menuOpen ? '▲' : '▼'}`}
        </button>

        {menuOpen && (
          <nav className="mobile-nav-links">
            {navItems.map(({ name, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
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
