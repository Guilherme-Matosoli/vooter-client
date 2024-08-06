"use client";

import { useCallback, useEffect, useState } from "react";

export function useMediaQuery(width: number) {
  const [matches, setMatches] = useState(false);

  const handleChangeSize = useCallback((e: MediaQueryListEvent) => {
    e.matches && setMatches(true);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${width}px)`);
    mediaQuery.addEventListener("change", handleChangeSize);

    if (mediaQuery.matches) setMatches(true);

    return mediaQuery.removeEventListener("change", handleChangeSize);
  }, []);

  return matches;
};
