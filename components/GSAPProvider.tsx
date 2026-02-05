"use client";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { ReactNode, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const GSAPProvider = ({ children }: { children: ReactNode }) => {
  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return <>{children}</>;
};
