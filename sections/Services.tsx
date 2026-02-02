import { ServiceCard } from "@/components";
import { Code, Palette, Smartphone } from "lucide-react";

//TODO: change "Our Services" text
export const Services = () => {
  return (
    <section id='services'>
      <div className='px-8 lg:px-16 pb-16'>
        <p className='text-5xl font-main font-black'>
          Areas of <span className='text-accent3'>Expertise 👨🏾‍🎨</span>
        </p>
        <hr className='h-1 w-33 mt-2.5 mb-5 rounded-md border-0 bg-linear-to-r from-accent2 to-accent3' />
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
