import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  icon: ReactNode;
  description?: string;
}

export const ServiceCard = ({ title, icon, description }: ServiceCardProps) => {
  return (
    <div className='rounded-lg ring-1 ring-white/20 bg-gray-500/10 p-10 w-xl'>
      <div className='flex flex-col gap-5'>
        <div>{icon}</div>
        <p className='font-main font-bold text-2xl'>{title}</p>
        <p className='text-[1rem] font-main text-gray-300 w-full leading-6'>
          {description}
        </p>
      </div>
    </div>
  );
};
