
import Herobanner from "../components/Home/hero-banner";
import Section2 from "../components/Home/section-2";
import Section3 from "../components/Home/section-3";
import Template from "../layout/template";
import Section4 from "../components/Home/section-4";
import Section1 from "../components/Home/section-1";


const Home = () => {
 
  return (
    <Template>
   
      {/* <div className="relative text-white panel scroll-smooth"> */}
   {/* <TracingBeam className="z-[999999999999999999999999999999999999]"> */}
        {/* <Layout /> */}
        <Herobanner />
        <div id="about">
          <Section1 />
        </div>
        <div id="about">
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
    </Template>
  );
};

export default Home;
