import React from "react";
import { cn } from "../utils/utils";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  classes?: string;
  onClickHandler?: (e?: any) => void;
};

const Button = ({ children, disabled, classes, onClickHandler }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        "bg-yellow-400 uppercase font-semibold text-stone-800 px-4 py-3 rounded-full hover:bg-yellow-300 hover:text-stone-900 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 transition-colors duration-200",
        {
          "bg-stone-600 text-stone-200 cursor-not-allowed": disabled,
        },
        classes
      )}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
