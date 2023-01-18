import { memo } from "react";

export interface UserCursorProps {
  point: number[];
  color: string;
  isActive: boolean;
}

export const UserCursor = memo(
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
          textAnchor="middle"
          alignmentBaseline="central"
        >
          <tspan fontWeight="bold">James</tspan>
        </text>
      </svg>
    );
  }
);
UserCursor.displayName = "usercursor";
