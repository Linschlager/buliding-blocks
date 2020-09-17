import React, { useState, useCallback } from "react";
import "./styles.css";
import FloatingPreview from "./components/FloatingPreview";
import PersistentBuildings from "./components/PersistentBuildings";
import useMouseWheelLevels from "./hooks/useMouseWheelLevels.hook";

export default function App() {
  const [buildings, setBuildings] = useState([]);
  const [levelX, levelY] = useMouseWheelLevels();

  // Adds a building to the state
  const build = useCallback((square) => {
    setBuildings((prev) => [...prev, square]);
  }, []);

  // Checks that the given building doesn't intersect with any that are already built
  const checkBuilding = useCallback(
    (building) =>
      !buildings.some((otherBuilding) => building.intersects(otherBuilding)),
    [buildings]
  );

  return (
    <div className="App">
      <PersistentBuildings buildings={buildings} />
      <FloatingPreview
        checkPosition={checkBuilding}
        onBuild={build}
        width={levelX}
        height={levelY}
      />
    </div>
  );
}
