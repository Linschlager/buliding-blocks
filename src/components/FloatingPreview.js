import React, { useState, useEffect } from "react";
import Building from "./Building";
import Square from "../tools/rectangle";
import useMousePosition from "../tools/useMousePosition.hook";
import useMouseClick from "../tools/useMouseClick.hook";

const FloatingPreview = ({ checkPosition, onBuild, size = 1 }) => {
  const [x, y] = useMousePosition(size);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    setValid(checkPosition(new Square(x, y, size)));
  }, [x, y, size, checkPosition]);

  useMouseClick(() => {
    if (
      typeof checkPosition === "function" &&
      checkPosition(new Square(x, y, size)) === true
    ) {
      if (typeof onBuild === "function") {
        onBuild(new Square(x, y, size));
      }
    }
  });

  return <Building x={x} y={y} size={size} color={valid ? "green" : "red"} />;
};

export default FloatingPreview;
