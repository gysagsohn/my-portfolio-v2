import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';

const navItems = [
  { name: '| Home |', to: '/' },
  { name: '| Blog |', to: '/blog' },
  { name: '| Contact |', to: '/contact' },
];

function Header() {
  return (
    <header className="site-header">
      <div className="header-left">
        <Link to="/" className="logo">~GySohn</Link>
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
        <button className="dark-toggle" aria-label="Toggle dark mode">
          🌓
        </button>
      </nav>
    </header>
  );
}

export default Header;
