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
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (ctx === null) return;
      ctx.drawImage(img, 0, 0);
      setContext(ctx);
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
    console.log(e.clientX);
    console.log(e.clientY);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={handlePointerDown}
      style={{ touchAction: "none" }}
      className="w-full h-full overflow-hidden"
    />
  );
}

export default ImageCanvas;
