import { useState } from 'react';
import tardisImg from '../assets/tardis.png';
import '../styles/Footer.css';

function Footer() {
  const [showTardisMenu, setShowTardisMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <button onClick={scrollToTop} className="mini-button">
          ↑ Back to top
        </button>
      </div>

      <div className="footer-content">
        <p>© 2025 Gy Sohn — Built with React & fuelled by just enough coffee</p>
        <p>Designed in Figma, deployed with Netlify</p>
        <p>Lawyer → Construction → Coder</p>
      </div>

      {/*  TARDIS Easter Egg */}
      <div className="tardis-easter-egg">
        <img
          src={tardisImg}
          alt="TARDIS"
          className="tardis-icon"
          onClick={() => setShowTardisMenu(!showTardisMenu)}
        />
        {showTardisMenu && (
          <div className="tardis-menu">
            <a
              href="https://gysohn-v1.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚀 Travel to v1 Portfolio
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
