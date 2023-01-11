import * as React from "react";

export interface UserCursorProps {
  point: number[];
  color: string;
  isActive: boolean;
}

export const UserCursor = React.memo(
  ({ point, color, isActive }: UserCursorProps) => {
    return (
      <circle
        cx={point[0]}
        cy={point[1]}
        r={20}
        fill={isActive ? color : "grey"}
      />
    );
  }
);
