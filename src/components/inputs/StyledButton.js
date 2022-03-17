import React from 'react';

const StyledButton = ({ onClick, style, variant, children }) => (
  <button
    onClick={onClick}
    className={`btn btn-${variant}`}
    style={style}
  >
    { children }
  </button>
);

export default StyledButton;
