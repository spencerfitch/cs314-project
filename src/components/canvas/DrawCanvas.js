import React, { forwardRef } from 'react';
import CanvasDraw from "react-canvas-draw";

import styles from './DrawCanvas.module.css';

const DrawCanvas = forwardRef(({ width, height, ...props }, ref) => (
  <div className={styles.container}>
    <CanvasDraw 
      ref={ref}
      brushRadius={3}
      canvasWidth={width}
      canvasHeight={height}
      hideInterface={true}
      lazyRadius={0}
      {...props}
    />
    <button 
      className='btn btn-secondary' 
      style={{width: '100%'}}
      onClick={(ev) => (window.confirm('Are you sure you want to clear the canvas?') && ref.current?.clear())}
    >
      Clear
    </button>
  </div> 
));

export default DrawCanvas;
