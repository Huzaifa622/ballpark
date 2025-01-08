import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import TextRevealByWord from "../ui/text-reveal";
// import BoxReveal from "../ui/box-reveal";
import { Link } from "react-router-dom";
// import BlinkingDot from "../ui/blinking-dot";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  // const gifRef = useRef<HTMLImageElement>(null);
  const gifRef = useRef<HTMLImageElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/assets/break.mp3");

    // Create a timeline for the ball animation
    const ballTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#ball", // Target the ball image
        start: "top center", // Start when the top of the ball reaches the center of the viewport
        end: `+=1500vh`, // Duration of the pinned animation
        pin: true, // Pin the ball
        scrub: 1, // Smooth animation based on scroll
      },
    });

    // Add gradual left and right movements to the timeline
    ballTimeline
      .from("#ball", { filter: "blur(22px)", x: "600px" })
      .to("#ball", {
        filter: "blur(0px)",
        x: "-500px",
        rotation: -180, // Move to the left
        duration: 1, // Smooth duration
        ease: "power1.inOut",
        onComplete: () => {
          setVisible(true);
          setTimeout(() => {
            setVisible(false);
          }, 3000);
          // Show the GIF

          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          }
        },
        // Smooth easing
      })
      .to("#ball", {
        // filter: "blur(20px)",
        x: "-100px",
        rotation: 180, // Move to the right
        duration: 2, // Smooth duration
        ease: "power1.inOut", // Smooth easing
      });

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  // useEffect(()=>{
  //   audio.play()
  // },[])

  return (
    <div className="w-full py-12 h-full relative bg-gradient-to-r to-[#B3DEF2] from-[#F1F6F8]">
      <img
        src="/assets/ball.svg"
        className="absolute w-28 h-28 blur-3xl left-[50%]"
        id="ball"
        alt="Ball Image"
      />
      <div className="w-[80%] mx-auto max-w-screen-2xl relative">
        <img
          id="glass-video"
          ref={gifRef}
          src={visible ? "/assets/broken.gif" : ""}
          className="fixed  h-screen  top-0"
          style={{ visibility: "visible" }} // Initially hidden
          // alt="Glass breaking animation"
        />

        <audio src="/assets/break.mp3" autoPlay={true} ref={audioRef} />
      </div>

      <div>
        <div className=" mx-auto max-w-screen-2xl ">
          <div className="h-[10%]   z-40 top-0 px-2 uppercase mx-auto text-4xl py-8 font-normal  flex text-[#FF007A]  justify-center items-center ">
            <h1 className="text-7xl leading-[76px] text-center flex justify-center text-[#1B2978] items-center uppercase w-[50%] mx-auto">
              Plan Your <br /> Event Budget <br /> in Minutes
            </h1>
          </div>
          <div className="flex w-[50%] mx-auto text-[#1B2978]  ">
            <div className="w-[50%]"></div>
            <div className="w-[50%]">
              <h1 className="text-[9px] font-semibold my-4 tracking-widest uppercase flex items-center gap-8">
                {" "}
                <div className="bg-green-500 animate-ping drop-shadow-2xl shadow-green-700 h-1 w-1 rounded-full"></div>
                What makes an event budget?
              </h1>{" "}
              <p className="text-[19px] tracking-tight">
                Venue + Hire furniture + Staff + AV + Event Shell + Bespoke
                features = Ballpark cost.
              </p>
            </div>
          </div>
          <div className="flex w-[50%] mx-auto text-[#1B2978]  ">
            <div className="w-[50%]"></div>
            <div className="w-[50%]">
              <h1 className="text-[9px] font-semibold my-4 tracking-widest uppercase flex items-center gap-8">
                {" "}
                <div className="bg-green-500 animate-ping drop-shadow-2xl shadow-green-700 h-1 w-1 rounded-full"></div>
                What if budgeting could take just 5 minutes?
              </h1>{" "}
              <p className="text-[19px] tracking-tight">
                Say goodbye to endless emails and numerous open tabs. And say
                hello to the future of budgeting.
              </p>
            </div>
          </div>
          <div className="flex w-[50%] mx-auto text-[#1B2978]  ">
            <div className="w-[50%]"></div>
            <div className="w-[50%]">
              <h1 className="text-[9px] font-semibold my-4 tracking-widest uppercase flex items-center gap-8">
                {" "}
                <div className="bg-green-500 animate-ping drop-shadow-2xl shadow-green-700 h-1 w-1 rounded-full"></div>
                How It Works:
              </h1>{" "}
              <p className="text-[19px] tracking-tight">
                We are partnering with hire companies, venues, staff providers,
                and AV specialists across the UK. They upload their pictures and
                prices directly to our platform, so you can browse, compare, and
                build the bones of your event without any hassle.
              </p>
            </div>
          </div>
          <div className="flex w-[50%] mx-auto text-[#1B2978]  ">
            <div className="w-[50%]"></div>
            <div className="w-[50%]">
              <h1 className="text-[9px] font-semibold my-4 tracking-widest uppercase flex items-center gap-8">
                {" "}
                <div className="bg-green-500 animate-ping drop-shadow-2xl shadow-green-700 h-1 w-1 rounded-full"></div>
                What is an event shell?
              </h1>{" "}
              <p className="text-[19px] tracking-tight">
                An event shell is something that could be used and rebranded
                throughout many events. This can include anything from a stall
                to a DJ booth. We have drawings and their sizes with their raw
                material cost. Some even come with their own technical drawings
                and suggested manufacturers.
              </p>
            </div>
          </div>
          <div className="flex w-[50%] mx-auto text-[#1B2978]  ">
            <div className="w-[50%]"></div>
            <div className="w-[50%]">
              <h1 className="text-[9px] font-semibold my-4 tracking-widest uppercase flex items-center gap-8">
                {" "}
                <div className="bg-green-500 animate-ping drop-shadow-2xl shadow-green-700 h-1 w-1 rounded-full"></div>
                But we know every event is unique. What if we need something
                bespoke built?
              </h1>{" "}
              <p className="text-[19px] tracking-tight">
                That’s why we’ve developed something groundbreaking: the world’s
                first AI that calculates costs from images.
              </p>
              <p className="text-[19px] tracking-tight">
                Have a hand-drawn sketch or a rough idea? No problem. Just
                annotate your design, and our AI will:
              </p>
              <p className="text-[9px] font-semibold my-4 tracking-widest uppercase flex items-center gap-8">
                <div className="bg-green-500 animate-ping drop-shadow-2xl shadow-green-700 h-1 w-1 rounded-full"></div>
                Calculate material costs, even for bespoke items.
              </p>
              <p className="text-[9px] font-semibold my-4 tracking-widest uppercase flex items-center gap-8">
                <div className="bg-green-500 animate-ping drop-shadow-2xl shadow-green-700 h-1 w-1 rounded-full"></div>
                Account for substructures, so you don’t need professional
                technical drawings.
              </p>
            </div>
          </div>
          <div className="flex w-[50%] mx-auto text-[#1B2978]  ">
            <div className="w-[50%]"></div>
            <div className="w-[50%]">
              <h1 className="text-[9px] font-semibold my-4 tracking-widest uppercase flex items-center gap-8">
                {" "}
                <div className="bg-green-500 animate-ping drop-shadow-2xl shadow-green-700 h-1 w-1 rounded-full"></div>
                Lastly:
              </h1>{" "}
              <p className="text-[19px] tracking-tight">
                Now you’ve costed for everything. What’s next? We have a built
                in invoicing system. You can simply use the drop downs to
                calculate the birds eye view cost. You then can either ‘save as
                PDF’ or ‘Email suppliers’
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center">
              {" "}

           
                <h1
                  className="text-center w-[60%] mx-auto  text-4xl font-bold my-4 text-[#1B2978]
                                           p-2 rounded uppercase"
                >
                  {
                    "No more smoke and mirrors. Lets get onto the enjoyable stuff"
                  }
                </h1>
              
              <Link
                to={"https://ball-park-beta.vercel.app/login"}
                className="text-white  font-semibold bg-[#FF007A] p-2 text-lg rounded-full"
              >
                Let's Get Started
              </Link>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
