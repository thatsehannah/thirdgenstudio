import { ContactForm } from "@/components";
import React from "react";

export const Contact = () => {
  return (
    <section id='contact'>
      <div className='bg-background2 py-21 xl:py-42 flex justify-center items-center'>
        <div className='mx-auto w-4/5 lg:w-3/5 flex flex-col items-center justify-center ring-1 ring-neutral-700 rounded-2xl p-8 lg:p-12 shadow-lg shadow-accent2/70'>
          <p className='text-3xl lg:text-4xl font-main font-bold mb-4 text-center'>
            Let&apos;s Build Something{" "}
            <span className='text-accent2'>Electric</span>
          </p>
          <p className='text-neutral-400 font-main text-[1rem] lg:text-lg text-center'>
            Ready to start your project? Drop us a line.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
