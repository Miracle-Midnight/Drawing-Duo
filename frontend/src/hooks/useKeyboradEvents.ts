/* library */
import { useEffect } from "react";
/* move from locale */
import { undoManager } from "../y";

export function useKeyboardEvents() {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case "z": {
          if (e.ctrlKey || e.metaKey) {
            if (e.shiftKey) {
              undoManager.redo();
            } else {
              undoManager.undo();
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
