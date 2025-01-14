import gsap from "gsap";
import TransitionLink from "../TransitionLink";
import ToggleSwitch from "./hamburger";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      const tl = gsap.timeline();
      tl.from("h4", {
        y: -10,
        opacity: 0,
        duration: 6,
        stagger: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to("h4", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [open]);

  return (
    <div className="fixed z-40 w-full  ">
      <div className="w-[80%]  mx-auto bg-transparent text-white h-10">
        <div className="font-signika absolute items-center text-xs top-4 flex justify-between w-[80%] logo text-center bg-transparent tracking-widest uppercase leading-[50px] font-bold">
          <div>{/*  */}</div>
          <h1 className="text-lg flex gap-2 items-center relative z-40">
            <div className="bg-[#E84A9B] animate-ping drop-shadow-2xl  h-1 w-1 rounded-full"></div>{" "}
            <TransitionLink
              setOpen={setOpen}
              href="/"
              className="text-lg text-white"
              label="Ball Park"
            />
          </h1>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center justify-center relative">
              <h1 className="cursor-pointer   relative z-40">
                <ToggleSwitch setOpen={setOpen} open={open} />
              </h1>
              <Link to={"https://ball-park-beta.vercel.app/login"} className="bg-white text-black rounded-md w-24 h-10 flex justify-center items-center hover:bg-black hover:text-white transition-all absolute left-12">
                Join Us
              </Link>
            </div>

            <div
              className={cn(
                "absolute rounded-md text-black  transition-all transform ease-in-out duration-500 bg-gradient-to-t from-[#DEFBFF] to-[#F0FBFF] top-1 right-10  z-[99999]",
                open ? "w-full md:w-[50%] lg:w-[30%]  " : "w-0 h-0 "
              )}
            >
              <div
                className={cn(
                  "hidden transition-all transform ease-in-out duration-700 p-4",
                  open && "flex flex-col   items-start "
                )}
              >
                <h4 className="text-6xl mb-5 font-Roboto font-extralight flex flex-col justify-start items-start">
                  {" "}
                  <h6 className="text-[#1B2978] font-light">Ball</h6>
                  <h6
                    className={cn(
                      "text-[#1B2978] opacity-50 hover:opacity-100 transition-all ease-linear duration-300"
                    )}
                  >
                    Park
                  </h6>
                </h4>

                <h4 className="h-8  ">
                  <TransitionLink
                    label="Navigation Park"
                    href="/navigating-park"
                    setOpen={setOpen}
                    className="transition-all ease-out duration-200 hover:ml-4 p-2 rounded-sm hover:bg-[#1B2978] hover:text-white"
                  />
                </h4>
                <h4 className="h-8">
                  <TransitionLink
                    label="In the ball park 2.0"
                    href="/ball-park"
                    setOpen={setOpen}
                    className="transition-all ease-out duration-200 hover:ml-4 p-2 rounded-sm hover:bg-[#1B2978] hover:text-white"
                  />
                </h4>
                <h4 className="h-8">
                  <TransitionLink
                    label="Contact Us"
                    href="/contact-us"
                    setOpen={setOpen}
                    className="transition-all ease-out duration-200 hover:ml-4 p-2 rounded-sm hover:bg-[#1B2978] hover:text-white"
                  />
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
