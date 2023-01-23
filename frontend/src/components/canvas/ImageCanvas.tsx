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
    console.log(img.src);
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (ctx === null) return;
      ctx.drawImage(img, 0, 0);
      console.log(ctx);
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
    console.log(context);
    const imageDate = context?.getImageData(e.clientX, e.clientY, 1, 1);
    console.log("DEBUG");
    console.log("e.clientX", e.clientX);
    console.log(imageDate);
    console.log("imageDate", imageDate?.data);
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
