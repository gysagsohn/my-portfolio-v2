import { Hand } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { blogPosts } from '../Data/blogData';
import { projects } from '../Data/projectData';
import logo from '../assets/logo.png';
import PostCard from '../components/PostCard';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Button from '../components/ui/Button';
import '../styles/Home.css';

function Home() {
  const [city, setCity] = useState(null);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        setCity(data.city || 'your corner of the internet');
      })
      .catch(() => {
        setCity('somewhere mysterious');
      });
  }, []);

  const renderLocation = () => {
    if (!city) return '...';
    if (city.toLowerCase() === 'sydney') return 'Sydney, hard to beat!';
    return city;
  };

  return (
    <main className="home-page">
      {/* Hero Row */}
      <section className="row hero-row">
        <div className="hero-image-block">
          <p className="tagline">Ok! Let's do this</p>
          <img src={logo} alt="Gy Sohn smiling with sunglasses" className="hero-image" />
        </div>
        <div className="hero-text">
          <h1>
            Hi, I'm Gy Sohn{' '}
            <span className="wave-icon">
              <Hand size={100} />
            </span>
          </h1>
          <p className="intro">
            You’re visiting from {renderLocation()}
            <br />
            I’m coding from Sydney
          </p>
          <div className="social-icons">
            <a href="mailto:gysagsohn@hotmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FaEnvelope size={28} />
            </a>
            <a href="https://www.linkedin.com/in/gysagsohn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={28} />
            </a>
            <a href="https://www.instagram.com/gysagsohn/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Blog + Project + About Row */}
      <section className="row preview-about-row">
        <div className="preview-column">
          <h2 className="preview-title">Latest Blog</h2>
          <PostCard {...blogPosts[0]} />

          <h2 className="preview-title">Latest Project</h2>
          <PostCard {...projects[0]} />
        </div>

        <div className="about-section">
          <h2>About Me</h2>
          <p className="about-text intro-line">
            I didn’t start in tech — and that’s my strength.
          </p>
          <p className="about-text">
            With a background in law and construction ops, I’ve spent a decade solving real-world problems.
            Now, I use that same energy to build apps that are clean, functional, and user-focused.
          </p>
          <div className="about-cta-group">
            <p>→ Curious to collaborate or talk shop?</p>
            <Button className="cta-button" link="/contact">
              Let’s Connect
            </Button>
          </div>
        </div>
      </section>

      {/* Skills + Timeline Row */}
      <section className="row skills-timeline-row">
        <div className="timeline-section">
          <h2>My Journey</h2>
          <Timeline />
        </div>

        <div className="skills-section">
          <h2>Tools I Use</h2>
          <Skills />
        </div>
      </section>
    </main>
  );
}

export default Home;
