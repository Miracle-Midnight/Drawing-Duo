/* library */
import { useState, useEffect } from "react";
import * as Y from "yjs";
/* module from local */
import { toPairs } from "../utils";

export function useLine(line: Y.Map<any>) {
  const [isComplete, setIsComplete] = useState<boolean>();
  const [color, setColor] = useState<string>();
  const [pts, setPts] = useState<number[][]>([]);
  const [size, setSize] = useState<number>();
  const [windowSize, setWindowSize] = useState<number[]>();

  useEffect(() => {
    function handleChange() {
      const current = line.toJSON();

      setIsComplete(current.isComplete);
      setColor(current.userColor);
      setSize(current.size);
      setWindowSize(current.windowsize);
    }

    handleChange();

    line.observe(handleChange);

    return () => {
      line.unobserve(handleChange);
    };
  }, [line]);

  useEffect(() => {
    const points = line.get("points") as Y.Array<number>;

    function handleChange() {
      setPts(toPairs(points.toArray()));
    }

    handleChange();

    points.observe(handleChange);

    return () => {
      points.unobserve(handleChange);
    };
  }, [line]);
  return { points: pts, color, isComplete, size, windowSize };
}
