import React, { memo } from "react";
import Building from "./Building";

const PersistentBuildings = ({ buildings }) => {
  return (
    <>
      {buildings.map((square) => (
        <Building
          key={`${square.getX()}/${square.getY()}`}
          x={square.getX()}
          y={square.getY()}
          size={square.getSize()}
          color="yellow"
        />
      ))}
    </>
  );
};

export default memo(PersistentBuildings);
