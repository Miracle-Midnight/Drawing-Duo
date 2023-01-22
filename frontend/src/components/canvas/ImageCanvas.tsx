import { useState, useCallback, useEffect, useRef } from "react";

interface srcProps {
  src: string;
}

export function ImageCanvas({ src }: srcProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (ctx === null) return;
      ctx.drawImage(img, 0, 0);
      setContext(ctx);
    };
  }, [src]);

  const handlePointerDown = useCallback((e: React.PointerEvent<any>) => {
    console.log(e.clientX);
    console.log(e.clientY);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={handlePointerDown}
      className="w-full h-full"
    />
  );
}

export default ImageCanvas;
