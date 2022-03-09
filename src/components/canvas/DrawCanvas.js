import React, { forwardRef } from 'react';
import CanvasDraw from "react-canvas-draw";

const DrawCanvas = forwardRef(({ width, height, ...props }, ref) => (
  <div style={{border: '1px solid rgba(0, 0, 0, .2)', width: 'fit-content', margin: '0 auto'}}>
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
