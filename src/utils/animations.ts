import gsap from "gsap";

export const animatePageIn = () => {
  
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");
console.log("calling2")
if (bannerOne && bannerTwo && bannerThree && bannerFour) {
  console.log("Banners found:", { bannerOne, bannerTwo, bannerThree, bannerFour });

  const tl = gsap.timeline();

  tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
    yPercent: 0,
  }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
    yPercent: 100,
    duration: 1.5, // Longer animation duration
    ease: "power2.out", // Smooth easing
    stagger: 0.3,
  });

  console.log("Timeline executed");
} else {
  console.error("One or more banners are missing in the DOM");
}
};

export const animatePageOut = (href: string, navigate: (path: string) => void) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: -100,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        navigate(href);
      },
    });
  }
};
