/* library */
import { useCallback } from "react";
import { useSelector } from "react-redux";
/* module from local */
import { RootState } from "../store";

export function useColorChange() {
  const awareness = useSelector((state: RootState) => state.yjs.awareness);

  const handleColorChange = useCallback((color: string) => {
    awareness.setLocalStateField("color", color);
  }, []);

  return { handleColorChange };
}
