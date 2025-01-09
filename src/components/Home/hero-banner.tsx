import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Particles from "../../components/ui/particles";
import { AuroraBackground } from "../../components/ui/aurora-background";
import { Vortex } from "../../components/ui/vortex";
import { GoogleGeminiEffect } from "../../components/ui/google-gemini-effect";
import { useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { CoolMode } from "../ui/cool-mode";
// import { WavyBackground } from "../components/ui/wavy-background";

// import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

export default function Herobanner() {
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
  const comp = useRef(null);
  const [showIntro, setShowIntro] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Check sessionStorage for the intro flag
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (!hasSeenIntro) {
      setShowIntro(true);
      sessionStorage.setItem("hasSeenIntro", "true");
    }
  }, []);

  // useEffect(()=>{
  //   setShowIntro(true);
  // },[window.location.reload])

  useLayoutEffect(() => {
    if (!startAnimation) return;

    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5,
      })
        .to("#intro-slider", {
          opacity: 0,
          zIndex: 0,
          duration: 1.3,
          onComplete: () => setShowIntro(false),
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, [startAnimation]);

  useEffect(() => {
    if (!showIntro) return;

    const line = gsap.timeline({ repeat: -1 });
    line.fromTo(
      "#svg-line",
      { strokeDasharray: "1000", strokeDashoffset: "1000" },
      {
        strokeDashoffset: "0",
        duration: 2,
        ease: "power1.inOut",
        repeatDelay: 1,
      }
    );

    return () => {line.kill()};
  }, [showIntro]);

  return (
    <div className="relative" ref={comp}>
      {showIntro && (
      
        // <BackgroundGradientAnimation  >
        <div
          id="intro-slider"
          className=" fixed h-screen p-10 bg-gradient-to-r from-[#ffffff] to-[#73c2b7] text-[#FF007A] top-0 left-0 z-50 font-spaceGrotesk w-full flex flex-col items-center gap-10 tracking-tight"
        >

          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            style={{ background: "new 0 0 1000 1000", cursor: "pointer" , zIndex: "50" }}
            xmlSpace="preserve"
            onClick={() => setStartAnimation(true)}
          >
            <g>
              <path
                id="svg-line"
                style={{
                  fill: "none",
                  stroke: "#000000",
                  strokeMiterlimit: 10,
                  strokeDasharray: "1000",
                  strokeDashoffset: "1000",
                }}
                d="M438,828.5L21.3,411.8c0,0,136-343.8,476.7-349.4
s480.7,344.9,480.7,344.9L557.9,828.5c0,0,35.8,57.1-11.1,93.3c-22.9,17.6-54,20.7-80.2,8.5C439.9,917.9,414.1,890.2,438,828.5z"
              />
              <path
                style={{
                  fill: "none",
                  stroke: "#000000",
                  strokeMiterlimit: 10,
                }}
                d="M253.1,506.6l203.3-205.5c0,0,40.5,29.4,79.8,0l207.6,207.7
c0,0-30,43.6-0.9,88L536.6,806.7c0,0-23-25.3-75.8,0L253.1,588.6C253.1,588.6,283.9,557.9,253.1,506.6z"
              />
            </g>
          </svg>
          <p className="text-black z-50 uppercase tracking-widest absolute font-Roboto  text-xs top-32 animate-bounce">
            Click to enter
          </p>
        </div>
          // </BackgroundGradientAnimation>
        
      )}

      <div className="relative  h-screen w-full text-white">
        <Vortex
          rangeY={800}
          particleCount={200}
          baseHue={120}
          // className="bg-transparent "
          containerClassName="absolute z-30 "
        >
          <AuroraBackground className=" relative z-30" >
            <Particles
              className="absolute inset-0 h-fit z-10"
              quantity={100}
              ease={100}
              color={"#ffffff"}
              refresh
            />
            <img src="/assets/banner3.jpg" className="absolute top-0 left-0 w-full   -z-10 
            " />
          </AuroraBackground>
        </Vortex>
        <div className="relative h-screen flex justify-center items-center">
            <div className="relative  w-[30%] mx-auto flex flex-col items-center  justify-center mt-40 h-screen   z-30 pointer-events-auto"> {/* Enable pointer events for content */}
        <CoolMode>
          <Link to={"https://ball-park-beta.vercel.app/login"} className="bg-white px-8 text-center mb-4 py-2 hover:bg-[#1B2978] hover:text-white transition-all ease-linear rounded-sm text-[#1B2978]" >Join Us</Link>
        </CoolMode>
        <p className="text-center">Set builders, creative agencies, and designers alike. Witness the first AI to cost your designs and technical drawings</p>
      </div>
      </div>
      </div>
    </div>
  );
}
