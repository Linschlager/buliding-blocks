import React, { useState, useCallback } from "react";
import "./styles.css";
import FloatingPreview from "./components/FloatingPreview";
import PersistentBuildings from "./components/PersistentBuildings";
import useMouseWheel from "./tools/useMouseWheel.hook";

export default function App() {
  const [buildings, setBuildings] = useState([]);
  const level = useMouseWheel(1, 1, 5, true);

  const build = useCallback((square) => {
    setBuildings((prev) => [...prev, square]);
  }, []);

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
        size={level}
      />
    </div>
  );
}
