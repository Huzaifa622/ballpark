"use client";
import { useLocation, useNavigate } from "react-router-dom";
import { animatePageOut } from "../utils/animations";
import { cn } from "../lib/utils";
import { SetStateAction } from "react";

interface Props {
  href: string;
  label: string;
  className? :string;
  setOpen:React.Dispatch<SetStateAction<boolean>>
}

const TransitionLink = ({ href, label , className , setOpen }: Props) => {
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const handleClick = () => {
    if (location.pathname !== href) {
      setOpen(false)
      animatePageOut(href, navigate); 
    }
  };

  return (
    <button
      className={cn("text-sm uppercase text-[#1B2978] font-Roboto " , className) }
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TransitionLink;
