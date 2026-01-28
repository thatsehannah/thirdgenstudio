import { AtSign, BriefcaseBusiness, Code, Mail } from "lucide-react";
import { ReactNode } from "react";

const SocialIcon = ({
  title,
  icon,
  link,
}: {
  title: string;
  icon: ReactNode;
  link: string;
}) => (
  <a
    href={link}
    target='_blank'
    className='flex flex-col items-center justify-center gap-2 group'
  >
    <div className=''>{icon}</div>
    <p className='group-hover:text-white group-hover:scale-105 text-xs font-main uppercase text-neutral-700 transition-all duration-300 font-bold tracking-wider'>
      {title}
    </p>
  </a>
);

const socials: { title: string; icon: ReactNode; link: string }[] = [
  {
    title: "linkedin",
    link: "https://linkedin.com/in/elliotchannahiii",
    icon: (
      <BriefcaseBusiness className='stroke-neutral-700 group-hover:stroke-white group-hover:scale-105 transition-all duration-300' />
    ),
  },
  {
    title: "github",
    link: "https://github.com/thatsehannah",
    icon: (
      <Code className='stroke-neutral-700 group-hover:stroke-white group-hover:scale-105 transition-all duration-300' />
    ),
  },
  {
    title: "threads",
    link: "https://threads.com/thatsehannah",
    icon: (
      <AtSign className='stroke-neutral-700 group-hover:stroke-white group-hover:scale-105 transition-all duration-300' />
    ),
  },
  {
    title: "email",
    link: "mailto:thatehannah@gmail.com",
    icon: (
      <Mail className='stroke-neutral-700 group-hover:stroke-white group-hover:scale-105 transition-all duration-300' />
    ),
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col justify-center items-center bg-black py-8'>
        <div className='flex gap-16 mb-8'>
          {socials.map((item, idx) => (
            <SocialIcon
              key={idx}
              title={item.title}
              link={item.link}
              icon={item.icon}
            />
          ))}
        </div>
        <p className='text-sm font-main font-regular text-neutral-700'>
          {new Date().getFullYear()} TECH<sup>3</sup>. Made in the A. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
