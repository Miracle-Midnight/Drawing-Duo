/* library */
import * as Y from "yjs";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
/* module from local */
import { RootState } from "../store";

export function useConnection() {
  const [isSynced, setIsSynced] = useState<boolean>(false);

  const provider = useSelector((state: RootState) => state.yjs.provider);

  useEffect(() => {
    function handleDisconnect() {
      provider?.disconnect();
    }

    window.addEventListener("beforeunload", handleDisconnect);

    provider?.connect();

    return () => {
      handleDisconnect();
      window.removeEventListener("beforeunload", handleDisconnect);
    };
  }, []);

  return isSynced;
}
