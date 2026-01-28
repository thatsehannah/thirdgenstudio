import { ExperienceItem } from "@/types";
import { Banner } from "@/components";

interface ExperienceCardProps {
  leftAlign: boolean;
  item: ExperienceItem;
}

export const ExperienceCard = ({ leftAlign, item }: ExperienceCardProps) => {
  return (
    <div
      className={`rounded-lg ring-1 ring-neutral-700 ${leftAlign ? "bg-linear-to-r from-background to-white/10" : "bg-linear-to-l from-background to-white/10"} w-full`}
    >
      <div
        className={`flex flex-col ${leftAlign ? "items-start" : "items-end"} p-4`}
      >
        <Banner
          className={`${leftAlign ? "border-accent2 bg-accent2/30" : "border-accent3 bg-accent3/30"} mb-5`}
        >
          <p className='font-bold font-main'>{item.startEndYear}</p>
        </Banner>
        <p
          className={`font-main font-bold text-2xl ${leftAlign ? "text-left" : "text-right"}`}
        >
          {item.position}
        </p>
        <p
          className={`font-main text-lg ${leftAlign ? "text-accent2 text-left" : "text-accent3 text-right"} mb-4`}
        >
          {item.company}
        </p>
        <p
          className={`font-main text-neutral-400 text-[1rem] w-full xl:w-3/4 ${leftAlign ? "text-left" : "text-right"}`}
        >
          {item.duties}
        </p>
      </div>
    </div>
  );
};
