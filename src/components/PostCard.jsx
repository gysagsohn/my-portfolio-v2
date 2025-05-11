import { Link } from 'react-router-dom';
import '../styles/Card.css';

function PostCard({ title, summary, image, link }) {
  return (
    <Link to={link} className="post-card">
      <img src={image} alt={title} />
      <div className="overlay">
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </Link>
  );
}

export default PostCard;
