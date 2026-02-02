import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  icon: ReactNode;
  description?: string;
}

export const ServiceCard = ({ title, icon, description }: ServiceCardProps) => {
  return (
    <div className='rounded-lg ring-1 ring-neutral-700 bg-gray-500/10 p-8 h-full flex-1'>
      <div className='flex flex-col gap-5'>
        <div>{icon}</div>
        <p className='font-main font-bold text-[22px] xl:text-2xl'>{title}</p>
        <p className='text-[1rem] font-main text-neutral-400 w-full leading-6 flex-1'>
          {description}
        </p>
      </div>
    </div>
  );
};
