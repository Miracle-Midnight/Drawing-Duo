import ColorSection from "../colorSection/colorSection";

function Palette({ colors }: any) {
  return (
    <div className="absolute right-24 top-20 p-10 h-4/5 overflow-auto shadow-md rounded-sm">
      <div className="flex flex-col">
        {colors.map((color:any, index:any) => (
          <ColorSection key={index} number={index + 1} red={color.red} green={color.green} blue={color.blue} />
        ))}
      </div>
    </div>
  );
}

export default Palette;
