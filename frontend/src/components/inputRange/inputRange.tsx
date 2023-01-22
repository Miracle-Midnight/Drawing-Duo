/* library */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
/* module from local */
import { changeSize } from "../../states/sizeSlice";
import { RootState } from "../../store";

interface range {
  min: number;
  max: number;
}

function InputRange({ min, max }: range) {
  const size = useSelector((state: RootState) => state.size.value); // size reducer의 state중 value
  const dispatch = useDispatch(); // global state을 변경하기 위해 존재

  return (
    <div className="m-auto flex flex-row gap-2">
      <input
        type="range"
        value={size}
        onChange={(e) => dispatch(changeSize(+e.target.value))}
        min={min}
        max={max}
      ></input>

      <label>{`${size}`}</label>
    </div>
  );
}

export default InputRange;
