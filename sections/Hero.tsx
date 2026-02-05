"use client";

import { Banner, LinkButton, Logo } from "@/components";
import { Circle } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

export const Hero = () => {
  useGSAP(() => {
    const onLoadTl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    const taglineSplit = SplitText.create(".tagline", {
      type: "chars, words, lines",
    });

    onLoadTl
      .from(
        ".welcome-text",
        {
          y: 100,
          autoAlpha: 0,
          duration: 1.5,
        },
        0,
      )
      .fromTo(
        ".logo",
        {
          opacity: 0,
        },
        { opacity: 1, delay: 1.5, duration: 1.8 },
        0,
      )
      .fromTo(
        ".shadow-1, .shadow-2",
        { opacity: 0 },
        { opacity: 1, duration: 1.3, delay: 2.5 },
        0,
      )

      .from(
        taglineSplit.chars,
        { x: 100, autoAlpha: 0, duration: 1, delay: 3.8, stagger: 0.02 },
        0,
      )
      .from(".intro", { y: 100, autoAlpha: 0, duration: 1, delay: 5.3 }, 0)
      .from(
        ".cta-buttons a",
        {
          y: 100,
          opacity: 0,
          duration: 1.5,
          delay: 6,
          stagger: 0.2,
          ease: "power3.out",
        },
        0,
      )
      .fromTo(
        ".hire-banner",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, delay: 7.5, duration: 0.7 },
        0,
      );
  });

  return (
    <section
      id='hero'
      className='bg-grid-fade mask-x-from-90% mask-x-to-100% mask-y-from-80% mask-y-to-100%'
    >
      <div className='h-screen flex flex-col justify-center items-center -mt-12 md:mt-0 lg:p-8 xl:p-12'>
        <Banner className='hire-banner gap-2 border-accent3 bg-accent3/20 mb-12'>
          <Circle
            className='fill-accent3 border-0 stroke-0 animate-pulse'
            size={16}
          />
          <p className='uppercase text-accent3 font-bold font-main tracking-widest text-xs'>
            available to hire
          </p>
        </Banner>
        <p className='welcome-text text-[1rem] xl:text-lg text-neutral-400 uppercase font-logo tracking-widest'>
          Welcome To
        </p>
        <div className='logo-wrapper'>
          <Logo />
        </div>
        <div className='mt-4 xl:mt-6 w-3/4 lg:w-1/2'>
          <p className='font-main text-neutral-400 lg:text-center text-justify text-[1rem] lg:text-lg xl:text-xl xl:font-light'>
            <span className='tagline'>
              Building web and mobile products the right way.
            </span>
            <span className='intro'>
              I am dedicated to building digital experiences that engage users
              and deliver real results. <em>No fluff, no shortcuts.</em> Just
              thoughtful engineering and pixel-perfect execution. Your vision,
              brought to <span className='font-black italic'>life</span>.
            </span>
          </p>
        </div>
        <div className='cta-buttons flex justify-center items-center gap-12 p-4 mt-8 xl:mt-12'>
          <LinkButton
            text='View Projects'
            className='bg-accent2 hover:shadow-accent2 hover:ring-1 hover:ring-accent1 text-white text-[1rem] lg:text-lg font-medium'
            target='projects'
          />
          <LinkButton
            text='Contact Us'
            className='bg-neutral-800 hover:shadow-white hover:ring-1 hover:ring-white text-white text-[1rem] lg:text-lg font-extralight'
            target='contact'
          />
        </div>
      </div>
    </section>
  );
};
