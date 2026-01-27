import { Banner, Logo } from "@/components";

export const Hero = () => {
  return (
    <section className='w-screen h-screen flex justify-center items-center'>
      <div className='w-1/2 flex flex-col justify-center items-center p-4'>
        <Banner />
        <Logo />
        <div>
          <p className='font-main text-gray-300 text-center text-lg'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis cupiditate quia mollitia. Consequatur id ipsum, qui
            autem deleniti blanditiis velit vel magnam recusandae doloremque
            maxime neque corporis ab corrupti odit?
          </p>
        </div>
        <div className='flex justify-center items-center gap-12 p-4'>
          <div>Button</div>
          <div>Button</div>
        </div>
      </div>
    </section>
  );
};
