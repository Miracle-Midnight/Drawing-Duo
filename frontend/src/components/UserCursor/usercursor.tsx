import { memo } from "react";

export interface UserCursorProps {
  point: number[];
  color: string;
  isActive: boolean;
  windowSize: number[];
}

export const UserCursor = memo(
  ({ point, color, isActive, windowSize }: UserCursorProps) => {
    const name = sessionStorage.getItem("friendNickname");
    const newPoints: number[] = [];
    if (windowSize) {
      const newPointX = (window.innerWidth * point[0]) / windowSize[0];
      const newPointY = (window.innerHeight * point[1]) / windowSize[1];
      newPoints.push(newPointX, newPointY);
    }

    return (
      <svg>
        <circle
          cx={newPoints[0]}
          cy={newPoints[1]}
          r={20}
          fill={isActive ? color : "grey"}
        />
        <text
          x={newPoints[0]}
          y={newPoints[1]}
          textAnchor="middle"
          alignmentBaseline="central"
        >
          <tspan fontWeight="bold">{name}</tspan>
        </text>
      </svg>
    );
  }
);

UserCursor.displayName = "usercursor";
