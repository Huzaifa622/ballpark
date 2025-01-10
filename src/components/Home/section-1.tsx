import Particles from "../ui/particles";

export default function Section1() {
  return (
    <div className="flex justify-center relative items-center  bg-[#00083C]   w-full">
      <Particles
      className="absolute inset-0 h-fit z-30"
      quantity={100}
      ease={100}
      color={"#ffffff"}
      refresh
    />
         <div className="absolute  1500px:h-[700px] 1500px:w-[700px] h-full 1100px:h-[600px] 1100px:w-[600px]  w-full hero_animation 1100px:left-8 1500px:left-14"></div>
      <div className="flex justify-center relative items-center py-20">
        <h1 className="text-3xl text-center flex justify-center max-w-screen-2xl text-[#ffffff] items-center uppercase w-[50%] mx-auto">
          Did you enter the creative industry to spend your time crunching
          numbers and sending out one thousand emails? Neither did we. Welcome
          to the first-ever hybrid AI platform that makes creating a ballpark
          estimate for an event as effortless as writing a shopping list.
        </h1>
      </div>
    
    </div>
  );
}
