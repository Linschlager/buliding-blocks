import { useEffect, useState } from "react";
import { GRID_SIZE, GRID_PADDING } from "./consts";

const useMousePosition = (size) => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  useEffect(() => {
    const handleMouseMove = (ev) => {
      const [xValue, yValue] = [
        ev.clientX - Math.floor((size - 1) * (GRID_SIZE / 2)),
        ev.clientY - Math.floor((size - 1) * (GRID_SIZE / 2))
      ];
      setX(Math.floor(xValue / GRID_SIZE) * GRID_SIZE - 2 * GRID_PADDING);
      setY(Math.floor(yValue / GRID_SIZE) * GRID_SIZE - 2 * GRID_PADDING);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  return [x, y];
};

export default useMousePosition;
