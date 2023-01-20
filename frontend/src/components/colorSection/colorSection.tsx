import { useColorChange } from "../../hooks/useLineColor";
import { color } from "../palette/palette";

interface colorWithNumber extends color {
  number: number;
}

function ColorSection(props: colorWithNumber) {
  const { handleColorChange } = useColorChange();
  return (
    <button
      className="w-full p-3"
      onClick={() =>
        handleColorChange(`rgba(${props.red},${props.green},${props.blue})`)
      }
    >
      <div>{props.number}</div>
      <div
        className="w-full h-10"
        style={{
          backgroundColor: `rgba(${props.red},${props.green},${props.blue})`,
        }}
      ></div>
    </button>
  );
}

export default ColorSection;
