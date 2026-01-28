import { ReactNode } from "react";

interface BannerProps {
  className: string;
  children: ReactNode;
}

export const Banner = ({ className, children }: BannerProps) => {
  return (
    <div
      className={`${className} rounded-full flex justify-center items-center border text-center py-2.5 px-6 w-fit`}
    >
      {children}
    </div>
  );
};
