import { ContactForm } from "@/components";

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
        </div>
      </div>
    </section>
  );
};
