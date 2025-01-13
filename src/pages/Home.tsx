// import {  useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Herobanner from "../components/Home/hero-banner";
// import Section2 from "../components/Home/section-2";
// import Section3 from "../components/Home/section-3";
// import Template from "../layout/template";
// import Section4 from "../components/Home/section-4";
// import Section1 from "../components/Home/section-1";

// const Home = () => {
//   // const [progress, setProgress] = useState<number>(0);
//   const [currentComponentIndex, setCurrentComponentIndex] = useState<number>(0);
//   const [showBlackDivs, setShowBlackDivs] = useState<boolean>(false);
//   const [scrollDirection, setScrollDirection] = useState<
//     "forward" | "backward"
//   >("forward");
//   const [isScrolling, setIsScrolling] = useState<boolean>(false);

//   const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
//     if (isScrolling) return;

//     const isScrollingDown = event.deltaY > 0;
//     const isAtTopOfSection = window.scrollY <= 0;
//     const isAtBottomOfSection =
//       window.innerHeight + window.scrollY >=
//       document.documentElement.scrollHeight - 1;

//     if (isScrollingDown) {
//       if (isAtBottomOfSection && currentComponentIndex < 4) {
//         setScrollDirection("forward");
//         setCurrentComponentIndex((prevIndex) => Math.min(prevIndex + 1, 4));
//         setShowBlackDivs(true);
//         setIsScrolling(true);
//         setTimeout(() => {
//           setShowBlackDivs(false);
//           setIsScrolling(false);
//         }, 1000);
//       }
//     } else {
//       if (isAtTopOfSection && currentComponentIndex > 0) {
//         setScrollDirection("backward");
//         setCurrentComponentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//         setShowBlackDivs(true);
//         setIsScrolling(true);
//         setTimeout(() => {
//           setShowBlackDivs(false);
//           setIsScrolling(false);
//         }, 1000);
//       }
//     }
//   };

//   // useEffect(() => {
//   //   const handleProgress = () => {
//   //     const scrollPosition = window.scrollY;
//   //     const maxHeight =
//   //       document.documentElement.scrollHeight - window.innerHeight;
//   //     const scrolled = (scrollPosition / maxHeight) * 100;
//   //     setProgress(scrolled);
//   //   };
//   //   window.addEventListener("scroll", handleProgress);
//   //   return () => window.removeEventListener("scroll", handleProgress);
//   // }, []);

//   const slideInVariants = {
//     forward: {
//       initial: { x: "100%", opacity: 0 },
//       animate: { x: 0, opacity: 1 },
//       exit: { x: "-100%", opacity: 0 },
//     },
//     backward: {
//       initial: { x: "-100%", opacity: 0 },
//       animate: { x: 0, opacity: 1 },
//       exit: { x: "100%", opacity: 0 },
//     },
//   };

//   const renderSection = () => {
//     switch (currentComponentIndex) {
//       case 0:
//         return (
//           <>
//             <Herobanner />
//           </>
//         );
//       case 1:
//         return <Section1 />;
//       case 2:
//         return (
//           <div className="min-h-screen">
//             <Section2 />
//           </div>
//         );
//       case 3:
//         return <Section3 />;
//       case 4:
//         return <Section4 />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Template>
//       <div className="h-screen" onWheel={handleScroll}>
//         <AnimatePresence mode="wait">
//           {showBlackDivs && (
//             <>
//               <motion.div
//                 className="black-div top"
//                 initial={{ y: "-100%" }}
//                 animate={{ y: 0 }}
//                 exit={{ y: "-100%" }}
//                 transition={{ duration: 1 }}
//               />
//               <motion.div
//                 className="black-div bottom"
//                 initial={{ y: "100%" }}
//                 animate={{ y: 0 }}
//                 exit={{ y: "100%" }}
//                 transition={{ duration: 1 }}
//               />
//             </>
//           )}
//         </AnimatePresence>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentComponentIndex}
//             variants={slideInVariants[scrollDirection]}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             transition={{ duration: 0.8 }}
//           >
//             {renderSection()}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </Template>
//   );
// };

// export default Home;

// import Section4 from "../components/Home/section-4";
import Herobanner from "../components/Home/hero-banner";
import Section2 from "../components/Home/section-2";
import Section3 from "../components/Home/section-3";
import Template from "../layout/template";
import Section1 from "../components/Home/section-1";
import { useEffect, useState } from "react";

const Home = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollPosition / maxHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        <div id="about" className="">
          <Section2 />
        </div>
        <div id="services">
          <Section3 />
        </div>
        {/* <div id="testimonals"> */}
        {/* <Section4 />
        </div> */}
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
