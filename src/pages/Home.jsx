import { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { blogPosts } from '../Data/blogData';
import { socialLinks } from '../Data/socialLinks';
import logo from '../assets/logo.png';
import PostCard from '../components/PostCard';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Button from '../components/ui/Button';
import '../styles/Home.css';

// Typing lines for terminal box
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

  // IP location fetch for personal greeting
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => setCity(data.city || 'your corner of the internet'))
      .catch(() => setCity('somewhere mysterious'));
  }, []);

  // Animate new line every 1.8s
  useEffect(() => {
    if (lineIndex < lines.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => [...prev, lines[lineIndex]]);
        setCharCounts(prev => [...prev, 0]);
        setLineIndex(prev => prev + 1);
      }, 1800);
      return () => clearTimeout(timer);
    } else {
      const reset = setTimeout(() => {
        setVisibleLines([]);
        setLineIndex(0);
        setCharCounts([]);
      }, 5000);
      return () => clearTimeout(reset);
    }
  }, [lineIndex]);

  // Character-by-character animation
  useEffect(() => {
    if (visibleLines.length === 0) return;
    const currentLineIndex = visibleLines.length - 1;
    const fullLine = lines[currentLineIndex];
    const typedSoFar = charCounts[currentLineIndex] || 0;
    if (typedSoFar < fullLine.length) {
      const timer = setTimeout(() => {
        const updated = [...charCounts];
        updated[currentLineIndex] = typedSoFar + 1;
        setCharCounts(updated);
      }, 25);
      return () => clearTimeout(timer);
    }
  }, [charCounts, visibleLines]);

  // Syntax highlighting parser
  function parseToJSX(line) {
    const tokens = line.split(/(\s+|".+?"|\[|\]|{|}|;|,|\(|\)|\.)/g);
    return tokens.map((token, idx) => {
      if (/^const$|^let$|^new$|^return$/.test(token)) return <span key={idx} className="code-keyword">{token}</span>;
      if (/^\[|\]$|^{|^}$|^;$|^,$|\(|\)|\./.test(token)) return <span key={idx}>{token}</span>;
      if (/^"[^"]+"$/.test(token)) return <span key={idx} className="code-string">{token}</span>;
      if (/^console$|^log$/.test(token)) return <span key={idx} className="code-method">{token}</span>;
      if (/^Career$/.test(token)) return <span key={idx} className="code-class">{token}</span>;
      if (/^\s+$/.test(token)) return token;
      return <span key={idx} className="code-variable">{token}</span>;
    });
  }

  const renderLocation = () => {
    if (!city) return '...';
    return city;
  };

  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestBlog = sortedPosts.find(post => post.type === 'blog');
  const latestProject = sortedPosts.find(post => post.type === 'project');

  // ✅ Scroll to next section
  const scrollToMainSection = () => {
    const section = document.querySelector('.home-main-grid');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ✅ Fade out scroll arrow
  const heroRef = useRef(null);
  const [arrowHidden, setArrowHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const { bottom } = heroRef.current.getBoundingClientRect();
      setArrowHidden(bottom < window.innerHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="home-page">
      {/* === HERO SECTION === */}
      <section className="hero-row" ref={heroRef}>
        <div className="hero-image-block">
          <p className="tagline">Ok! Let's do this</p>
          <img src={logo} alt="Gy Sohn smiling" className="hero-image" />
        </div>

        <div className="hero-text">
          <p className="subheading">Hi, I'm a Full Stack Developer</p>
          <div className="terminal-box">
            {visibleLines.map((line, i) => (
              <p key={i} className="fade-in-line">
                {parseToJSX(line.slice(0, charCounts[i] ?? 0))}
                {i === visibleLines.length - 1 && <span className="blinking-cursor">|</span>}
              </p>
            ))}
          </div>
          <p className="intro">You’re visiting from {renderLocation()}</p>

          <div className="cta-buttons">
            <Button link="/blog" className="cta-button">View My Work</Button>
            <button className="cta-button-outline" onClick={() => setShowSocials(prev => !prev)}>Contact Me</button>
          </div>

          {showSocials && (
            <div className="social-icons contact-icons">
              <a href={socialLinks.email.url} target="_blank" rel="noopener noreferrer"><FaEnvelope size={28} /></a>
              <a href={socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} /></a>
              <a href={socialLinks.instagram.url} target="_blank" rel="noopener noreferrer"><FaInstagram size={28} /></a>
            </div>
          )}
        </div>

        {/* Scroll-down arrow */}
        <span
          className={`scroll-down-indicator ${arrowHidden ? 'hidden' : ''}`}
          onClick={scrollToMainSection}
        >
          ↓
        </span>
      </section>

      {/* === MAIN CONTENT SECTION === */}
      <section className="home-main-grid">
        {/* LEFT: Timeline */}
        <aside className="timeline-column">
          <h2 className="section-heading">My Journey</h2>
          <Timeline />
        </aside>

        {/* RIGHT: Blog, About, Skills */}
        <section className="content-column">
          <div className="preview-column">
            <PostCard {...latestBlog} />
            <PostCard {...latestProject} />
          </div>
          <div className="about-section">
            <h2>About Me</h2>
            <p className="about-text intro-line">I didn’t start in tech and that’s my edge.</p>
            <p className="about-text">
              I kicked off my career in law and construction ops, where getting things done (properly) wasn’t optional. 
              Now, I bring that same problem-solving drive into building web apps ones that actually make work easier, not harder.
            </p>
            <p className="about-text">
              I like working on products that feel sharp and helpful. I’m a fan of clean code, decent coffee, and honest conversations.
            </p>
            <div className="about-cta-group">
              <p className="about-cta-highlight">→ Liking what you're seeing?</p>
              <Button className="cta-button" link="/contact">Let’s Connect</Button>
            </div>
          </div>

          <div className="skills-section">
            <h2 className="section-heading">Tools I Use</h2>
            <Skills />
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
