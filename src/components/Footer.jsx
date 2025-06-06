import { useEffect, useRef, useState } from 'react';
import tardisImg from '../assets/tardis.png';
import '../styles/Footer.css';

function Footer() {
  const [showTardisMenu, setShowTardisMenu] = useState(false);
  const tardisRef = useRef();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        tardisRef.current &&
        !tardisRef.current.contains(e.target)
      ) {
        setShowTardisMenu(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

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
      <div className="tardis-easter-egg" ref={tardisRef}>
        <img
          src={tardisImg}
          alt="TARDIS"
          className="tardis-icon"
          onClick={() => setShowTardisMenu((prev) => !prev)}
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
