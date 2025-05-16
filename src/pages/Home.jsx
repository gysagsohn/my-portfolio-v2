import { useEffect, useState } from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { blogPosts } from '../Data/blogData';
import { socialLinks } from '../Data/socialLinks';
import logo from '../assets/logo.png';
import PostCard from '../components/PostCard';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Button from '../components/ui/Button';
import '../styles/Home.css';

const lines = [
  'const name = "Gy Sohn";',
  'const stack = ["JS", "React", "MongoDB", "More"];',
  'console.log("Welcome to my portfolio!");',
  'const bio = new Career("Lawyer").transitionTo("Coder");'
];

function Home() {
  const [city, setCity] = useState(null);
  const [showSocials, setShowSocials] = useState(false);
  const [visibleLines, setVisibleLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charCounts, setCharCounts] = useState([]);

  // IP location fetch
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => setCity(data.city || 'your corner of the internet'))
      .catch(() => setCity('somewhere mysterious'));
  }, []);

  // Reveal lines one at a time
  useEffect(() => {
    if (lineIndex < lines.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => [...prev, lines[lineIndex]]);
        setCharCounts(prev => [...prev, 0]);
        setLineIndex(prev => prev + 1);
      }, 1800); // Delay between line reveals
      return () => clearTimeout(timer);
    } else {
      const reset = setTimeout(() => {
        setVisibleLines([]);
        setLineIndex(0);
        setCharCounts([]);
      }, 5000); // Pause before loop reset
      return () => clearTimeout(reset);
    }
  }, [lineIndex]);

  // Character-by-character typing effect
  useEffect(() => {
    if (visibleLines.length === 0) return;

    const currentLineIndex = visibleLines.length - 1;
    const fullLine = lines[currentLineIndex];
    const typedSoFar = charCounts[currentLineIndex] || 0;

    if (typedSoFar < fullLine.length) {
      const timer = setTimeout(() => {
        const updatedCounts = [...charCounts];
        updatedCounts[currentLineIndex] = typedSoFar + 1;
        setCharCounts(updatedCounts);
      }, 25); // Typing speed
      return () => clearTimeout(timer);
    }
  }, [charCounts, visibleLines]);

  // Syntax highlighting
  function parseToJSX(line) {
    const tokens = line.split(/(\s+|".+?"|\[|\]|{|}|;|,|\(|\)|\.)/g);
    return tokens.map((token, idx) => {
      if (/^const$|^let$|^new$|^return$/.test(token)) {
        return <span key={idx} className="code-keyword">{token}</span>;
      }
      if (/^\[|\]$|^{|^}$|^;$|^,$|\(|\)|\./.test(token)) {
        return <span key={idx}>{token}</span>;
      }
      if (/^"[^"]+"$/.test(token)) {
        return <span key={idx} className="code-string">{token}</span>;
      }
      if (/^console$|^log$/.test(token)) {
        return <span key={idx} className="code-method">{token}</span>;
      }
      if (/^Career$/.test(token)) {
        return <span key={idx} className="code-class">{token}</span>;
      }
      if (/^\s+$/.test(token)) {
        return token;
      }
      return <span key={idx} className="code-variable">{token}</span>;
    });
  }

  const renderLocation = () => {
    if (!city) return '...';
    if (city.toLowerCase() === 'sydney') return 'Sydney, hard to beat!';
    return city;
  };

  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestBlog = sortedPosts.find(post => post.type === 'blog');
  const latestProject = sortedPosts.find(post => post.type === 'project');

  return (
    <main className="home-page">
      <section className="row hero-row" id="hero">
        <div className="hero-image-block">
          <p className="tagline">Ok! Let's do this</p>
          <img src={logo} alt="Gy Sohn smiling" className="hero-image" />
        </div>

        <div className="hero-text">
          <p className="subheading">Hi, I'm a Full Stack Developer</p>

          {/* Optional: Faux file path header */}
          {/* <div className="terminal-header">~/src/components/Hero.jsx</div> */}

          <div className="terminal-box">
            {visibleLines.map((line, i) => (
              <p key={i} className="fade-in-line">
                {parseToJSX(line.slice(0, charCounts[i] ?? 0))}
                {i === visibleLines.length - 1 && (
                  <span className="blinking-cursor">|</span>
                )}
              </p>
            ))}
          </div>

          <p className="intro">You’re visiting from {renderLocation()}</p>

          <div className="cta-buttons">
            <Button link="/blog" className="cta-button">View My Work</Button>
            <button
              className="cta-button-outline"
              onClick={() => setShowSocials(prev => !prev)}
            >
              Contact Me
            </button>
          </div>

          {showSocials && (
            <div className="social-icons contact-icons">
              <a href={socialLinks.email.url} aria-label="Email" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={28} />
              </a>
              <a href={socialLinks.linkedin.url} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} />
              </a>
              <a href={socialLinks.instagram.url} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={28} />
              </a>
            </div>
          )}
          <span className="scroll-down-indicator">↓</span>
        </div>
      </section>

      {/* Blog + Project + About Row */}
      <section className="row preview-about-row">
        <div className="preview-column">
          <PostCard {...latestBlog} />
          <PostCard {...latestProject} />
        </div>

        <div className="about-section">
          <h2>About Me</h2>
          <p className="about-text intro-line">I didn’t start in tech — and that’s my strength.</p>
          <p className="about-text">
            With a background in law and construction ops, I’ve spent a decade solving real-world problems.
            Now, I use that same energy to build apps that are clean, functional, and user-focused.
          </p>
          <div className="about-cta-group">
            <p>→ Curious to collaborate or talk shop?</p>
            <Button className="cta-button" link="/contact">Let’s Connect</Button>
          </div>
        </div>
      </section>

      {/* Skills + Timeline Row */}
      <section className="row skills-timeline-row">
        <div className="timeline-section">
          <h2 className="section-heading">My Journey</h2>
          <Timeline />
        </div>
        <div className="skills-section">
          <h2 className="section-heading">Tools I Use</h2>
          <Skills />
        </div>
      </section>
    </main>
  );
}

export default Home;
