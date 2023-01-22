import ColorSection from "../colorSection/colorSection";

export interface color {
  r: number;
  b: number;
  g: number;
}

interface colorType {
  colors: color[];
}

export function Palette({ colors }: colorType) {
  return (
    <div className="center-container" >
      <div className="grid grid-cols-2 border rounded-lg shadow-sm h-96 overflow-auto my-auto">
        {colors.map((color: color, index: number) => (
          <div key={index}>
            <ColorSection
              number={index + 1}
              r={color.r}
              g={color.g}
              b={color.b}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Palette;
