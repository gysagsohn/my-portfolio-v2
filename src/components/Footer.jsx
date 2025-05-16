import '../styles/Footer.css';

function Footer() {
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
    </footer>
  );
}

export default Footer;