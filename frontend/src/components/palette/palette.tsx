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
    <div className="border h-full ">
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
  );
}

export default Palette;
