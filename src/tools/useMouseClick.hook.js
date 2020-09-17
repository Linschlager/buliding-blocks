import { useEffect } from "react";

const useMouseClick = (callback) => {
  useEffect(() => {
    const handleMouseClick = (event) => {
      if (typeof callback === "function") {
        const { clientX, clientY } = event;
        callback(clientX, clientY);
      }
    };
    window.addEventListener("mouseup", handleMouseClick);
    return () => window.removeEventListener("mouseup", handleMouseClick);
  }, [callback]);
};

export default useMouseClick;
