import React from "react";
import Image from "next/image";
import { links } from "@/app/components/ProjectData";
import Button from "../components/Button";
const Footer = () => {
  return (
    <div className="xl:px-[180px] md:px-[60px] md:py-6 px-[16px] w-full">
      <div
        className="flex flex-1 justify-center items-center w-full"
        id="contact"
      >
        <form
          action="https://formsubmit.co/benedictaladi@gmail.com"
          method="POST"
          className="flex flex-1 flex-col max-w-[600px] w-[90%] "
        >
          <h3 className="text-[32px] font-medium  text-white">Get In Touch</h3>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="my-2 p-2 rounded-sm"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            required
            className="my-2 p-2 rounded-sm"
          />
          <textarea
            name="textarea"
            id="message"
            rows={4}
            placeholder="Got a job or project proposition?"
            className="my-2 p-3 rounded-sm"
          ></textarea>
          <Button color="primary" text="Submit" />
        </form>
      </div>

      <div className="w-[100%] flex flex-1 flex-col justify-center items-center lg:mt-36 mt-16">
        <p className="text-white text-[18px] lg:text-[28px] font-medium text-center ">
          Thanks for visiting!
        </p>
        <div className="flex justify-center align-center w-full mt-[30px]">
          <div className="flex flex-1 w-fit gap-5 items-center justify-center">
            {links.map((item) => (
              <a key={item.name} href={item.link} target="_blank">
                <Image src={item.img} width={25} height={25} alt={item.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
