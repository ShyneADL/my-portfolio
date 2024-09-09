"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top +650",
        end: "bottom bottom",
      },
    });

    tl.fromTo(
      aboutRef.current,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power1.in",
      }
    );
  }, []);
  return (
    <div
      ref={aboutRef}
      className=" xl:px-[180px] md:px-[60px] px-[16px] py-[40px] md:py-[110px] w=full"
    >
      <div className="relative flex flex-col md:items-start justify-center items-center">
        <h2 className="text-center text-white md:text-[44px] text-[32px] font-bold leading-none">
          About Me
        </h2>
        <div className="bg-secondary h-[8px] w-[60px] mt-2"></div>
      </div>

      <div className="flex flex-1 items-center w-full md:flex-row flex-col md:justify-start justify-center">
        <img
          src="/assets/myself.jpg"
          alt="me"
          className="w-[300px] lg:ml-20 md:mt-10 mt-5 lg:mr-[80px] md:mr-[30px]"
        />
        <p className="lg:max-w-[550px] md:max-w-[670px] max-w-[350px] text-dullWhite leading-[28px] md:mt-[80px] mt-[20px] md:text-left text-center ">
          Hey there! 👋 I'm Aladi Ifeanyi, a <b>frontend developer</b> in Lagos
          with a passion for creating engaging websites that blend{" "}
          <b>design and functionality</b>. My journey in web development began
          with a fascination for technology, and I've since honed my skills in
          crafting modern and <b>user-friendly interfaces</b>. I'm a firm
          believer in open-source collaboration and the power of sharing{" "}
          <b>knowledge</b>. Let's <b>connect</b> and work together to make the
          web a better place! <b>Get in touch</b> and let's chat about all
          things web and beyond.
        </p>
      </div>
    </div>
  );
};

export default About;
