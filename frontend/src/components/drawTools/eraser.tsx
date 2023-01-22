/* library */
import React from "react";
import { useDispatch } from "react-redux";
/* module from local */
import { erase } from "../../states/drawToolSlice";

function Eraser(props: any) {
  const dispatch = useDispatch();

  return (
    <button className="w-10 h-10 " onClick={() => dispatch(erase())}>
      <svg
        width="20"
        height="20"
        className="m-auto"
        viewBox="0 0 36 36"
        version="1.1"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>eraser-line</title>
        <path
          fill={props.isClickEraser ? "rgb(219,0,255)" : "currentColor"}
          d="M35.62,12a2.82,2.82,0,0,0-.84-2L27.49,2.65a2.9,2.9,0,0,0-4,0L2.83,23.28a2.84,2.84,0,0,0,0,4L7.53,32H3a1,1,0,0,0,0,2H28a1,1,0,0,0,0-2H16.74l18-18A2.82,2.82,0,0,0,35.62,12ZM13.91,32H10.36L4.25,25.89a.84.84,0,0,1,0-1.19l5.51-5.52,8.49,8.48ZM33.37,12.54,19.66,26.25l-8.48-8.49,13.7-13.7a.86.86,0,0,1,1.19,0l7.3,7.29a.86.86,0,0,1,.25.6A.82.82,0,0,1,33.37,12.54Z"
          className="clr-i-outline clr-i-outline-path-1"
        ></path>
        <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
      </svg>
    </button>
  );
}

export default Eraser;
