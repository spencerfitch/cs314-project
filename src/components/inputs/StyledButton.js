import React from 'react';

import styles from './StyledButton.module.css';

const StyledButton = ({ onClick, style, variant, children }) => {
  const variantClass = (
    (variant === 'primary')
    ? styles.primary
    : (variant === 'outline-primary')
    ? styles.outlinePrimary
    : `btn-${variant}`
  );

  return (
    <button
      onClick={onClick}
      className={`btn ${variantClass}`}
      style={style}
    >
      { children }
    </button>
  )
};

export default StyledButton;
