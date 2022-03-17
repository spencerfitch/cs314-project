import React from "react";

import styles from './CardContainer.module.css';

const CardContainer = ({ handleClose, style, children }) => (
  <div style={style}>
    <div className={styles.btnClose}>
      <button onClick={handleClose}>
        ✕
      </button>
    </div>

    <div
      className={styles.container}
    >
      { children }
    </div>
  </div>
);

export default CardContainer;
