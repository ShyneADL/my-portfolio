"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { saveAs } from "file-saver";
import Image from "next/image";
import { links } from "../components/ProjectData";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.fromTo(
      heroRef.current,
      {
        xPercent: 100,
      },
      {
        xPercent: 0,
        duration: 1,
        ease: "expo.in",
      }
    );
  }, []);

  const [text] = useTypewriter({
    words: ["Frontend Developer", "Wordpress Developer", "UX Specialist"],
    loop: true,
    deleteSpeed: 1.5,
  });

  const handleDownload = () => {
    // Specify the path to your PDF file in the assets folder
    const pdfPath = "/assets/Resume.pdf";

    // Use fetch to get the PDF file
    fetch(pdfPath)
      .then((response) => response.blob())
      .then((blob) => {
        // Use the saveAs function to trigger the download
        saveAs(blob, "Ifeanyi's Resume.pdf");
      })
      .catch((error) => {
        console.error("Error downloading PDF:", error);
      });
  };

  return (
    <div ref={heroRef} id="home">
      <div className="flex flex-1 md:flex-row flex-col justify-between md:items-start items-center z-0 md:w-full">
        <div className="md:min-w-[250px]">
          <p className="xl:text-[24px] text-white md:text-left text-center">
            Hello, I'm
          </p>
          <h1 className="font-montAlt text-secondary font-bold md:text-left text-center xl:text-[82px] lg:text-[64px] md:text-[44px] text-[30px] z-10 lg:leading-[90px] md:leading-[46px]">
            Ifeanyi
            <br className="md:flex hidden" /> Aladi.{" "}
          </h1>
          <div className="bg-secondary lg:h-[8px] md:h-[6px] w-[60px] mt-2"></div>
          <div className="md:flex md:flex-1 md:gap-[25px] w-[200px] lg:mt-[50px] md:mt-[40px] items-center hidden">
            {links.map((item) => (
              <a key={item.name} href={item.link} target="_blank">
                <Image src={item.img} width={25} height={25} alt={item.alt} />
              </a>
            ))}
          </div>
        </div>
        {/* Right Div */}

        <div className="xl:w-[450px] md:w-[380px] ">
          <h3 className="text-white opacity-80 xl:text-[18px] xs:text-[16px] md:text-left text-center md:mt-0 mt-4 md:w-[300px]">
            - Introduction
          </h3>
          <h2 className="text-white font-medium xl:text-[40px] md:text-[32px] text-[20px] w-[100%] md:text-left text-center md:w-[380px]  lg:w-[460px]">
            {text}
            <Cursor />
          </h2>
          <p className="text-dullWhite xl:w-[450px] lg:w-[390px] md:w-[360px] md:flex md:text-left text-center mt-6">
            Welcome to my portfolio website! I'm Aladi Ifeanyi, a passionate and
            dedicated frontend developer currently based in Lagos. With a keen
            eye for design and a love for crafting engaging user experiences, I
            specialize in turning creative ideas into functional and visually
            appealing digital solutions.
          </p>
          <button
            className="hidden md:flex bg-secondary py-2 px-4 border-none outline-none rounded mt-4 text-white font-[500] text-[18px]"
            onClick={handleDownload}
          >
            Download Resume
          </button>
        </div>
        <button
          className="flex md:hidden bg-secondary py-2 px-4 border-none outline-none rounded mt-4 text-white font-[500] text-[18px]"
          onClick={handleDownload}
        >
          Download Resume
        </button>
      </div>

      {/* Mobile Links View */}

      <div className="flex justify-center align-center w-full mt-[30px]">
        <div className="md:hidden flex flex-1 gap-5 w-[25px] items-center justify-center">
          {links.map((item) => (
            <a key={item.name} href={item.link} target="_blank">
              <Image src={item.img} width={25} height={25} alt={item.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
