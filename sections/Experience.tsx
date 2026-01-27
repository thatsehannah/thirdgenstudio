import { ExperienceCard } from "@/components/ExperienceCard";
import { experiences } from "@/data";
import { Circle } from "lucide-react";
import React from "react";

export const Experience = () => {
  return (
    <section id='experience'>
      <div className='px-16 py-48 '>
        <div className='flex flex-col justify-center items-center mx-auto w-fit'>
          <p className='text-5xl font-main font-bold mb-4'>
            Professional <span className='text-accent2'>Experience</span>
          </p>
          <p className='text-gray-300 font-main text-lg'>
            A timeline of my journey through development
          </p>
        </div>
        <div className='flex flex-col mt-24 w-3/4 mx-auto'>
          {experiences.map((item, idx) => {
            const evenItem = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`flex ${evenItem ? "justify-start" : "justify-end"} mb-8 gap-35`}
              >
                {!evenItem && (
                  <div className='flex flex-col items-center mt-4'>
                    <Circle className='fill-accent2 stroke-3 stroke-background shadow-md rounded-full shadow-accent2' />
                    <div className='w-0.5 h-68 bg-linear-to-b from-white/20 to-transparent' />
                  </div>
                )}
                <ExperienceCard
                  item={item}
                  leftAlign={evenItem}
                  accentColor={evenItem ? "accent3" : "accent2"}
                />
                {evenItem && (
                  <div className='flex flex-col items-center mt-4'>
                    <Circle className='fill-accent3 stroke-3 stroke-background shadow-md rounded-full shadow-accent3' />
                    <div className='w-0.5 h-68 bg-linear-to-b from-white/20 to-transparent' />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
