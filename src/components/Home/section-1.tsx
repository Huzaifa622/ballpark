import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextRevealByWord from "../ui/text-reveal";

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
  useEffect(() => {
    // Create a timeline for the ball animation
    const ballTimeline = gsap.timeline({
      scrollTrigger: {
        
        trigger: "#ball", // Target the ball image
        start: "top center", // Start when the top of the ball reaches the center of the viewport
        end: "+=7000vh", // Duration of the pinned animation
        pin: true, // Pin the ball
        scrub: 1, // Smooth animation based on scroll
      },
    });

    // Add gradual left and right movements to the timeline
    ballTimeline.from("#ball" , {filter: "blur(2px)", x: "600px",})
      .to("#ball", {
        filter: "blur(0px)",
        x: "-600px",
        rotation: -180,  // Move to the left
        duration: 1, // Smooth duration
        ease: "power1.inOut",
        onUpdate: () => {
          const ball = document.querySelector("#ball")?.getBoundingClientRect();
          const glass = document.querySelector("#glass")?.getBoundingClientRect();

          if (
            ball &&
            glass &&
            ball.right > glass.left &&
            ball.left < glass.right &&
            ball.bottom > glass.top &&
            ball.top < glass.bottom
          ) {
            gsap.to("#glass-shards > *", {
              opacity: 1,
              x: () => Math.random() * 200 - 100,
              y: () => Math.random() * 200 - 100,
              rotation: () => Math.random() * 360,
              duration: 1.5,
              ease: "power3.out",
              stagger: 0.05,
            });
          }
        },
         // Smooth easing
      })
      .to("#ball", {
        // filter: "blur(20px)",
        x: "300px",
        rotation: 180,  // Move to the right
        duration: 2, // Smooth duration
        ease: "power1.inOut", // Smooth easing
      });

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);


  return (
    <div className="w-full relative">
      <img
        src="/assets/ball.svg"
        className="absolute w-28 h-28 left-[50%]"
        id="ball"
        alt="Ball Image"
      />
      <svg
        id="glass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="absolute left-[50%] top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "100px",
          height: "100px",
        }}
      >
        <polygon
          points="50,50 100,10 150,50 150,150 50,150"
          fill="none"
          stroke="#ff007a"
          strokeWidth="2"
        />
        <g id="glass-shards" opacity="0">
          {[...Array(12)].map((_, i) => (
            <polygon
              key={i}
              points="50,50 70,30 60,20"
              fill="rgba(255,255,255,0.8)"
              stroke="#ff007a"
              strokeWidth="1"
              style={{
                transformOrigin: "center",
              }}
            />
          ))}
        </g>
      </svg>
      <div>
        <div className="flex justify-center items-center h-[100vh] bg-gradient-to-r to-[#B3DEF2] from-[#F1F6F8] w-full">
          <div className="flex justify-center relative items-center h-[100vh]">
            <h1 className="text-3xl text-center flex justify-center text-[#1B2978] items-center uppercase w-[50%] mx-auto">
              Did you enter the creative industry to spend your time crunching
              numbers and sending out one thousand emails? Neither did we.
              Welcome to the first-ever hybrid AI platform that makes creating
              a ballpark estimate for an event as effortless as writing a
              shopping list.
            </h1>
          </div>
        </div>
        <div className="my-12 mx-auto max-w-screen-2xl ">
          <div className="h-[10%] bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 sticky z-40 top-0 px-2 uppercase mx-auto text-4xl py-8 font-bold  flex text-[#FF007A]  justify-center items-center ">
            <div className="bg-white p-4 rounded-md">
              Plan Your Event Budget in Minutes
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="w-[50%]" ></div>
            <div className="h-[200vh] w-[40%] my-12 flex justify-center flex-col items-center">
              {/* <BoxReveal>
              <h1
                className="text-center text-4xl font-bold text-[#FF007A] 
                       p-2 rounded uppercase"
              >
             

              </h1>
            </BoxReveal> */}
           
              <TextRevealByWord
                title=" What makes an event budget?"
                text="Venue + Hire furniture + Staff + AV + Event Shell + Bespoke features = Ballpark cost.
"
              />
            </div>
            </div>
            <div className="h-[200vh]">
              <div className="">
                <TextRevealByWord
                  title="What if budgeting could take just 5 minutes?"
                  text="Say goodbye to endless emails and numerous open tabs. And say hello to the future of
budgeting."
                />
              </div>
            </div>
            <div className="h-[200vh]">
              <div className="">
                <TextRevealByWord
                  title="How It Works:"
                  text="We are partnering with hire companies, venues, staff providers, and AV specialists across
the UK. They upload their pictures and prices directly to our platform, so you can browse,
compare, and build the bones of your event without any hassle."
                />
              </div>
            </div>
            <div className="h-[200vh]">
              <div className="">
                <TextRevealByWord
                  title="What  is an event shell?"
                  text="An event shell is something that could be used and rebranded throughout many events. This
can include anything from a stall to a DJ booth. We have drawings and their sizes with their
raw material cost. Some even come with their own technical drawings and suggested
manufacturers.
"
                />
              </div>
            </div>
            <div className="h-[200vh]">
              <div className="">
                <TextRevealByWord
                  title="But we know every event is unique. What if we need something bespoke built?
"
                  text="That’s why we’ve developed something groundbreaking: the world’s first AI that calculates
costs from images
Have a hand-drawn sketch or a rough idea? No problem. Just annotate your design, and our
AI will:
● Calculate material costs, even for bespoke items.
● Account for substructures, so you don’t need professional technical drawings.

.
"
                />
              </div>
            </div>
            {/* <div className="h-[200vh]">
            <div className="">
              <TextRevealByWord text="Our quoting system not only saves your designs and their cost breakdowns but also comes stocked with price and material breakdowns common custom extras such as flats and step-and-repeats, complete with their technical drawings. Plus, when you join our community, you’ll unlock a treasure trove of material costs, all neatly organised in our quoting system with links on where to purchase." />
            </div>
          </div> */}
          </div>
          {/* <div className="py-12 z-[99999999999]">
    <StickyScroll content={content} />
    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section1;
