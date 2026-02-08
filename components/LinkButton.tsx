"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

interface LinkButtonProps {
  className: string;
  text: string;
  target: string;
}

gsap.registerPlugin(ScrollToPlugin);

export const LinkButton = ({ className, text, target }: LinkButtonProps) => {
  const scrollToSection = () => {
    const element = document.getElementById(target);
    if (!element) return;

    gsap.to(window, {
      duration: 3,
      scrollTo: {
        y: element,
        offsetY: 50,
        autoKill: false,
      },
      ease: "power2.inOut",
    });
  };

  return (
    <div
      className='link-btn'
      onClick={scrollToSection}
      onTouchEnd={scrollToSection}
      role='button'
    >
      <div
        className={`${className} hover:scale-110 hover:cursor-pointer transition-all ease-in-out duration-300 rounded-lg w-fit font-main py-2 px-4`}
      >
        {text}
      </div>
    </div>
  );
};
