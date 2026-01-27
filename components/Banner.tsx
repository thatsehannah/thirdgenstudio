import { Circle } from "lucide-react";

export const Banner = () => {
  return (
    <div className='rounded-full flex justify-center items-center gap-2 border border-accent3 bg-accent3/20 text-center py-2.5 px-6 w-fit mb-12'>
      <Circle
        className='fill-accent3 border-0 stroke-0 animate-pulse'
        size={16}
      />
      <p className='uppercase text-accent3 font-bold font-main tracking-widest text-xs'>
        available to hire
      </p>
    </div>
  );
};
