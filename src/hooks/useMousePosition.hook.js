import { useEffect, useState } from "react";
import { GRID_SIZE, GRID_PADDING, MOUSE_MOVE } from "../resources/consts";
import attachListener from "../tools/attachListener";

const useMousePosition = (width, height) => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  useEffect(() => {
    const handleMouseMove = (ev) => {
      const [xValue, yValue] = [
        ev.clientX - Math.floor((width - 1) * (GRID_SIZE / 2)),
        ev.clientY - Math.floor((height - 1) * (GRID_SIZE / 2))
      ];
      setX(Math.floor(xValue / GRID_SIZE) * GRID_SIZE - 2 * GRID_PADDING);
      setY(Math.floor(yValue / GRID_SIZE) * GRID_SIZE - 2 * GRID_PADDING);
    };
    return attachListener(MOUSE_MOVE, handleMouseMove);
  }, [width, height]);

  return [x, y];
};

export default useMousePosition;
