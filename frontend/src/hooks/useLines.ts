/* library */
import * as Y from "yjs";
import { useState, useRef, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
/* module from local */
import { RootState } from "../store";

interface User {
  id: number;
  point: number[];
  color: string;
  isActive: boolean;
}

export function useLines() {
  const [lines, setLines] = useState<Y.Map<any>[]>([]);
  const rCurrentLine = useRef<Y.Map<any>>();

  const [yLines, undoManager, doc, awareness] = useSelector(
    (state: RootState) => [
      state.yjs.yLines,
      state.yjs.undoManager,
      state.yjs.doc,
      state.yjs.awareness,
    ]
  );

  useEffect(() => {
    function handleChange() {
      const lines = yLines.toArray();
      setLines(lines);
    }
    yLines.observe(handleChange);

    return () => yLines.unobserve(handleChange);
  }, []);

  const startLine = useCallback((point: number[], size: number) => {
    const id = Date.now().toString();
    const yPoints = new Y.Array<number>();
    yPoints.push([...point]);

    const yLine = new Y.Map();

    // undoManager.stopCapturing();

    const user = awareness.getLocalState() as User;

    doc.transact(() => {
      yLine.set("id", id);
      yLine.set("points", yPoints);
      yLine.set("userColor", user.color);
      yLine.set("isComplete", false);
      yLine.set("size", size);
      yLine.set("windowsize", [window.innerWidth, window.innerHeight]);
    });

    rCurrentLine.current = yLine;
    yLines.push([yLine]);
  }, []);

  const addPointToLine = (point: number[]) => {
    const currentLine = rCurrentLine.current;

    if (!currentLine) return;

    const points = currentLine.get("points");

    if (!points) return;

    points.push([...point]);
  };

  const completeLine = useCallback(() => {
    const currentLine = rCurrentLine.current;
    if (!currentLine) return;

    rCurrentLine.current?.set("isComplete", true);
    rCurrentLine.current = undefined;
  }, []);

  const undoLine = useCallback(() => {
    undoManager.undo();
  }, []);

  const redoLine = useCallback(() => {
    undoManager.redo();
  }, []);

  return {
    lines,
    startLine,
    addPointToLine,
    completeLine,
    undoLine,
    redoLine,
  };
}
