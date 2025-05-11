import { Link } from 'react-router-dom';
import '../../styles/Card.css';

function Card({ title, description, imageSrc, link }) {
  return (
    <div className="card">
      {imageSrc && <img src={imageSrc} alt={title} className="card-image" />}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && <Link to={link} className="card-link">Read more →</Link>}
      </div>
    </div>
  );
}

export default Card;
