import { useColorChange } from "../../hooks/useLineColor";
import { color } from "../palette/palette";

interface colorWithNumber extends color {
  number: number;
}

function ColorSection(props: colorWithNumber) {
  console.log("colorSection");
  console.log(props);
  const { handleColorChange } = useColorChange();
  return (
    <button
      className="w-full p-3"
      onClick={() =>
        handleColorChange(`rgba(${props.r},${props.g},${props.b})`)
      }
    >
      <div>{props.number}</div>
      <div
        className="w-full h-10"
        style={{
          backgroundColor: `rgba(${props.r},${props.g},${props.b})`,
        }}
      ></div>
    </button>
  );
}

export default ColorSection;
