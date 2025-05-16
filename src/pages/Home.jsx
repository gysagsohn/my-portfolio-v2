import { useEffect, useState } from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
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

  const [text] = useTypewriter({
    words: [
      "I'm Gy Sohn",
      'Based in Sydney',
      'React, Node & Beyond',
      'Let’s build something cool',
      'Ex-Lawyer Turned Coder'
    ],
    loop: true,
    delaySpeed: 2000,
  });

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

  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestBlog = sortedPosts.find(post => post.type === 'blog');
  const latestProject = sortedPosts.find(post => post.type === 'project');

  return (
    <main className="home-page">
      {/* Hero Row */}
      <section className="row hero-row" id="hero">
        <div className="hero-image-block">
          <p className="tagline">Ok! Let's do this</p>
          <img src={logo} alt="Gy Sohn smiling with sunglasses" className="hero-image" />
        </div>
        <div className="hero-text">
          <p className="subheading">Hi, I'm a Full Stack Developer</p>
          <h1 className="typewriter-line">
            {text}
            <Cursor cursorStyle="|" />
          </h1>
          <p className="intro">
            You’re visiting from {renderLocation()}
          </p>

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
