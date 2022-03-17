import React, { createRef, useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';

const DisplayCanvas = ({ drawing, width, height, redrawTime=10000, ...props }) => {
  const canvasRef = createRef(null);

  useEffect(() => {
    let isActive = true;

    setTimeout(
      () => {
        let redrawInterval = setInterval(
          () => {
            canvasRef.current?.loadSaveData(drawing);
            if (!isActive) clearInterval(redrawInterval);
          },
          redrawTime + Math.random() * 1000,
        );
      },
      Math.random() * (redrawTime / 2),
    );

    return () => {
      isActive = false;
    };
  }, [canvasRef, drawing, redrawTime]);

  return (
    <div style={{display: 'flex', justifyContent: 'center', backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden' }}>
      <CanvasDraw 
        ref={canvasRef}
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
}

export default DisplayCanvas;
