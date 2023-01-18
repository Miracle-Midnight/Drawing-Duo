import ColorSection from "../colorSection/colorSection";

function Palette({ colors }: any) {
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
