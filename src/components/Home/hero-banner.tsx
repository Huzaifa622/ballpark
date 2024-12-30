// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

import { GoogleGeminiEffect } from "../ui/google-gemini-effect";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const Herobanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  // useGSAP(()=>{
  // const tl = gsap.timeline();

  // tl.from(".heading", {
  //   y: -30,
  //   // opacity : 0,
  //   blur: 15,
  //   duration: 1,
  //   delay: 0.8,
  // });

  // },[])
  return (
    // <div className="relative h-screen z-[999999999999] text-white">
    //   <div className="flex md:flex-row flex-col gap-10 md:gap-0 justify-center items-center h-full w-[80%] mx-auto">
    //     {" "}
    //     <div className="font-signika bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-10 px-12">
    //     <BoxReveal  duration={0.5}>
    //     <p className=" text-6xl font-semibold">
    //       Ball Park<span className="">.</span>
    //     </p>
    //   </BoxReveal>
 
    //   <BoxReveal  duration={0.5}>
    //     <div className="mt-[.5rem] md:w-full text-base md:text-sm font-signika">
    //       <p className="mb-4"> AI-powered architecture merges innovation and efficiency, creating designs that are both visually stunning and sustainable. </p>
    //       <p> By leveraging advanced algorithms, AI optimizes every aspect, from spatial layout to energy efficiency, enabling futuristic structures that adapt to both user needs and environmental conditions. </p>
      
    //     </div>
    //   </BoxReveal>
 
      
    //       </div>{" "}
    //     <img src="/assets/BALLP.png" alt="logo" className="md:w-[50%]" />
    //   </div>
    // </div>
    <div
    className="h-[300vh] bg-transparent w-full dark:border dark:border-white/[0.1] rounded-md relative pt-0 overflow-clip"
    ref={ref}
  >
    <GoogleGeminiEffect
      pathLengths={[
        pathLengthFirst,
        pathLengthSecond,
        pathLengthThird,
        pathLengthFourth,
        pathLengthFifth,
      ]}
    />
  </div>
  );
};

export default Herobanner;
