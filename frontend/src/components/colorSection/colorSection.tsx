import { useColorChange } from "../../hooks/useLineColor";
import { color } from "../palette/palette";

interface colorWithNumber extends color {
  number: number;
}

function ColorSection(props: colorWithNumber) {
  const { handleColorChange } = useColorChange();
  return (
    <button
      onClick={() =>
        handleColorChange(`rgba(${props.red},${props.green},${props.blue})`)
      }
    >
      <div>{props.number}</div>
      <div
        className="w-10 h-6"
        style={{
          backgroundColor: `rgba(${props.red},${props.green},${props.blue})`,
        }}
      ></div>
    </button>
  );
}

export default ColorSection;
