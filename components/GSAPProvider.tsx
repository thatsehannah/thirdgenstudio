"use client";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  ScrollTrigger.config({
    ignoreMobileResize: true,
  });
}

export const GSAPProvider = ({ children }: { children: ReactNode }) => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    const refreshScrollTrigger = () => {
      ScrollTrigger.refresh(true);
    };

    refreshScrollTrigger();

    document.fonts.ready.then(refreshScrollTrigger);

    const timeout = setTimeout(refreshScrollTrigger, 1000);
    window.addEventListener("load", refreshScrollTrigger);
    window.addEventListener("resize", refreshScrollTrigger);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("load", refreshScrollTrigger);
      window.removeEventListener("resize", refreshScrollTrigger);
      ScrollTrigger.killAll();
    };
  }, []);

  return <>{children}</>;
};
