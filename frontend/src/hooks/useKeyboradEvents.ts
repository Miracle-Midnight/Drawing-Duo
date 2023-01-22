/* library */
import { useEffect } from "react";
import { useSelector } from "react-redux";
/* move from locale */
import { RootState } from "../store";

export function useKeyboardEvents() {
  const undoManager = useSelector((state: RootState) => state.yjs.undoManager);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case "z": {
          if (e.ctrlKey || e.metaKey) {
            if (e.shiftKey) {
              undoManager?.redo();
            } else {
              undoManager?.undo();
            }
            break;
          }
        }
      }
    }

    document.body.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}
