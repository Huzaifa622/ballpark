import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {  useLocation } from "react-router-dom";
// import { scrollTo } from "../../lib/scroll"; // Assuming scrollTo is defined elsewhere
import TransitionLink from "../TransitionLink";

export default function Header() {
  // const location = useLocation();

  // GSAP animation setup
  useGSAP(() => {
    const tl = gsap.timeline();
    // tl.from(".dot", {
    //   opacity: 0,
    //   repeat: -1,
    //   duration: 1,
    // });

    tl.from("h1", {
      y: -20,
      opacity: 0,
      duration: 1,
      delay: 0.8,
    });
    tl.from("h4", {
      y: -20,
      opacity: 0,
      duration: 1,
      delay: 1,
      stagger: 0.4,
    });
  }, []);

  // Handle scrolling on the homepage or redirecting on other pages
  // const handleScrollOrRedirect = (sectionId:string) => {
  //   if (location.pathname === "/") {
  //     // If on homepage, scroll to the section
  //     scrollTo(sectionId);
  //   } else {
  //     // If on another route, navigate to the homepage and scroll to the section
  //     window.location.href = `/#${sectionId}`;
  //   }
  // };

  return (
    <div className="w-[80%] mx-auto bg-transparent text-white h-10">
      <div className="font-signika absolute items-center text-xs flex justify-between w-[80%] logo text-center bg-transparent tracking-widest uppercase leading-[50px] font-bold">
        <h1 className="text-lg flex gap-2 items-center">
          <div className="bg-green-500 animate-ping drop-shadow-2xl shadow-green-700 h-1 w-1 rounded-full"></div>  <TransitionLink href="/" className="text-lg"  label="Ball Park"/>
        </h1>
        <div className="flex gap-4">
          {/* "About" section */}
       
          {/* Link to Navigating Park */}
          <h4 className="cursor-pointer">
            <TransitionLink href="/navigating-park" label="Navigation Park"/>
          </h4>
        </div>
      </div>
    </div>
  );
}
