import React from "react";

interface ButtonProps {
  color: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ color, text }) => {
  return (
    <button role='button'
      className={`${
        color === "primary" ? "bg-secondary" : "bg-black"
      } px-6 py-3 rounded-full text-white text-[1rem] font-mont font-bold`}
    >
      {text}
    </button>
  );
};

export default Button;