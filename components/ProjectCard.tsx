import { ArrowUpRight, Monitor, Smartphone } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  thumbnail: string;
  title: string;
  type: "mobile" | "web";
  description: string;
  linkText: string;
  link: string;
}

export const ProjectCard = ({
  thumbnail,
  title,
  type,
  description,
  link,
  linkText,
}: ProjectCardProps) => {
  return (
    <div className='border-8 border-neutral-950 rounded-2xl w-full lg:w-2/3'>
      <div className='w-full'>
        <div className='relative'>
          <Image
            src={thumbnail}
            alt={`${title} image`}
            className='h-auto lg:h-112 lg:object-cover object-contain rounded-t-lg'
            width={800}
            height={600}
          />
          <div className='flex items-center gap-3 justify-center absolute -bottom-6 right-4 rounded-2xl bg-neutral-900 w-fit p-3 ring-1 ring-neutral-200'>
            {type === "mobile" ? (
              <Smartphone
                className='fill-accent3 stroke-1'
                size={26}
              />
            ) : (
              <Monitor
                className='fill-accent3 stroke-1'
                size={26}
              />
            )}
            <p className='text-white font-main text-[1rem] font-bold'>
              {type === "mobile" ? "Mobile Development" : "Web Development"}
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col p-8 bg-background rounded-b-lg flex-1'>
        <p className='font-main font-bold text-3xl mb-4'>{title}</p>
        <p className='font-main text-neutral-400 mb-6 flex-1'>{description}</p>
        <a
          href={link}
          target='_blank'
          className='group w-fit hover:scale-110 hover:ring-1 hover:ring-accent2 hover:px-3 rounded-lg transition-all ease-in-out duration-300 py-3 flex-1'
        >
          <div className='flex items-center gap-1 text-accent1 font-bold '>
            <p className='font-main text-lg'>{linkText}</p>
            <ArrowUpRight
              className='opacity-0 group-hover:opacity-100 transition-opacity'
              size={20}
            />
          </div>
        </a>
      </div>
    </div>
  );
};
