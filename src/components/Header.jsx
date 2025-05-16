import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const navItems = [
  { name: '| Home |', to: '/' },
  { name: '| Blog |', to: '/blog' },
  { name: '| Contact |', to: '/contact' },
];

function Header() {
  return (
    <header className="site-header">
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
