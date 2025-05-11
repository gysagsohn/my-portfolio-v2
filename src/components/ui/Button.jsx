// src/components/ui/Button.jsx
import { Link } from 'react-router-dom';

function Button({ children, link = '#', className = '', ...props }) {
  return (
    <Link to={link} className={className} {...props}>
      {children}
    </Link>
  );
}

export default Button;