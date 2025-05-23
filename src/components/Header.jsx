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
    return localStorage.getItem('theme') || 'light';
  });

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
      <nav className="navbar-box">
        {navItems.map(({ name, to }, index) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive ? 'nav-link active nav-piped' : 'nav-link nav-piped'
            }
          >
            <span className="nav-text">{name}</span>
          </NavLink>
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
