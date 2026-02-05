"use client";

import { ServiceCard } from "@/components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Code, Palette, Smartphone } from "lucide-react";
import { useRef } from "react";

export const Services = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const video = videoRef.current;
      const section = sectionRef.current;
      if (!video || !section) return;

      const initScrollAnimation = () => {
        const duration = video.duration;

        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=550%",
            pin: true,
            scrub: true,
          },
        });

        mainTl
          .to(video, {
            currentTime: duration,
            ease: "none",
            duration: 1.2,
            filter: "brightness(1)",
          })
          .to(video, {
            filter: "brightness(0.3)",
            duration: 0.2,
            ease: "power2.out",
          })
          .fromTo(
            ".services",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.3 },
          );
      };

      if (video.readyState >= 2) {
        initScrollAnimation();
      } else {
        video.addEventListener("loadedmetadata", initScrollAnimation, {
          once: true,
        });
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      id='services'
      className='relative h-screen flex items-center overflow-hidden'
      ref={sectionRef}
    >
      <video
        src='/videos/output.mp4'
        ref={videoRef}
        muted
        playsInline
        preload='metadata'
        className='w-full h-full inset-0 absolute object-cover brightness-0'
      />
      <div className='services px-8 lg:px-16 pb-16'>
        <p className='text-4xl lg:text-5xl font-main font-black'>
          Areas of <span className='text-accent3'>Expertise 👨🏾‍🎨</span>
        </p>
        <hr className='h-1 w-25 lg:w-34 mt-2 lg:mt-2.5 mb-5 rounded-md border-0 bg-linear-to-r from-accent2 to-accent3' />
        <p className='font-main text-lg text-neutral-400 xl:w-1/2'>
          End-to-end development services designed to bring ideas to life. Clean
          code, thoughtful design, and a focus on results that matter.
        </p>
        <div className='my-16 grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-6'>
          <ServiceCard
            title='Web Development'
            icon={
              <Code
                className='bg-accent2/30 stroke-accent2 stroke-2 rounded-md p-2.5'
                size={48}
              />
            }
            description='Fast, responsive, and scalable web applications built with modern frameworks. Built with clean architecture that scales as your business grows.'
          />
          <ServiceCard
            title='UI/UX Design'
            icon={
              <Palette
                className='bg-accent1/30 stroke-accent1 stroke-2 rounded-md p-2.5'
                size={48}
              />
            }
            description='User-centered design that balances aesthetics with functionality. Thoughtful layouts, clear navigation, and polished visuals that keep users engaged and coming back.'
          />
          <ServiceCard
            title='Mobile App Development'
            icon={
              <Smartphone
                className='bg-accent4/30 stroke-accent4 stroke-2 rounded-md p-2.5'
                size={48}
              />
            }
            description='Cross-platform mobile applications that deliver native-quality experiences. Smooth performance, clean interfaces, and seamless functionality on iOS and Android.'
          />
        </div>
      </div>
    </section>
  );
};
