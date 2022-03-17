import React from 'react';
import CanvasDraw from 'react-canvas-draw';

const DisplayCanvas = ({ drawing, width, height, ...props }) => (
    <div style={{display: 'flex', justifyContent: 'center', backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden' }}>
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
    </div>
);

export default DisplayCanvas;
