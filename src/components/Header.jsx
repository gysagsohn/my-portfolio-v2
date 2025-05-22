import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';

const navItems = [
  { name: '| Home |', to: '/' },
  { name: '| Blog |', to: '/blog' },
  { name: '| Contact |', to: '/contact' },
];

function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
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
          aria-label="Toggle dark mode"
          onClick={toggleDarkMode}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="navbar-box">
        {navItems.map(({ name, to }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Nav Toggle */}
      <div className="mobile-menu-wrapper">
        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-expanded={menuOpen}>
          Menu {menuOpen ? '▲' : '▼'}
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
