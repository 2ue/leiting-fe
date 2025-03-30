import React, { useRef, useEffect } from 'react';
import { fabric } from 'fabric';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      width: window.innerWidth - 48,
      height: window.innerHeight - 200,
      backgroundColor: '#ffffff',
    });

    // 启用画布平移
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fabricCanvas.on('mouse:down', (opt: any) => {
      const evt = opt.e;
      if (evt.altKey === true) {
        fabricCanvas.isDragging = true;
        fabricCanvas.lastPosX = evt.clientX;
        fabricCanvas.lastPosY = evt.clientY;
      }
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fabricCanvas.on('mouse:move', (opt: any) => {
      if (fabricCanvas.isDragging) {
        const evt = opt.e;
        const vpt = fabricCanvas.viewportTransform!;
        vpt[4] += evt.clientX - fabricCanvas.lastPosX;
        vpt[5] += evt.clientY - fabricCanvas.lastPosY;
        fabricCanvas.requestRenderAll();
        fabricCanvas.lastPosX = evt.clientX;
        fabricCanvas.lastPosY = evt.clientY;
      }
    });

    fabricCanvas.on('mouse:up', () => {
      fabricCanvas.isDragging = false;
    });

    // 启用画布缩放
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fabricCanvas.on('mouse:wheel', (opt: any) => {
      const delta = opt.e.deltaY;
      let zoom = fabricCanvas.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.1) zoom = 0.1;
      fabricCanvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
    });
    canvasRef.current = fabricCanvas;

    return () => {
      fabricCanvas.dispose();
    };
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">无限画布</h1>
      <div className="bg-white rounded-lg shadow w-full" style={{ height: 'calc(100vh - 200px)' }}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default Canvas;