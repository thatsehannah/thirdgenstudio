"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const SlotMachineCard = ({
  target,
  subtext,
  suffix,
}: {
  target: number;
  subtext?: string;
  suffix?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const numbers = Array.from({ length: target + 1 }, (_, i) => i);

  useGSAP(
    () => {
      const container = containerRef.current;
      const slot = slotRef.current;
      const wrapper = wrapperRef.current;

      if (!container || !slot || !wrapper) return;

      const initAnimation = () => {};

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        wrapper,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
      ).fromTo(
        slot,
        { yPercent: 0 },
        {
          yPercent: -(target / (target + 1)) * 100,
          duration: 1.5,
          ease: "power3.out",
        },
        "<",
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      className='ring-1 ring-neutral-700 rounded-md p-6 bg-background w-2/5'
      ref={containerRef}
    >
      <div
        ref={wrapperRef}
        className='flex items-center text-5xl font-bold leading-none opacity-0'
      >
        <div className='h-[1em] overflow-hidden'>
          <div
            ref={slotRef}
            className='flex flex-col'
          >
            {numbers.map((num) => (
              <span
                key={num}
                className='h-[1em] flex items-center justify-center'
              >
                {num}
              </span>
            ))}
          </div>
        </div>
        {suffix && <span className='text-3xl'>{suffix}</span>}
      </div>
      <p className='text-lg font-light font-main text-gray-300 uppercase mt-1'>
        {subtext}
      </p>
    </div>
  );
};
