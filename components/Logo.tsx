export const Logo = () => {
  return (
    <div className='p-3 flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <div className='flex'>
          <div className='relative'>
            <p className='absolute text-9xl font-extrabold text-transparent bg-linear-to-r from-accent3 from-30% via-white to-accent2 bg-clip-text blur-xl opacity-40 font-logo'>
              TECH
            </p>
            <p className='absolute text-9xl font-extrabold text-transparent bg-linear-to-r from-accent3 from-30% via-white to-accent2 bg-clip-text blur-xl opacity-80 font-logo'>
              TECH
            </p>
            <p className='relative text-9xl font-extrabold text-transparent bg-linear-to-r from-accent3 from-30% via-white to-accent2 bg-clip-text inline-block pb-1 pr-4 font-logo italic'>
              TECH
            </p>
          </div>

          <div className='b-4 w-fit h-fit'>
            <p className='text-6xl text-accent2 -ml-1 font-medium text-shadow-lg text-shadow-accent2 font-logo italic'>
              3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
