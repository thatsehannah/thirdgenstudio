import { Circle } from "lucide-react";

export const Banner = () => {
  return (
    <div className='rounded-full flex justify-center items-center gap-2 border border-accent3 bg-accent3/20 text-sm text-center py-3 px-4 w-fit mb-8'>
      <Circle
        className='fill-accent3 border-0 stroke-0 animate-pulse'
        size={16}
      />
      <p className='uppercase text-accent3 font-bold font-main tracking-widest'>
        available to hire
      </p>
    </div>
  );
};
