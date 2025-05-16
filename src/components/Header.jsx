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

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
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
    </header>
  );
}

export default Header;
