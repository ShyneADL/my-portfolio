import React from "react";

interface ButtonProps {
  color: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ color, text }) => {
  return (
    <div
      role="button"
      className={`${
        color === "primary" ? "bg-secondary text-white" : "bg-white text-black"
      } md:px-6 px-4 cursor-pointer md:py-3 py-2 rounded-[16px] text-[1rem] w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]`}
    >
      {text}
    </div>
  );
};

export default Button;
