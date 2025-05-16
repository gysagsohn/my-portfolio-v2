import { useEffect, useState } from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { blogPosts } from '../Data/blogData';
import { socialLinks } from '../Data/socialLinks';
import logo from '../assets/logo.png';
import PostCard from '../components/PostCard';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Button from '../components/ui/Button';
import '../styles/Home.css';

function Home() {
  const [city, setCity] = useState(null);
  const [showSocials, setShowSocials] = useState(false);
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);
  const [showLine4, setShowLine4] = useState(false);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => setCity(data.city || 'your corner of the internet'))
      .catch(() => setCity('somewhere mysterious'));
  }, []);

  useEffect(() => {
    setShowLine1(true);
    const timer2 = setTimeout(() => setShowLine2(true), 1800);
    const timer3 = setTimeout(() => setShowLine3(true), 3600);
    const timer4 = setTimeout(() => setShowLine4(true), 5400);
    return () => {
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const renderLocation = () => {
    if (!city) return '...';
    return city.toLowerCase() === 'sydney' ? 'Sydney, hard to beat!' : city;
  };

  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestBlog = sortedPosts.find(post => post.type === 'blog');
  const latestProject = sortedPosts.find(post => post.type === 'project');

  return (
    <main className="home-page">
      <section className="row hero-row" id="hero">
        <div className="hero-image-block">
          <p className="tagline">Ok! Let's do this</p>
          <img src={logo} alt="Gy Sohn smiling with sunglasses" className="hero-image" />
        </div>

        <div className="hero-text">
          <p className="subheading">Hi, I'm a Full Stack Developer</p>
          <div className="typewriter-group">
            {showLine1 && (
              <p className="typewriter-line">
                <Typewriter words={["I'm Gy Sohn"]} typeSpeed={50} cursor={false} />
              </p>
            )}
            {showLine2 && (
              <p className="typewriter-line">
                <Typewriter words={["Based in Sydney"]} typeSpeed={50} cursor={false} />
              </p>
            )}
            {showLine3 && (
              <p className="typewriter-line">
                <Typewriter words={["React, Node & Beyond"]} typeSpeed={50} cursor={false} />
              </p>
            )}
            {showLine4 && (
              <p className="typewriter-line">
                <Typewriter words={["Ex-Lawyer Turned Coder"]} typeSpeed={50} cursor={false} />
              </p>
            )}
          </div>

          <p className="intro">You’re visiting from {renderLocation()}</p>

          <div className="cta-buttons">
            <Button link="/blog" className="cta-button">View My Work</Button>
            <button className="cta-button-outline" onClick={() => setShowSocials(prev => !prev)}>Contact Me</button>
          </div>

          {showSocials && (
            <div className="social-icons contact-icons">
              <a href={socialLinks.email.url} aria-label={socialLinks.email.iconLabel} target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={28} />
              </a>
              <a href={socialLinks.linkedin.url} aria-label={socialLinks.linkedin.iconLabel} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} />
              </a>
              <a href={socialLinks.instagram.url} aria-label={socialLinks.instagram.iconLabel} target="_blank" rel="noopener noreferrer">
                <FaInstagram size={28} />
              </a>
            </div>
          )}

          <span className="scroll-down-indicator">↓</span>
        </div>
      </section>

      {/* Blog + Project + About */}
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

      {/* Skills + Timeline */}
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
