import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "../utils/utils";

type LinkButtonProps = {
  goto: string;
  classes?: string;
  children: React.ReactNode;
  isButton?: boolean;
};

const LinkButton = ({ goto, children, classes, isButton }: LinkButtonProps) => {
  const navigate = useNavigate();

  return (
    <Link
      to={isButton ? "#" : goto}
      onClick={isButton ? () => navigate(parseInt(goto)) : undefined}
      className={cn("text-sm text-blue-500 hover:text-blue-600", classes)}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
