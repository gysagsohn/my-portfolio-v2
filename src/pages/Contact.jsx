/**
 * Contact.jsx
 *
 * Contact page displaying social/email links with copy-to-clipboard functionality.
 *
 * Features:
 * - Clickable links for email (mailto), LinkedIn, and Instagram
 * - Copy-to-clipboard button on each item with animated checkmark confirmation
 * - Keyboard accessible: links and copy buttons support tabIndex and Enter key
 * - Contact data sourced from Data/socialLinks.js — update links there, not here
 *
 * Used in: App.jsx (route: /contact)
 */

import { useState } from 'react';
import { FaCheck, FaCopy, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from '../Data/socialLinks';
import '../styles/Contact.css';

function Contact() {
  // State 

  // Tracks which contact item was most recently copied (by key: 'email', 'linkedin', etc.)
  // Used to swap the copy icon for a checkmark on the correct row
  const [copiedItem, setCopiedItem] = useState(null);

  // Handlers 

  // Copies the display text to clipboard and shows a confirmation icon for 2 seconds
  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  //  Maps 

  // Icon component for each contact method — keyed by socialLinks key
  const iconMap = {
    email:     <FaEnvelope className="icon" />,
    linkedin:  <FaLinkedin className="icon" />,
    instagram: <FaInstagram className="icon" />,
  };

  // Human-readable display text for each contact method
  const displayMap = {
    email:     'gysagsohn@hotmail.com',
    linkedin:  'https://www.linkedin.com/in/gysohn/',
    instagram: '@gysagsohn',
  };

  //  Render 

  return (
    <section className="contact-page">

      {/* Header and intro */}
      <h2 className="contact-heading">Let's Talk!</h2>
      <p className="contact-intro">
        Whether it's a cool project, a coffee chat, or just to say hey —<br />
        I'm always open to conversations about code, careers, or creativity.
      </p>

      {/* Social/contact links list */}
      <ul className="contact-links">
        {Object.entries(socialLinks).map(([key, { url }]) => (
          <li key={key} className="contact-item">

            {/* Icon from iconMap */}
            {iconMap[key]}

            {/* Clickable link — opens in new tab, also supports Enter key for accessibility */}
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

            {/* Copy button — toggles between copy icon and checkmark after click */}
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
