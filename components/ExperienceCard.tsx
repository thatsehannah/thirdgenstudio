import { ExperienceItem } from "@/types";
import { Banner } from "@/components";

interface ExperienceCardProps {
  accentColor: "accent3" | "accent2";
  leftAlign: boolean;
  item: ExperienceItem;
}

export const ExperienceCard = ({
  accentColor,
  leftAlign,
  item,
}: ExperienceCardProps) => {
  return (
    <div
      className={`rounded-lg ring-1 ring-white/20 ${leftAlign ? "bg-linear-to-r from-background to-white/10" : "bg-linear-to-l from-background to-white/10"} w-130`}
    >
      <div
        className={`flex flex-col ${leftAlign ? "items-start" : "items-end"} p-4`}
      >
        <Banner className={`border-${accentColor} bg-${accentColor}/20`}>
          <p className='font-bold font-main'>{item.startEndYear}</p>
        </Banner>
        <p className='font-main font-bold text-2xl'>{item.position}</p>
        <p className={`font-main text-lg text-${accentColor} mb-2`}>
          {item.company}
        </p>
        <p
          className={`font-main text-gray-300 w-3/4 ${leftAlign ? "text-left" : "text-right"}`}
        >
          {item.duties}
        </p>
      </div>
    </div>
  );
};
