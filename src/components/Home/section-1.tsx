import Particles from "../ui/particles";
import { motion } from "framer-motion";

export default function Section1() {
  return (
    <div className="flex justify-end relative items-end h-[100vh] bg-[#00083C] overflow-hidden w-full">
      <Particles
        className="absolute inset-0 h-fit z-30"
        quantity={100}
        ease={100}
        color={"#ffffff"}
        refresh
      />
      <div className="absolute  1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-screen  w-full hero_animation 1100px:left-8 1500px:left-14"></div>

      <div className="flex flex-col justify-end relative items-end h-[100vh] p-5">
        {/* Bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {/* Left Column - Text */}
          <div className="flex flex-col justify-end items-start text-white">
            <h1 className="text-[24px] my-2 text-[#ffffff] capitalize w-[100%]">
              Did you enter the creative industry to spend your time crunching
              numbers and sending out one thousand emails?
            </h1>
            <h1 className="text-[24px] my-2 text-[#ffffff] capitalize w-[100%]">
              Neither did we.
            </h1>
            <h1 className="text-[24px] my-2 text-[#ffffff] capitalize w-[100%]">
              Welcome to the first-ever hybrid AI platform that makes creating a
              ballpark estimate for an event as effortless as writing a shopping
              list.
            </h1>
          </div>

          {/* Right Column - Animated SVG */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <svg
              viewBox="0 0 672 655"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ecosystem-svg"
              width="560"
            >
              <circle
                cx={336}
                cy={123}
                r={122}
                stroke="#ffffff"
                style={{ opacity: 1, visibility: "inherit" }}
              />
              <circle
                cx={458}
                cy={209}
                r={122}
                stroke="#ffffff"
                style={{ opacity: 1, visibility: "inherit" }}
              />
              <circle
                cx={549}
                cy={328}
                r={122}
                stroke="#ffffff"
                style={{ opacity: 1, visibility: "inherit" }}
              />
              <circle
                cx={458}
                cy={453}
                r={122}
                stroke="#ffffff"
                style={{ opacity: 1, visibility: "inherit" }}
              />
              <circle
                cx={336}
                cy={532}
                r={122}
                stroke="#ffffff"
                style={{ opacity: 1, visibility: "inherit" }}
              />
              <circle
                cx={215}
                cy={453}
                r={122}
                stroke="#ffffff"
                style={{ opacity: 1, visibility: "inherit" }}
              />
              <circle
                cx={123}
                cy={328}
                r={122}
                stroke="#ffffff"
                style={{ opacity: 1, visibility: "inherit" }}
              />
              <circle
                cx={214}
                cy={209}
                r={122}
                stroke="#ffffff"
                style={{ opacity: 1, visibility: "inherit" }}
              />
              <circle
                cx={335}
                cy={328}
                r={122}
                stroke="#ffffff"
                style={{ opacity: 1, visibility: "inherit" }}
              />
            </svg>
          </motion.div>
          {/* <motion.div
        className="animate-background"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <svg
          viewBox="0 0 672 655"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative md:h-[96vh]"
          color="white"
        >
          {[ // Circle coordinates
            { cx: 336, cy: 123 },
            { cx: 458, cy: 209 },
            { cx: 549, cy: 328 },
            { cx: 458, cy: 453 },
            { cx: 336, cy: 532 },
            { cx: 215, cy: 453 },
            { cx: 123, cy: 328 },
            { cx: 214, cy: 209 },
          ].map((circle, index) => (
            <motion.circle
              key={index}
              cx={circle.cx}
              cy={circle.cy}
              r="122"
              stroke="white"
              strokeWidth="2"
              initial={{ pathLength: 0, strokeDashoffset: 1000 }} // Start with invisible circles
              animate={{ 
                pathLength: 1, // Draw the circle
                strokeDashoffset: 0, // Reset the offset to make it visible
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity, // Make the animation loop
                repeatType: "loop",
                delay: index * 0.3, // Stagger the circles to create a flowing effect
              }}
              className="transition-all duration-300 hover:stroke-2 hover:shadow-lg"
            />
          ))}

        </svg>
      </motion.div> */}
        </div>
      </div>
    </div>
  );
}
