import ColorSection from "../colorSection/colorSection";

export interface color {
  red: number;
  blue: number;
  green: number;
}



interface colorType {
  colors: color[];
}

export function Palette({ colors }: colorType) {
  return (
    <div className="border">
      {colors.map((color: color, index: number) => (
        <div key={index}>
          <ColorSection
            number={index + 1}
            red={color.red}
            green={color.green}
            blue={color.blue}
          />
        </div>
      ))}
    </div>
  );
}

export default Palette;
