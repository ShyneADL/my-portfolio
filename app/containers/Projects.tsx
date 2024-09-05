"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

import { featuredProjects } from "../components/ProjectData";
import ProjectTab from "../components/ProjectTab";
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
      <Link href="/projects">
        <button className="bg-transparent lg:py-6 py-3 border-[1px] border-white border-solid rounded-full text-[1rem] font-mont font-semibold text-white w-full">
          View More Projects
        </button>
      </Link>
    </div>
  );
};

export default Projects;
