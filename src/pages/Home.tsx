// import Section1 from "../components/Home/section-1"
// import Header from "../components/ui/header"
import Herobanner from "../components/Home/hero-banner";
import Layout from "../layout/layout";
import Section1 from "../components/Home/section-1";
import Section2 from "../components/Home/section-2";
import Section3 from "../components/Home/section-3";
// import Footer from "../components/ui/footer";
import Template from "../layout/template";
// import { TracingBeam } from "../components/ui/tracing-beam";
// import { useLayoutEffect, useRef } from "react";

const Home = () => {
 
  return (
    <Template>
   
      <div className="relative text-white panel">
   {/* <TracingBeam className="z-[999999999999999999999999999999999999]"> */}
        <Layout />
        <Herobanner />
        <div id="about">
          <Section1 />
        </div>
        <div id="services">
          <Section2 />
        </div>
        <div id="testimonals">
          <Section3 />
        </div>
      {/* </TracingBeam> */}
      </div>
      {/* <div className="panel z-[99999999999999]" id="join">
        <Footer />
        </div> */}
    </Template>
  );
};

export default Home;
