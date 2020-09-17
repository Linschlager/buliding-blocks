import { useEffect } from "react";
import attachListener from "../tools/attachListener";
import { MOUSE_CLICK } from "../resources/consts";

const useMouseClick = (callback) => {
  useEffect(() => {
    const handleMouseClick = (event) => {
      if (typeof callback === "function") {
        const { clientX, clientY } = event;
        callback(clientX, clientY);
      }
    };

    return attachListener(MOUSE_CLICK, handleMouseClick);
  }, [callback]);
};

export default useMouseClick;
