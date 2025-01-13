"use client";
// import { useLocation } from "react-router-dom";
import { animatePageIn } from "../utils/animations";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  // const { pathname } = useLocation();
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-white z-40 hidden fixed top-0 left-0 w-1/4"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-white z-40 hidden fixed top-0 left-1/4 w-1/4"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-white z-40 hidden fixed top-0 left-2/4 w-1/4"
      />
      {/* {pathname?.includes("park") && (
        <img
          src="/assets/broken.gif"
          id="glasstrans"
          className="min-h-screen  z-40 fixed invisible hidden translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 w-screen"
        />
      )} */}
      <div
        id="banner-4"
        className="min-h-screen bg-white hidden z-40 fixed top-0 left-3/4 w-1/4"
      />
      {children}
    </div>
  );
}
