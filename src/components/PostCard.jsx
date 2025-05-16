import { Link } from 'react-router-dom';
import { formatDate } from '../functions/formatDate';
import '../styles/PostCard.css';

function PostCard({ title, summary, image, slug, date }) {
  return (
    <Link to={`/blog/${slug}`} className="post-card">
      <img src={image} alt={title} />
      <div className="post-overlay">
        <h3>{title}</h3>
        <p>{summary}</p>
        {date && <p className="post-date">{formatDate(date)}</p>}
        <p className="read-more">Click to read more →</p>
      </div>
    </Link>
  );
}

export default PostCard;
