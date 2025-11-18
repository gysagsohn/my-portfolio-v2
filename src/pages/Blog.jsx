import { useState } from 'react';
import { blogPosts } from '../Data/blogData';
import PostCard from '../components/PostCard';
import '../styles/Blog.css';

// Tab labels shown at the top of the page
const tabs = ['All', 'Blog', 'Projects'];

function Blog() {
  // Track which tab is currently selected
  const [activeTab, setActiveTab] = useState('All');

  // Filter blogPosts based on selected tab and sort by date (most recent first)
  const getFilteredPosts = () => {
    let filtered;
    if (activeTab === 'Blog') {
      filtered = blogPosts.filter(p => p.type !== 'project');
    } else if (activeTab === 'Projects') {
      filtered = blogPosts.filter(p => p.type === 'project');
    } else {
      filtered = blogPosts;
    }
    
    // Sort by date in descending order (most recent first)
    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

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
        {getFilteredPosts().map((post, index) => (
          <PostCard
            key={index}
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
