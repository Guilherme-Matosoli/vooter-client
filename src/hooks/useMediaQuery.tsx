"use client";

import { useCallback, useEffect, useState } from "react";

export function useMediaQuery(width: number) {
  const [matches, setMatches] = useState<boolean>();

  const handleChangeSize = useCallback((e: MediaQueryListEvent) => {
    e.matches ? setMatches(true) : setMatches(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", handleChangeSize);

    media.matches && setMatches(true);

    return () => media.removeEventListener("change", handleChangeSize);
  }, []);

  return matches;
};
