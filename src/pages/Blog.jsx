import { useState } from 'react';
import { blogPosts } from '../Data/blogData';
import PostCard from '../components/PostCard';
import '../styles/Blog.css';

const tabs = ['All', 'Blog', 'Projects'];

function Blog() {
  const [activeTab, setActiveTab] = useState('All');

  const getFilteredPosts = () => {
    if (activeTab === 'Blog') return blogPosts.filter(p => !p.slug.includes('projects'));
    if (activeTab === 'Projects') return blogPosts.filter(p => p.slug.includes('projects'));
    return blogPosts;
  };

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <h1 className="blog-heading">Stories, Code, and Everything In Between</h1>
        <p className="blog-subheading">
          This is where I share more about my journey into tech – from career pivots to side projects, lessons learned, and the occasional "what was I thinking?" moment. If you're curious about the person behind the portfolio, you're in the right place.
        </p>
      </section>

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

      <section className="blog-grid">
        {getFilteredPosts().map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            summary={post.summary}
            image={post.image}
            link={post.slug}
          />
        ))}
      </section>
    </main>
  );
}

export default Blog;
