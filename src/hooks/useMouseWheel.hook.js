import { useEffect } from "react";
import attachListener from "../tools/attachListener";
import { MOUSE_WHEEL } from "../resources/consts";
/**
 * setLevel((prev) => {
        const nextLevel = prev + deltaY / 100; // Calculate the next state
        if (nextLevel < minLevel) return minLevel; // Clamp level to bottom
        if (nextLevel > maxLevel) return maxLevel; // Clamp level to top
        return nextLevel; // Update the state
      });
 */
const useMouseWheel = (callback) => {
  useEffect(() => {
    const handleMouseWheel = (event) => {
      callback(event);
    };
    return attachListener(MOUSE_WHEEL, handleMouseWheel);
  }, [callback]);
};

export default useMouseWheel;
