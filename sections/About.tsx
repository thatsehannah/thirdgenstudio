"use client";

import { SlotMachineCard } from "@/components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const initAnimation = () => {
        ScrollTrigger.refresh(true);

        const aboutTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            invalidateOnRefresh: true,
          },
        });

        aboutTl
          .from(
            ".about-hr",
            {
              width: 0,
              duration: 1.2,
              ease: "power1.inOut",
            },
            0,
          )
          .from(
            ".about-title",
            {
              x: 50,
              autoAlpha: 0,
              duration: 1.2,
              ease: "power1.inOut",
            },
            0,
          )
          .fromTo(
            ".about-gradient",
            {
              clipPath: "inset(0% 0% 100% 0%)",
              autoAlpha: 0,
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              autoAlpha: 1,
              duration: 1.8,
              ease: "power1.inOut",
            },
            0.4,
          );
      };

      const timeout = setTimeout(initAnimation, 500);

      return () => clearTimeout(timeout);
    },

    { scope: sectionRef },
  );

  return (
    <section
      id='about'
      ref={sectionRef}
    >
      <div className='px-8 lg:px-16 bg-radial-[at_95%_5%] from-neutral-700 to-background to-40%'>
        <div className='flex flex-col lg:flex-row lg:gap-16 xl:gap-32 justify-between items-center py-24'>
          <div className='relative h-fit'>
            <div className='absolute -inset-2 rounded-lg bg-linear-to-r from-accent2 to-accent3 opacity-75 blur-lg animate-pulse' />
            <Image
              src='/images/about.jpg'
              alt='placeholder image'
              className='relative rounded-3xl'
              height={600}
              width={800}
            />
          </div>
          <div className='flex flex-col justify-center py-4 lg:w-1/2 mt-12 lg:mt-0'>
            <div className='flex items-center gap-4 mb-8'>
              <hr className='about-hr h-0.5 w-24 border-0 rounded-xl bg-accent2' />
              <p className='about-title uppercase text-accent2 font-main text-lg'>
                behind the engineer
              </p>
            </div>
            <p className='text-[2.9rem] leading-14 xl:text-6xl font-main font-bold'>
              Where Passion <br />
              <span className='about-gradient text-transparent bg-linear-to-r from-accent3 to-accent2 bg-clip-text'>
                Meets Precision
              </span>
            </p>
            <p className='font-main text-lg xl:text-xl text-neutral-400 mt-8 leading-8'>
              I&apos;m a full-stack engineer with a passion for building clean,
              user-focused web products. Every project gets my full attention
              from start to finish because great software comes from
              understanding the problem deeply and never settling for
              &ldquo;good enough&rdquo; When you work with me, you get direct
              collaboration with the person writing every line of code.
            </p>
            <div className='flex justify-between mt-9'>
              <SlotMachineCard
                target={7}
                suffix='+'
                subtext='years experience'
              />
              <SlotMachineCard
                target={6}
                suffix='+'
                subtext='projects delivered'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
