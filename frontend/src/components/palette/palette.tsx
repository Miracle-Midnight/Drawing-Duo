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
    </div>
  );
}

export default Palette;
