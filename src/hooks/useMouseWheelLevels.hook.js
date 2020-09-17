import { useState } from "react";
import useMouseWheel from "./useMouseWheel.hook";

const useMouseWheelLevels = (defaultLevel = 1, minLevel = 1, maxLevel = 5) => {
  const [levelX, setLevelX] = useState(defaultLevel);
  const [levelY, setLevelY] = useState(defaultLevel);

  const adjustLevel = (deltaY) => (previousState) => {
    const nextLevel = previousState + deltaY / 100;
    if (nextLevel < minLevel) return minLevel;
    if (nextLevel > maxLevel) return maxLevel;
    return nextLevel;
  };

  useMouseWheel((event) => {
    const { shiftKey, deltaY } = event;
    if (shiftKey) {
      setLevelX(adjustLevel(deltaY));
    } else {
      setLevelY(adjustLevel(deltaY));
    }
  });

  return [levelX, levelY];
};

export default useMouseWheelLevels;
