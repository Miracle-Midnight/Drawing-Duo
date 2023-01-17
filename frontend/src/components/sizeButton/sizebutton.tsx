/* library */
import { useSelector, useDispatch } from "react-redux";
/* module from local */
import { changeSize } from "../../states/sizeSlice";
import { RootState } from "../../store";

export function SizeButton() {
  const size = useSelector((state: RootState) => state.size.value); // size reducer의 state중 value
  const dispatch = useDispatch(); // global state을 변경하기 위해 존재

  return (
    <div>
      <input
        type="range"
        onChange={(e) => dispatch(changeSize(+e.target.value))}
        min="1"
        max="100"
      />
      <label>{`Size: ${size}`}</label>
    </div>
  );
}
