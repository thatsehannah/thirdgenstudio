import { Timeline } from "@/components";
import { ExperienceCard } from "@/components/ExperienceCard";
import { experiences } from "@/data";

export const Experience = () => {
  return (
    <section id='experience'>
      <div className='px-8 lg:px-16 pt-42 pb-32'>
        <div className='flex flex-col justify-center items-center mx-auto w-fit'>
          <p className='text-5xl font-main font-bold mb-4'>
            Professional <span className='text-accent2'>Experience</span>
          </p>
          <p className='text-neutral-400 font-main text-lg'>
            A timeline of my journey through development
          </p>
        </div>
        <Timeline
          items={experiences}
          renderItem={(item) => (
            <ExperienceCard
              item={item}
              leftAlign={experiences.indexOf(item) % 2 !== 0}
            />
          )}
        />
      </div>
    </section>
  );
};
