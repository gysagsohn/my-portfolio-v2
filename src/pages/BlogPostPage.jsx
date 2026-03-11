/**
 * BlogPostPage.jsx
 *
 * Renders a single blog post based on the URL slug parameter.
 * Finds the matching post from blogPosts data and displays its full content.
 *
 * Features:
 * - Renders blog body as raw HTML (dangerouslySetInnerHTML) — safe because
 *   all content is hardcoded locally, not from an external/user source.
 *   NOTE: If this ever connects to a CMS or external API, sanitize HTML
 *   with DOMPurify before rendering to prevent XSS attacks.
 * - Sticky share bar with copy-to-clipboard, LinkedIn, and Twitter sharing
 * - GA4 event tracking on share and copy actions
 *
 * Route: /blog/:slug
 * Used in: App.jsx
 */

import { useState } from 'react';
import { FaLink, FaLinkedin, FaShareAlt, FaTwitter } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../Data/blogData';
import '../styles/BlogPostPage.css';

function BlogPostPage() {
  // Extract the slug from the URL (e.g. /blog/career-switch → slug = "career-switch")
  const { slug } = useParams();

  // Find the matching post — returns undefined if slug doesn't match any post
  const post = blogPosts.find((p) => p.slug === slug);

  // 'copied' tracks which button was last clicked ('link' | 'message' | '')
  // Used to show the "Copied!" toast on the correct button
  const [copied, setCopied] = useState('');

  // Controls visibility of the share dropdown menu
  const [showMenu, setShowMenu] = useState(false);

  // If no post matches the slug, show a fallback message
  // This renders before the share bar variables are set up — safe to return early
  if (!post) {
    return <p className="not-found-message">Post not found</p>;
  }

  // ─── Share URLs ────────────────────────────────────────────────────────────
  const url = window.location.href;
  const message = `I just read "${post.title}" by an up-and-coming coder — check it out!`;

  // Pre-encoded for use in social share URL query strings
  const encodedURL = encodeURIComponent(url);
  const encodedMessage = encodeURIComponent(message);

  // ─── Handlers ──────────────────────────────────────────────────────────────

  /**
   * Copies either just the URL ('link') or the full message + URL ('message')
   * to the clipboard, then fires a GA4 event and shows a temporary toast.
   */
  const handleCopy = (type) => {
    const textToCopy = type === 'message' ? `${message}\n${url}` : url;
    navigator.clipboard.writeText(textToCopy);
    setCopied(type);

    // Fire GA4 custom event — only runs if GA4 script is loaded
    if (window.gtag) {
      window.gtag('event', 'copy_click', {
        method: type,
        content_title: post.title,
      });
    }

    // Reset the toast after 2 seconds
    setTimeout(() => setCopied(''), 2000);
  };

  /**
   * Fires a GA4 event when a social share link is clicked.
   * The actual navigation is handled by the <a> tag — this is analytics only.
   */
  const handleShareClick = (platform) => {
    if (window.gtag) {
      window.gtag('event', 'share_click', {
        platform,
        content_title: post.title,
      });
    }
  };

  // ─── Render ────────────────────────────────────────────────────────────────

  return (
    <main className="blog-post-page-container">

      {/* ── Article Content ── */}
      <article className="blog-post">
        <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
        <h1 className="blog-post-title">{post.title}</h1>
        <p className="blog-post-summary">{post.summary}</p>
        <img src={post.image} alt={post.title} className="blog-post-image" />

        {/*
          Renders the blog body as raw HTML stored in the post data file.
          Safe here because content is local/hardcoded — not from user input
          or an external API. Revisit this if a CMS is added in future.
        */}
        <div
          className="blog-post-body"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </article>

      {/* ── Sticky Share Bar (right side on desktop, fixed on mobile) ── */}
      <aside className="sticky-share-bar">
        <button
          className="share-toggle"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle share menu"
          title="Share"
        >
          <FaShareAlt size={20} />
        </button>

        {showMenu && (
          <div className="share-menu">

            {/* Copy link only */}
            <button
              onClick={() => handleCopy('link')}
              className="copy-link-button"
              aria-label="Copy link only"
              title="Copy link"
            >
              <FaLink size={18} /> Copy Link
              {copied === 'link' && (
                <span className="copied-toast" role="status" aria-live="polite">
                  Copied!
                </span>
              )}
            </button>

            {/* Copy pre-written message + link (ideal for sharing on WhatsApp, etc.) */}
            <button
              onClick={() => handleCopy('message')}
              className="copy-link-button"
              aria-label="Copy message"
              title="Copy message + link"
            >
              <FaLink size={18} /> Copy Message
              {copied === 'message' && (
                <span className="copied-toast" role="status" aria-live="polite">
                  Copied!
                </span>
              )}
            </button>

            {/* LinkedIn share — uses LinkedIn's share-offsite API */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              title="Share on LinkedIn"
              onClick={() => handleShareClick('linkedin')}
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>

            {/* Twitter/X share — pre-fills tweet with message and URL */}
            <a
              href={`https://twitter.com/intent/tweet?text=${encodedMessage}&url=${encodedURL}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              title="Share on Twitter"
              onClick={() => handleShareClick('twitter')}
            >
              <FaTwitter size={18} /> Twitter
            </a>

          </div>
        )}
      </aside>

    </main>
  );
}

export default BlogPostPage;
