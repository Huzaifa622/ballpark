import BoxReveal from "../ui/box-reveal";

import TextRevealByWord from "../ui/text-reveal";

const Section1 = () => {
  
  return (
    <div className="w-full mx-auto max-w-screen-2xl  bg-transparent  text-[#1B2978]">
      {/* <img src="/assets/ball.png" alt="ball " id="ball" /> */}
      <div className="    ">
        <div className="flex justify-center items-center h-[100vh] bg-white w-full">
          <BoxReveal boxColor="#1B2978" >
            <h1 className="text-3xl text-center flex justify-center items-center uppercase  w-[50%] mx-auto">
              Did you enter the creative industry to spend your time crunching
              numbers and sending out one thousand emails? Neither did we.
              Welcome to the first-ever hybrid AI platform that makes creating a
              ballpark estimate for an event as effortless as writing a shopping
              list
            </h1>
          </BoxReveal>
        </div>
        <div>
          <div className="h-[200vh]">
            <TextRevealByWord
              text="Did you enter the creative industry to spend your time crunching numbers and sending out
one thousand emails? Neither did we. Welcome to the first-ever hybrid AI platform that
makes creating a ballpark estimate for an event as effortless as writing a shopping list. "
            />
          </div>
        
        <div className="h-[200vh]">
          <div className="">
            <TextRevealByWord text="Simply upload your project, and let our AI do the heavy lifting. Curious about where those costs come from? We link you directly to the sources, so you know exactly what you’re getting—and if you need to tweak something, it’s pretty straightforward." />
          </div>
        </div>
        <div className="h-[200vh]">
          <div className="">
            <TextRevealByWord text="Our quoting system not only saves your designs and their cost breakdowns but also comes stocked with price and material breakdowns common custom extras such as flats and step-and-repeats, complete with their technical drawings. Plus, when you join our community, you’ll unlock a treasure trove of material costs, all neatly organised in our quoting system with links on where to purchase." />
          </div>
        </div>
      </div>
      {/* <div className="py-12 z-[99999999999]">
    <StickyScroll content={content} />
    </div> */}
    </div></div>
  );
};

export default Section1;
