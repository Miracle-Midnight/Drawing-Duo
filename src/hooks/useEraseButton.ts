/* library */
import { useCallback, useState } from "react";
/* module from local */

export function useEraseButton() {
  const [isErase, setIsErase] = useState<boolean>(false);

  const eraseButton = useCallback(() => {
    isErase ? setIsErase(false) : setIsErase(true);
  }, [isErase]);

  return { isErase, eraseButton };
}
