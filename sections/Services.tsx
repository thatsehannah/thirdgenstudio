import { ServiceCard } from "@/components";
import { Code, Palette, Smartphone } from "lucide-react";

export const Services = () => {
  return (
    <section id='services'>
      <div className='px-16 pb-16'>
        <p className='text-5xl font-main font-black'>
          Our <span className='text-accent3'>Services</span>
        </p>
        <hr className='h-1 w-22 mt-3.5 mb-5 rounded-md border-0 bg-linear-to-r from-accent2 to-accent3' />
        <p className='font-main text-lg text-gray-300 w-1/2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          consectetur harum numquam sequi quis illum totam! Beatae molestiae
          quae omnis aliquid corporis.
        </p>
        <div className='my-16 flex justify-between items-center'>
          <ServiceCard
            title='Web Development'
            icon={
              <Code
                className='bg-accent2/30 stroke-accent2 stroke-2 rounded-md p-2.5'
                size={48}
              />
            }
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam suscipit
          ut molestiae temporibus autem tenetur tempora delectus quia deleniti
          veniam.'
          />
          <ServiceCard
            title='UI/UX Design'
            icon={
              <Palette
                className='bg-accent1/30 stroke-accent1 stroke-2 rounded-md p-2.5'
                size={48}
              />
            }
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam suscipit
          ut molestiae temporibus autem tenetur tempora delectus quia deleniti
          veniam.'
          />
          <ServiceCard
            title='Moible App Development'
            icon={
              <Smartphone
                className='bg-accent4/30 stroke-accent4 stroke-2 rounded-md p-2.5'
                size={48}
              />
            }
            description="description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam suscipit
          ut molestiae temporibus autem tenetur tempora delectus quia deleniti
          veniam.'"
          />
        </div>
      </div>
    </section>
  );
};
