import * as React from "react";

export interface UserCursorProps {
  point: number[];
  color: string;
  isActive: boolean;
}

export const UserCursor = React.memo(
  ({ point, color, isActive }: UserCursorProps) => {
    return (
      <svg>
        <circle
          cx={point[0]}
          cy={point[1]}
          r={20}
          fill={isActive ? color : "grey"}
        />
        <text
          x={point[0]}
          y={point[1]}
          text-anchor="middle"
          alignment-baseline="central"
        >
          <tspan font-weight="bold">James</tspan>
        </text>
      </svg>
    );
  }
);
