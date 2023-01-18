import ColorSection from "../colorSection/colorSection";

interface color {
  red: number;
  blue: number;
  green: number;
}

interface colorType {
  colors: color[];
}

function Palette({ colors }: colorType) {
  return (
    <div className="absolute right-24 top-20 p-10 h-4/5 overflow-auto shadow-md rounded-sm">
      <div className="flex flex-col">
        {colors.map((color: any, index: any) => (
          <div key={index}>
            <ColorSection
              number={index + 1}
              red={color.r}
              green={color.g}
              blue={color.b}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Palette;
