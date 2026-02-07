"use client";

import { TechCard } from "@/components/TechCard";
import { techStack } from "@/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const TechStack = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      gsap.fromTo(
        ".tech-card",
        {
          y: -45,
          autoAlpha: 0,
          scale: 1.2,
        },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: "power3.in",
          transformOrigin: "top center",
          clearProps: "transform",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            invalidateOnRefresh: true,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id='techstack'
    >
      <div className='px-8 lg:px-16 pt-6 lg:pt-10 pb-24 lg:pb-32'>
        <div className='flex flex-col justify-center items-center mx-auto w-fit'>
          <p className='text-5xl font-main font-bold mb-4 text-center'>
            The <span className='text-accent3'>Stack 🥞</span>
          </p>
          <p className='text-neutral-400 font-main text-lg text-center'>
            Powered by the most reliable modern technologies.
          </p>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-4 mt-16 xl:mt-24'>
          {techStack.map((item, idx) => (
            <TechCard
              title={item.title}
              logo={item.logo}
              link={item.link}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
