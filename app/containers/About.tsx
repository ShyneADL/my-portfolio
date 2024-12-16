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
      className=" xl:px-[180px] md:px-[60px] px-[16px] py-[40px] md:py-[110px] w-full"
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
        <p className="lg:max-w-[550px] md:max-w-[670px] max-w-[350px] text-dullWhite leading-[28px] text-[1.2rem] md:mt-[80px] mt-[20px] md:text-left text-center ">
          Welcome to my portfolio! I am a dedicated Frontend Developer
          specializing in React/NextJS, TypeScript, and TailwindCSS. With a
          Computer Science degree, I excel at translating complex hi-fi designs
          into high-performance, responsive websites.
          <br />
          <br /> A natural leader with strong teamwork skills, I am committed to
          delivering exceptional results by merging technical expertise with a
          keen eye for detail. Let's collaborate and bring your vision to life.
          Let's connect and explore how we can work together to bring your ideas
          to life and elevate your online presence.
        </p>
      </div>
    </div>
  );
};

export default About;
