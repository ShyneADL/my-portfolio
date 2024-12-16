import React from "react";
import Image from "next/image";
import { skills } from "../components/ProjectData";

interface Skills {
  id: number;
  alt: string;
  img: string;
}
const Skills = () => {
  return (
    <div className="xl:px-[180px] md:px-[60px] px-[16px] py-[40px] md:py-[110px] w-full">
      <div className="relative flex flex-col md:items-start justify-center items-center">
        <h2 className="text-center text-white md:text-[44px] text-[32px] font-bold leading-none">
          My Skills
        </h2>
        <div className="bg-secondary h-[8px] w-[60px] mt-2"></div>
      </div>

      <div className="flex flex-1 justify-center items-center lg:mt-10 mt-8">
        <div className="skills-grid lg:w-[700px] w-full">
          {skills.map((item: Skills) => (
            <Image
              key={item.id}
              src={item.img}
              alt={item.alt}
              width={80}
              height={80}
              className="object-contain max-w-[120px] max-h-[120px] min-w-[50px] min-h-[50px] w-full h-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
