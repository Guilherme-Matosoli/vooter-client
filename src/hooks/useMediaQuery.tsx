"use client";

import { useCallback, useEffect, useState } from "react";

export function useMediaQuery(width: number) {
  const [matches, setMatches] = useState(false);

  const handleChangeSize = useCallback((e: MediaQueryListEvent) => {
    e.matches ? setMatches(true) : setMatches(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`);
    media.addEventListener("change", handleChangeSize);

    media.matches && setMatches(true);
  }, []);

  return matches;
};
