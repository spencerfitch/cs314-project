import React from "react";

import styles from './CardContainer.module.css';

const CardContainer = ({ handleClose, style, children }) => (
  <div>
    <div className={styles.btnClose}>
      <button onClick={handleClose}>
        ✕
      </button>
    </div>

    <div
      className={styles.container}
      style={style}
    >
      { children }
    </div>
  </div>
);

export default CardContainer;
