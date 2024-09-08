"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TransitionLink } from "@/app/components/TransitionLink";

import { featuredProjects } from "@/app/components/ProjectData";
import ProjectTab from "@/app/components/ProjectTab";
import StylishButton from "../components/StylishButton";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectDataRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top +300",
        end: "bottom bottom",
      },
    });

    tl.fromTo(
      titleRef.current,
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "back",
      }
    );

    tl.fromTo(
      projectDataRef.current,
      {
        opacity: 0,
        x: 300,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "expo",
        stagger: 0.9,
      }
    );
  }, []);

  return (
    <div
      ref={projectsRef}
      className="flex flex-col items-start lg:gap-16 gap-5"
    >
      <div
        ref={titleRef}
        className="relative flex flex-col md:items-start justify-center items-center"
      >
        <h2 className="text-center text-white md:text-[44px] text-[32px] font-bold leading-none">
          Projects
        </h2>
        <div className="bg-secondary h-[8px] w-[60px] mt-2"></div>
      </div>

      <div
        ref={projectDataRef}
        className="flex flex-col items-start gap-16 w-full"
      >
        {featuredProjects.map((item) => (
          <ProjectTab
            key={item.heading}
            text={item.text}
            img={item.img}
            alt={item.alt}
            heading={item.heading}
            demo={item.demo}
            ghub={item.ghub}
            tech={item.tech}
          />
        ))}
      </div>
      <div className="flex items-center justify-center w-[100%]">
        <TransitionLink href="/projects">
          <StylishButton />
        </TransitionLink>
      </div>
    </div>
  );
};

export default Projects;
