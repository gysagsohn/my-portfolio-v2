import { useState } from 'react';
import { FaLink, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../Data/blogData';
import '../styles/BlogPostPage.css';

function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return <p className="not-found-message">Post not found</p>;
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
  };

  return (
    <main className="blog-post-page-container">
      <aside className="sticky-share-bar">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${window.location.href}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Twitter"
          title="Share on Twitter"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${encodeURIComponent(post.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>
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
    </main>
  );
}

export default BlogPostPage;
