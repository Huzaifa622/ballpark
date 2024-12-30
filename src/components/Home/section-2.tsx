import BoxReveal from "../ui/box-reveal";
import Globe from "../ui/globe";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function Section2() {
  return (
    <div className=" relative  text-white  w-[80%] mx-auto max-w-screen-2xl bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div className="flex flex-col items-center">
        <BoxReveal>
          <h1 className="text-center text-4xl font-bold text-[#FF007A] bg-white p-2 rounded uppercase">
            Our Services
          </h1>
        </BoxReveal>
        <div className=" z-[20] relative h-full p-4 flex md:flex-row flex-col-reverse my-8  ">
          <div className="md:w-[70%]">
            <TextGenerateEffect
            className="text-left"
              words={
                "AI-powered architecture merges innovation and efficiency, creating designs that are visually stunning, sustainable, and adaptable. Leveraging advanced algorithms, AI optimizes spatial layout, energy efficiency, and environmental harmony, enabling futuristic structures that meet global needs. The result is architecture that pushes boundaries and redefines the future of design worldwide."
              }
            />
            <TextGenerateEffect
            className="text-left"
              words={
                "This AI-built architecture is a paradigm shift, where human creativity and AI synergy deliver designs that are efficient, beautiful, and future-proof"
              }
            />
          </div>
          <div className="md:w-[50%] relative h-[30vh] md:h-[50vh]">
          {/* <div className=""> */}
          <Globe className="w-full -top-[18%] left-[50%] translate-x-[-50%]"  />
          {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
