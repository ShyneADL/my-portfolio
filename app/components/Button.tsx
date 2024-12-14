import React from "react";

interface ButtonProps {
  color: string;
  text: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  color,
  text,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      role="button"
      disabled={disabled}
      className={`${
        color === "primary" ? "bg-secondary text-white" : "bg-white text-black"
      } md:px-6 px-4 cursor-pointer md:py-3 py-2 rounded-[16px] text-[1rem] w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {text}
    </button>
  );
};

export default Button;
