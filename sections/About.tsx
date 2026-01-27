import Image from "next/image";
import React from "react";

const AboutCard = ({ text, subText }: { text: string; subText: string }) => {
  return (
    <div className='flex flex-col p-6 ring-1 ring-white/20 w-2/5 bg-background rounded-md'>
      <p className='text-4xl font-main font-black mb-1'>{text}</p>
      <p className='text-sm font-main text-gray-300 uppercase'>{subText}</p>
    </div>
  );
};

export const About = () => {
  return (
    <section id='about'>
      <div className='ring-1 ring-white/20 px-8 bg-radial-[at_95%_15%] from-white/20 to-background to-75%'>
        <div className='flex justify-between py-24'>
          <div className='relative'>
            <div className='absolute -inset-2 rounded-lg bg-linear-to-r from-accent2 to-accent3 opacity-75 blur-lg animate-pulse'></div>
            <Image
              src='/placeholder-img.jpg'
              alt='placeholder image'
              className='relative rounded-3xl'
              height={600}
              width={800}
            />
          </div>
          <div className='flex flex-col justify-center py-4 px-8 w-1/2'>
            <div className='flex items-center gap-4 mb-8'>
              <hr className='h-0.5 w-24 border-0 rounded-xl bg-accent2' />
              <p className='uppercase text-accent2 font-main text-lg'>
                who we are
              </p>
            </div>
            <p className='text-6xl font-main font-bold'>
              A Collective of <br />
              <span className='text-transparent bg-linear-to-r from-accent3 to-accent2 bg-clip-text'>
                Digital Artisans
              </span>
            </p>
            <p className='font-main text-xl text-gray-300 mt-8 leading-8'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              eligendi eum quos perspiciatis, voluptate eveniet minus labore
              porro amet modi sapiente iste earum totam asperiores excepturi.
              Aliquam laborum corporis ducimus! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <div className='flex  justify-between mt-9'>
              <AboutCard
                text='5+'
                subText='years experience'
              />
              <AboutCard
                text='50+'
                subText='projects delivered'
              />
            </div>
          </div>
        </div>
        <div className='px-8 pb-24'>
          <div className='flex items-center gap-3'>
            <p className='font-main text-3xl font-bold'>
              Flagship <span className='text-accent3'>Creations</span>
            </p>
            <hr className='h-0.5 w-3/4 bg-linear-to-r from-accent3/40 to-background border-0 rounded-lg' />
          </div>
        </div>
      </div>
    </section>
  );
};
