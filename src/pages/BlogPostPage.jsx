// BlogPostPage.jsx
import { useState } from 'react';
import { FaLink, FaLinkedin, FaShareAlt, FaTwitter } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../Data/blogData';
import '../styles/BlogPostPage.css';

function BlogPostPage() {
  // Get slug from route parameter (e.g. blog/career-switch)
  const { slug } = useParams();

  // Find the corresponding blog post based on slug
  const post = blogPosts.find((p) => p.slug === slug);

  // State for "copied" toast + share menu toggle
  const [copied, setCopied] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  if (!post) {
    return <p className="not-found-message">Post not found</p>;
  }

  // Create base shareable content
  const url = window.location.href;
  const message = `I just read "${post.title}" by an up-and-coming coder — check it out!`;
  const encodedURL = encodeURIComponent(url);
  const encodedMessage = encodeURIComponent(message);

  // Handler: Copy either the link or message+link to clipboard
  const handleCopy = (type) => {
    const textToCopy = type === 'message' ? `${message}\n${url}` : url;
    navigator.clipboard.writeText(textToCopy);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000); // Reset toast
  };

  return (
    <main className="blog-post-page-container">
      {/* Main article content */}
      <article className="blog-post">
        <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
        <h1 className="blog-post-title">{post.title}</h1>
        <p className="blog-post-summary">{post.summary}</p>
        <img src={post.image} alt={post.title} className="blog-post-image" />
        <div
          className="blog-post-body"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </article>

      {/* Sticky share menu */}
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
            {/* Option: Copy plain URL */}
            <button
              onClick={() => handleCopy('link')}
              className="copy-link-button"
              aria-label="Copy link only"
              title="Copy link"
            >
              <FaLink size={18} /> Copy Link
              {copied === 'link' && <span className="copied-toast">Copied!</span>}
            </button>

            {/* Option: Copy pre-filled message */}
            <button
              onClick={() => handleCopy('message')}
              className="copy-link-button"
              aria-label="Copy message"
              title="Copy message + link"
            >
              <FaLink size={18} /> Copy Message
              {copied === 'message' && <span className="copied-toast">Copied!</span>}
            </button>

            {/* LinkedIn share */}
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedURL}&title=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              title="Share on LinkedIn"
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>

            {/* Twitter share */}
            <a
              href={`https://twitter.com/intent/tweet?text=${encodedMessage}&url=${encodedURL}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              title="Share on Twitter"
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
