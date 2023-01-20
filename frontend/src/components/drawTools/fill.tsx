/* library */
import { useDispatch } from "react-redux";
/* module from local */
import { fill } from "../../states/drawToolSlice";

export function Fill() {
  const dispatch = useDispatch();

  return (
    <button className="w-10 h-10 " onClick={() => dispatch(fill())}>
      fill
    </button>
  );
}

export default Fill;
