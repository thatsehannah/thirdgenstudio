import { ContactForm } from "@/components";
import { CircleCheckBig } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id='contact'
      className='bg-background2 bg-grid-fade'
    >
      <div className='py-21 xl:py-42 flex justify-center items-center'>
        <div className='mx-auto w-4/5 lg:w-3/5 flex flex-col items-center justify-center ring-1 ring-neutral-700 rounded-2xl p-8 lg:p-12 shadow-lg shadow-accent2/70 bg-background'>
          <p className='text-3xl lg:text-4xl font-main font-bold mb-4 text-center'>
            Let&apos;s Bring Your Vision To{" "}
            <span className='text-accent2'>Life</span>
          </p>
          <p className='text-neutral-400 font-main text-[1rem] lg:text-lg text-center'>
            Ready to start your project? Drop me a line.
          </p>
          <ContactForm />
          <div className='sonner opacity-0 bg-accent1 flex items-center justify-center gap-2 p-2 rounded-md mt-4'>
            <CircleCheckBig className='stroke-white stroke-2 fill-green-600' />
            <p className='font-main font-bold text-sm lg:text-[1rem]'>
              Thanks. I&apos;ll be in contact soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
