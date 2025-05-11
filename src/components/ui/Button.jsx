import '../../styles/buttons.css';

function Button({ type = 'primary', onClick, children }) {
  return (
    <button
      className={`button button-${type}`}
      onClick={type !== 'disabled' ? onClick : undefined}
      disabled={type === 'disabled'}
    >
      {children}
    </button>
  );
}

export default Button;
