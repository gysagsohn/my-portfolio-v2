/**
 * Blog.jsx
 *
 * Blog index page — displays all blog posts as a filterable card grid.
 * Posts can be filtered by type: All, Blog, or Projects.
 *
 * Features:
 * - Tab filter buttons (All / Blog / Projects)
 * - Posts sorted by date descending (most recent first)
 * - Filtered + sorted list is memoized to avoid re-computing on every render
 * - Post cards rendered via the reusable PostCard component
 *
 * Data: src/data/blogData.js
 * Used in: App.jsx (route: /blog)
 */

import { useMemo, useState } from 'react';
import { blogPosts } from '../Data/blogData';
import PostCard from '../components/PostCard';
import '../styles/Blog.css';

// Tab labels shown at the top of the page
const tabs = ['All', 'Blog', 'Projects'];

function Blog() {
  // ─── State ────────────────────────────────────────────────────────────────

  // Track which tab is currently selected
  const [activeTab, setActiveTab] = useState('All');

  // ─── Derived / computed ───────────────────────────────────────────────────

  // Filter and sort posts based on the active tab.
  // Wrapped in useMemo so the sort only re-runs when activeTab changes,
  // not on every render.
  const filteredPosts = useMemo(() => {
    let filtered;

    if (activeTab === 'Blog') {
      filtered = blogPosts.filter(p => p.type !== 'project');
    } else if (activeTab === 'Projects') {
      filtered = blogPosts.filter(p => p.type === 'project');
    } else {
      // 'All' tab — no filter applied
      filtered = blogPosts;
    }

    // Sort by date descending (most recent first)
    return [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [activeTab]);

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <main className="blog-page">

      {/* Hero section at the top */}
      <section className="blog-hero">
        <h1 className="blog-heading">Stories, Code, and Everything In Between</h1>
        <p className="blog-subheading">
          This is where I share more about my journey into tech – from career pivots to side projects,
          lessons learned, and the occasional "what was I thinking?" moment.
          If you're curious about the person behind the portfolio, you're in the right place.
        </p>
      </section>

      {/* Tab filter buttons */}
      <div className="blog-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            | {tab} |
          </button>
        ))}
      </div>

      {/* Display filtered posts as cards */}
      <section className="blog-grid">
        {filteredPosts.map((post) => (
          <PostCard
            // slug is unique per post — safer key than array index
            key={post.slug}
            title={post.title}
            summary={post.summary}
            image={post.image}
            slug={post.slug}
            date={post.date}
          />
        ))}
      </section>

    </main>
  );
}

export default Blog;
