
import Herobanner from "../components/Home/hero-banner";
import Section2 from "../components/Home/section-2";
import Section3 from "../components/Home/section-3";
import Template from "../layout/template";
import Section4 from "../components/Home/section-4";
import Section1 from "../components/Home/section-1";
import { useEffect, useState } from "react";


const Home = () => {
  const [progress, setProgress] = useState(0);
 
   useEffect(() => {
     const handleScroll = () => {
       const scrollPosition = window.scrollY;
       const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
       const scrolled = (scrollPosition / maxHeight) * 100;
       setProgress(scrolled);
     };
 
     window.addEventListener('scroll', handleScroll);
 
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
  return (
    <Template>
   
      {/* <div className="relative text-white panel scroll-smooth"> */}
   {/* <TracingBeam className="z-[999999999999999999999999999999999999]"> */}
        {/* <Layout /> */}
        <div className="relative ">
        <div className="fixed top-0 left-0 w-full h-1 z-40 bg-gray-300">
          <div
            className="bg-[#FF007A] h-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <Herobanner />
        <div id="about">
          <Section1 />
        </div>
        <div id="about" className="" >
          <Section2 />
        </div>
        <div id="services">
          <Section3 />
        </div>
        <div id="testimonals">
          <Section4 />
        </div>
      {/* </TracingBeam> */}
      {/* </div> */}
      {/* <div className="panel z-[99999999999999]" id="join">
        <Footer />
        </div> */}
    </div>
    </Template>
  );
};

export default Home;
