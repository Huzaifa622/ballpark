import BoxReveal from "../ui/box-reveal";
import Projects from "../ui/projects";
// import { StickyScroll } from "../ui/sticky-scroll-reveal"

  

const Section3 = () => {
  return (
    <div className="py-12 w-[80%] mx-auto my-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div className="flex justify-center font-bold">
      <BoxReveal>
        <h1 className="text-4xl text-center text-[#FF007A] bg-white p-2 rounded" >Testimonals</h1>
      </BoxReveal>
      </div>
         <Projects/>
    </div>
  )
}

export default Section3