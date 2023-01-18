import { useColorChange } from "../../hooks/useLineColor";

function ColorSection(props: any) {
  const { handleColorChange } = useColorChange();
  return (
    <div className="grid grid-cols-2 my-2">
      <button
        onClick={() =>
          handleColorChange(`rgba(${props.red},${props.green},${props.blue})`)
        }
      >
        <div className="mr-2">{props.number}</div>
        <div
          className="w-10 h-6"
          style={{
            backgroundColor: `rgba(${props.red},${props.green},${props.blue})`,
          }}
        ></div>
      </button>
    </div>
  );
}

export default ColorSection;
