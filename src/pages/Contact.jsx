import { useState } from 'react';
import { FaCheck, FaCopy, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from '../Data/socialLinks';
import '../styles/Contact.css';

function Contact() {
  // Track which contact item was recently copied
  const [copiedItem, setCopiedItem] = useState(null);

  // Copy selected contact detail to clipboard and show confirmation icon
  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000); // Reset after 2 seconds
  };

  // Icon lookup by key (email, linkedin, etc.)
  const iconMap = {
    email: <FaEnvelope className="icon" />,
    linkedin: <FaLinkedin className="icon" />,
    instagram: <FaInstagram className="icon" />,
  };

  // Display text for each contact method
  const displayMap = {
    email: 'gysagsohn@hotmail.com',
    linkedin: 'https://www.linkedin.com/in/gysagsohn/',
    instagram: '@gysagsohn',
  };

  return (
    <section className="contact-page">
      {/* Header and intro message */}
      <h2 className="contact-heading">Let’s Talk!</h2>
      <p className="contact-intro">
        Whether it’s a cool project, a coffee chat, or just to say hey —<br />
        I’m always open to conversations about code, careers, or creativity.
      </p>

      {/* Social/contact links list */}
      <ul className="contact-links">
        {Object.entries(socialLinks).map(([key, { url }]) => (
          <li key={key} className="contact-item">
            {/* Render icon from iconMap */}
            {iconMap[key]}
            
            {/* Clickable link that also supports Enter key for accessibility */}
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

            {/* Copy-to-clipboard button with icon toggle */}
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
