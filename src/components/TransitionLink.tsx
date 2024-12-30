"use client";
import { useLocation, useNavigate } from "react-router-dom";
import { animatePageOut } from "../utils/animations";
import { cn } from "../lib/utils";

interface Props {
  href: string;
  label: string;
  className? :string;
}

const TransitionLink = ({ href, label , className }: Props) => {
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const handleClick = () => {
    if (location.pathname !== href) {
      animatePageOut(href, navigate); 
    }
  };

  return (
    <button
      className={cn("text-sm uppercase text-white " , className) }
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TransitionLink;
