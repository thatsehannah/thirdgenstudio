"use client";

import { projects } from "@/data";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

export const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectsLength = projects.length;
  const currentProject = projects[currentIndex];

  const goToAnimation = (exitXPercentage: number, enterXPercentage: number) => {
    gsap.to("#project-card", {
      xPercent: exitXPercentage,
      autoAlpha: 0,
      duration: 0.4,
      ease: "power1.in",
    });

    gsap.fromTo(
      "#project-card",
      { xPercent: enterXPercentage, autoAlpha: 0 },
      { xPercent: 0, autoAlpha: 1, duration: 0.4, ease: "power2.out" },
    );
  };

  const goToNextProject = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex > projectsLength - 1) {
      nextIndex = 0;
    }

    goToAnimation(40, -40);
    setCurrentIndex(nextIndex);
  };

  const goToPrevProject = () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = projectsLength - 1;
    }

    goToAnimation(-40, 40);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className='flex flex-col lg:flex-row gap-4 lg:gap-0 py-12'>
      <div className='hidden lg:flex w-1/6 items-center justify-center'>
        <div
          className='p-6 ring-1 ring-accent3 rounded-md bg-linear-to-r from-accent1 to-accent1 bg-no-repeat bg-size-[0_100%] duration-500 hover:bg-size-[100%_100%] cursor-pointer bg-right'
          onClick={() => goToPrevProject()}
        >
          <ChevronLeft size={36} />
        </div>
      </div>
      <div className='w-full lg:w-2/3 flex flex-col items-center justify-center'>
        <div id='project-card'>
          <ProjectCard project={currentProject} />
        </div>
        <p className='font-main text-sm font-light mt-4'>
          {currentIndex + 1} / {projectsLength}
        </p>
      </div>
      <div className='flex lg:hidden items-center justify-center gap-8'>
        <div
          className='p-6 ring-1 ring-accent3 rounded-md bg-linear-to-r from-accent1 to-accent1 bg-no-repeat bg-size-[0_100%] duration-500 hover:bg-size-[100%_100%] cursor-pointer bg-right'
          onClick={() => goToPrevProject()}
        >
          <ChevronLeft />
        </div>
        <div
          className='p-6 ring-1 ring-accent3 rounded-md bg-linear-to-r from-accent1 to-accent1 bg-no-repeat bg-size-[0_100%] duration-500 hover:bg-size-[100%_100%] cursor-pointer'
          onClick={() => goToNextProject()}
        >
          <ChevronRight />
        </div>
      </div>
      <div className='hidden lg:flex w-1/6 items-center justify-center'>
        <div
          className='p-6 ring-1 ring-accent3 rounded-md bg-linear-to-l from-accent1 to-accent1 bg-no-repeat bg-size-[0_100%] duration-500 hover:bg-size-[100%_100%] cursor-pointer'
          onClick={() => goToNextProject()}
        >
          <ChevronRight size={36} />
        </div>
      </div>
    </div>
  );
};
