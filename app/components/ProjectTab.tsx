import React from "react";
import Image from "next/image";
import Button from "./Button";

interface ProjectTabProps {
  img: string;
  alt: string;
  heading: string;
  text: string;
  tech: string;
  demo: string;
  ghub: string;
}

const ProjectTab: React.FC<ProjectTabProps> = ({ img, alt, heading, text, tech, demo, ghub }) => {
  return (
    <div className="flex items-start gap-10 w-full">
      <Image src={img} width={350} height={350} alt={alt} />
      <div className="flex flex-col items-start gap-4 w-full">
        <h3 className="text-[1.75rem] font-semibold text-left text-white leading-[20px]">
          {heading}
        </h3>
        <h5 className="text-[1rem] font-normal text-dimWhite text-left">
          {tech}
        </h5>
        <p className="text-[1rem] font-normal text-left text-dullWhite">
          {text}
        </p>
        <div className="flex items-center gap-8">
          <a href={demo}>
            <Button text="Demo" color="primary" />
          </a>
          <a href={ghub}>
            <Button text="Github" color="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectTab;
