/* library */
import { useCallback } from "react";
/* module from local */
import { awareness } from "../y";

export function useColorChange() {
  const handleColorChange = useCallback((color: string) => {
    awareness.setLocalStateField("color", color);
  }, []);

  return { handleColorChange };
}
