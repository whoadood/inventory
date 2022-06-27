import React, { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState<any>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  });

  return { windowWidth };
}
