import { useState, useEffect } from "react";

const useMouseWheel = (
  defaultLevel = 1,
  minLevel = -Infinity,
  maxLevel = Infinity,
  clamp = true
) => {
  const [level, setLevel] = useState(defaultLevel);

  useEffect(() => {
    const handleMouseWheel = (event) => {
      event.preventDefault();
      const { deltaY } = event;
      setLevel((prev) => {
        const nextLevel = prev + deltaY / 100;
        if (clamp === false || (nextLevel >= minLevel && nextLevel <= maxLevel))
          return nextLevel;
        return prev;
      });
    };
    window.addEventListener("mousewheel", handleMouseWheel);
    return () => window.removeEventListener("mousewheel", handleMouseWheel);
  }, [minLevel, maxLevel, clamp]);

  return level;
};

export default useMouseWheel;
