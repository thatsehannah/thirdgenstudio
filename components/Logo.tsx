export const Logo = () => {
  return (
    <div className='p-3 flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <div className='flex'>
          <div className='relative'>
            <p className='shadow-1 absolute text-6xl text-center lg:text-8xl font-extrabold text-transparent bg-linear-to-r from-accent3 from-30% via-white to-accent2 bg-clip-text blur-xl opacity-40 font-logo'>
              Third Gen Studio
            </p>
            <p className='shadow-2 absolute text-6xl text-center lg:text-8xl font-extrabold text-transparent bg-linear-to-r from-accent3 from-30% via-white to-accent2 bg-clip-text blur-xl opacity-80 font-logo'>
              Third Gen Studio
            </p>
            <p className='logo relative text-6xl text-center lg:text-8xl font-extrabold text-transparent bg-linear-to-r from-accent3 from-30% via-white to-accent2 bg-clip-text inline-block pb-1 pr-4 font-logo italic'>
              Third Gen Studio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
