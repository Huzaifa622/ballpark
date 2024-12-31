import Particles from "../components/ui/particles";

import { AuroraBackground } from "../components/ui/aurora-background";
// import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Vortex } from "../components/ui/vortex";
// import Header from "../components/ui/header";
// import Section1 from "../components/Home/section-1";

export default function Layout() {
  return (
    <div className="bg-[url('/assets/background-bg.jpg')] bg-no-repeat bg-cover z-[-9] fixed  top-0 h-screen  w-full  text-white">
      {/* <Header /> */}
      <Vortex
       rangeY={800}
       particleCount={200}
       baseHue={120}
       className="bg-transparent">
      <AuroraBackground>
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={100}
          color={"#ffffff"}
          refresh
        />
     
     <div></div>
        {/* <Section1/> */}
      </AuroraBackground>
      </Vortex>
    </div>
  );
}
