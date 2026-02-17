"use client";

import { ContactForm } from "@/components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

//TODO: create a GSAP animation where Vision alternates between different words (words to cycle through TBD)
export const Contact = () => {
  const words = ["Ideas", "Vision", "Dreams", "Brand", "Story"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const wordRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const word = wordRef.current;

      if (!container || !word) return;

      const animateNextWord = () => {
        gsap.to(word, {
          y: "-100%",
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            setCurrentIndex((prev) => (prev + 1) % words.length);
            gsap.set(word, { y: "100%", opacity: 0 });
            gsap.to(word, {
              y: "100%",
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
              onComplete: () => {
                gsap.delayedCall(3, animateNextWord);
              },
            });
          },
        });
      };

      gsap.delayedCall(3, animateNextWord);
    },
    { scope: containerRef },
  );

  return (
    <section
      id='contact'
      className='bg-background2 bg-grid-fade'
    >
      <div className='py-21 xl:py-42 flex justify-center items-center'>
        <div className='mx-auto w-4/5 lg:w-3/5 flex flex-col items-center justify-center ring-1 ring-neutral-700 rounded-2xl p-8 lg:p-12 shadow-lg shadow-accent2/70 bg-background'>
          <p
            ref={containerRef}
            className='text-3xl lg:text-4xl font-main font-bold mb-4 text-center'
          >
            Let&apos;s Bring Your{" "}
            <span className='inline-block overflow-hidden align-bottom'>
              <span
                ref={wordRef}
                className='inline-block text-accent2 '
              >
                {words[currentIndex]}
              </span>
            </span>
            To Life
          </p>
          <p className='text-neutral-400 font-main text-[1rem] lg:text-lg text-center'>
            Ready to start your project? Drop me a line.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
