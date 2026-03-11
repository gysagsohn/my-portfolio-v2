/**
 * Footer.jsx
 *
 * Site-wide footer rendered on every page below the route content.
 *
 * Features:
 * - "Back to Top" button that smooth-scrolls to the top of the page
 * - Copyright and attribution text
 * - TARDIS easter egg: clicking the TARDIS icon reveals a menu linking to the v1 portfolio.
 *   The menu closes automatically when clicking anywhere outside it (click-outside handler).
 *
 * Used in: App.jsx (rendered on every page below <Routes>)
 */

import { useEffect, useRef, useState } from 'react';
import tardisImg from '../assets/tardis.png';
import '../styles/Footer.css';

function Footer() {
  // ─── State ────────────────────────────────────────────────────────────────

  // Controls whether the TARDIS easter egg menu is open
  const [showTardisMenu, setShowTardisMenu] = useState(false);

  // Ref attached to the TARDIS wrapper — used to detect clicks outside it
  const tardisRef = useRef();

  // ─── Effects ──────────────────────────────────────────────────────────────

  useEffect(() => {
    // Close the TARDIS menu when the user clicks anywhere outside the component.
    // Attached to document so it catches clicks regardless of where they land.
    function handleClickOutside(e) {
      if (tardisRef.current && !tardisRef.current.contains(e.target)) {
        setShowTardisMenu(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // ─── Handlers ─────────────────────────────────────────────────────────────

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <footer className="site-footer">

      {/* Back to top — positioned top-right of the footer */}
      <div className="footer-top">
        <button onClick={scrollToTop} className="mini-button">
          ↑ Back to top
        </button>
      </div>

      {/* Attribution text */}
      <div className="footer-content">
        <p>© 2025 Gy Sohn — Built with React & fuelled by just enough coffee</p>
        <p>Designed in Figma, deployed with Netlify</p>
        <p>Lawyer → Construction → Coder</p>
      </div>

      {/* TARDIS Easter Egg — click to reveal a link to the v1 portfolio */}
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
