import { useState } from 'react';
import { FaLink, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../Data/blogData';
import '../styles/BlogPostPage.css';

function BlogPostPage() {
  // Get the slug from the route URL
  const { slug } = useParams();

  // Find the post that matches the slug
  const post = blogPosts.find((p) => p.slug === slug);

  // For "Copy link" feedback
  const [copied, setCopied] = useState(false);

  // If no matching post found
  if (!post) {
    return <p className="not-found-message">Post not found</p>;
  }

  // When user clicks copy link button
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Clear feedback after 2 sec
  };

  return (
    <main className="blog-post-page-container">
      {/* Sidebar with share buttons */}
      <aside className="sticky-share-bar">
        {/* Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${window.location.href}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Twitter"
          title="Share on Twitter"
        >
          <FaTwitter size={20} />
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${encodeURIComponent(post.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>

        {/* Copy to clipboard */}
        <button
          onClick={handleCopyLink}
          className="copy-link-button"
          aria-label="Copy post URL"
          title="Copy link"
        >
          <FaLink size={20} />
          {copied && <span className="copied-toast">Copied!</span>}
        </button>
      </aside>

      {/* Main blog content */}
      <article className="blog-post">
        {/* Link back to blog home */}
        <Link to="/blog" className="back-to-blog">← Back to Blog</Link>

        {/* Blog heading */}
        <h1 className="blog-post-title">{post.title}</h1>

        {/* Short intro/summary under heading */}
        <p className="blog-post-summary">{post.summary}</p>

        {/* Blog image (resized and styled) */}
        <img src={post.image} alt={post.title} className="blog-post-image" />

        {/* Main blog body HTML content */}
        <div
          className="blog-post-body"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </article>
    </main>
  );
}

export default BlogPostPage;
