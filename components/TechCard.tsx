import Image from "next/image";

interface TechCardProps {
  title: string;
  logo: string;
  link: string;
}

export const TechCard = ({ title, logo, link }: TechCardProps) => {
  return (
    <a
      href={link}
      target='_blank'
      className='bg-gray-500/10 ring-1 ring-neutral-700 flex flex-col justify-center items-center py-4 xl:py-8 px-8 lg:px-12 xl:px-16 rounded-lg gap-5 hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-accent1/30'
    >
      <Image
        src={logo}
        alt={`${title.toLowerCase()} logo`}
        height={80}
        width={80}
      />
      <p className='font-main text-sm text-neutral-400 font-bold'>{title}</p>
    </a>
  );
};
