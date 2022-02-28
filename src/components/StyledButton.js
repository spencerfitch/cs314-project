
const StyledButton = ({ onClick, style, variant, children }) => (
  <button
    onClick={onClick}
    className={`btn ${variant}`}
    style={{
      ...style
    }}
  >
    { children }
  </button>
);

export default StyledButton;
