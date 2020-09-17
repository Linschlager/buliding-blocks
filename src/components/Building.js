import React, { memo } from "react";
import { GRID_PADDING, GRID_SIZE } from "../tools/consts";

const Building = ({ x, y, size = 1, color }) => {
  return (
    <div
      style={{
        top: y,
        left: x,
        position: "absolute",
        backgroundColor: color,
        opacity: 0.5,
        padding: (GRID_SIZE / 2) * size + GRID_PADDING
      }}
    ></div>
  );
};

export default memo(Building);
