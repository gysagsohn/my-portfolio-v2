import { useState } from 'react';
import { FaCheck, FaCopy, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from '../Data/socialLinks';
import '../styles/Contact.css';

function Contact() {
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const iconMap = {
    email: <FaEnvelope className="icon" />,
    linkedin: <FaLinkedin className="icon" />,
    instagram: <FaInstagram className="icon" />,
  };

  const displayMap = {
    email: 'gysagsohn@hotmail.com',
    linkedin: 'https://www.linkedin.com/in/gysagsohn/',
    instagram: '@gysagsohn',
  };

  return (
    <section className="contact-page">
      <h2 className="contact-heading">Let’s Talk!</h2>
      <p className="contact-intro">
        Whether it’s a cool project, a coffee chat, or just to say hey —<br />
        I’m always open to conversations about code, careers, or creativity.
      </p>

      <ul className="contact-links">
        {Object.entries(socialLinks).map(([key, { url }]) => (
          <li key={key} className="contact-item">
            {iconMap[key]}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="copy-text"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') window.open(url, '_blank');
              }}
            >
              {displayMap[key]}
            </a>
            <button
              className="copy-btn"
              onClick={() => handleCopy(displayMap[key], key)}
              tabIndex={0}
              aria-label={`Copy ${key}`}
            >
              {copiedItem === key ? <FaCheck className="copied-icon" /> : <FaCopy />}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contact;
