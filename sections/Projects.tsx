import { ProjectCarousel } from "@/components";

export const Projects = () => {
  return (
    <section
      id='projects'
      className='flex flex-col px-8 lg:px-16'
    >
      <div className='flex justify-center items-center gap-2 mt-20'>
        <p className='font-main text-3xl md:text-5xl text-nowrap font-bold'>
          Flagship <span className='text-accent3'>Creations</span>
        </p>
        <hr className='h-0.5 w-3/4 bg-linear-to-r from-accent3/30 to-transparent border-0 rounded-lg' />
      </div>
      <div className=''>
        <ProjectCarousel />
      </div>
    </section>
  );
};
