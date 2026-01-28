import { TechCard } from "@/components/TechCard";
import { techStack } from "@/data";

export const TechStack = () => {
  return (
    <section id='techstack'>
      <div className='px-8 lg:px-16 pt-10 pb-32'>
        <div className='flex flex-col justify-center items-center mx-auto w-fit'>
          <p className='text-5xl font-main font-bold mb-4'>
            Our <span className='text-accent3'>Tech Stack</span>
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
