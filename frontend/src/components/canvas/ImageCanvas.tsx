import { useState, useCallback, useEffect, useRef } from "react";

interface srcProps {
  src: string;
}

export function ImageCanvas({ src }: srcProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (ctx === null) return;
      ctx.drawImage(img, 0, 0);
      contextRef.current = ctx;
    };
  }, [src]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.addEventListener(
      "touchmove",
      (e) => {
        e.preventDefault();
      },
      { passive: false }
    );
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent<any>) => {
    const imageData = contextRef.current?.getImageData(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY,
      1,
      1
    );
    const pixelData = imageData?.data;
    console.log(pixelData);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={handlePointerDown}
      style={{ touchAction: "none" }}
      className="w-full h-full overflow-hidden object-contain"
    />
  );
}

export default ImageCanvas;
