import { Banner, LinkButton, Logo } from "@/components";
import { Circle } from "lucide-react";

export const Hero = () => {
  return (
    <section id='hero'>
      <div className='h-screen flex flex-col justify-center items-center -mt-12 md:mt-0 lg:p-8 xl:p-12'>
        <Banner className='gap-2 border-accent3 bg-accent3/20 mb-12'>
          <Circle
            className='fill-accent3 border-0 stroke-0 animate-pulse'
            size={16}
          />
          <p className='uppercase text-accent3 font-bold font-main tracking-widest text-xs'>
            available to hire
          </p>
        </Banner>
        <p className='text-[1rem] xl:text-lg text-neutral-400 uppercase font-main tracking-widest'>
          Welcome To
        </p>
        <Logo />
        <div className='mt-4 xl:mt-6 w-3/4 lg:w-1/2'>
          <p className='font-main text-neutral-400 text-center text-[1rem] lg:text-lg xl:text-xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis cupiditate quia mollitia. Consequatur id ipsum, qui
            autem deleniti blanditiis velit vel magnam recusandae doloremque
            maxime neque corporis ab corrupti odit?
          </p>
        </div>
        <div className='flex justify-center items-center gap-12 p-4 mt-8 xl:mt-12'>
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
