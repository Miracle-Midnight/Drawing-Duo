import React, { useRef, useEffect } from "react";

interface srcProps {
  src: string;
}

export function ImageCanvas({ src }: srcProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      if (ctx === null) return;
      ctx.drawImage(img, 0, 0);
    };
  }, [src]);

  return <canvas ref={canvasRef} />;
}

export default ImageCanvas;
