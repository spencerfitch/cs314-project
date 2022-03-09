import React from 'react';
import CanvasDraw from 'react-canvas-draw';

const DisplayCanvas = ({ drawing, width, height, ...props }) => (
  <CanvasDraw 
    brushRadius={3}
    canvasWidth={width}
    canvasHeight={height}
    hideInterface={true}
    lazyRadius={0}
    disabled={true}
    saveData={drawing}
    hideGrid={true}
    {...props}
  />
);

export default DisplayCanvas;
