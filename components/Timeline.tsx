import { ReactNode } from "react";

export const Timeline = <T,>({
  items,
  renderItem,
}: {
  items: T[];
  renderItem: (item: T) => ReactNode;
}) => {
  return (
    <div className='relative w-3/4 mx-auto mt-24 '>
      <div className='absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-linear-to-b from-white/30 via-white/20 to-transparent' />

      <div className='flex flex-col gap-16 '>
        {items.map((item, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={idx}
              className='relative flex items-start'
            >
              {/* Left side content */}
              <div className='w-1/2 pr-24'>{isLeft && renderItem(item)}</div>

              {/* Center dot */}
              <div className='absolute left-1/2 -translate-x-1/2 z-10'>
                <div
                  className={`w-4 h-4 rounded-full shadow-lg ${isLeft ? "bg-accent3 shadow-accent3" : "bg-accent2 shadow-accent2"} border-2 border-background`}
                />
              </div>

              {/* Right side content */}
              <div className='w-1/2 pl-24'>{!isLeft && renderItem(item)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
