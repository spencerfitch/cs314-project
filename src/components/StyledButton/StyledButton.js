
import './StyledButton.css'

const StyledButton = ({ onClick, style, children }) => (
  <button
    onClick={onClick}
    className={'btn'}
    style={{
      ...style
    }}
  >
    { children }
  </button>
);

export default StyledButton;
