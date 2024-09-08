import React from "react";
import { projectData } from "@/app/components/ProjectData";
import ProjectTab from "@/app/components/ProjectTab";

interface ProjectData {
  img: string;
  alt: string;
  heading: string;
  demo: string;
  ghub: string;
  title: string;
  tech: string;
  text: string;
}
const ProjectPage: React.FC = () => {
  return (
    <div className="bg-[#2a3439] xl:px-[180px] md:px-[60px] px-[16px] py-[40px] mt-[50px] md:py-[110px] w-full">
      <div className="flex flex-col items-start gap-16 w-full">
        {projectData.map((item) => (
          <div key={item.heading} className="w-full">
            <ProjectTab
              text={item.text}
              img={item.img}
              alt={item.alt}
              heading={item.heading}
              demo={item.demo}
              ghub={item.ghub}
              tech={item.tech}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
