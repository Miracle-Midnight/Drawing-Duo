/* library */
import { useState } from "react";

export function SizeButton() {
  const [size, setSize] = useState<number>(1);

  const handleRangeChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    console.log("[DEBUG]{range value}");
    console.log(target.value);
    setSize(+target.value);
  };

  return (
    <div>
      <input
        type="range"
        value={size}
        onChange={handleRangeChange}
        min="1"
        max="100"
      />
      <label>{`Size: ${size}`}</label>
    </div>
  );
}
