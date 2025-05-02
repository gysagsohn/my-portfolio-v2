import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="site-header">
      <h1>Gy Sohn Portfolio v2</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
