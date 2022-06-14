import React, { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState<any>(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  });

  return { windowWidth };
}
