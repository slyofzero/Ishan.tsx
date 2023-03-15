import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import React, { useEffect, useRef } from "react";

const LoadingScreen = () => {
  // ------------------------------ Refs ------------------------------
  const loadingScreen = useRef<HTMLDivElement>(null);

  // ------------------------------ Animations ------------------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Setting the loading screen to visible
      gsap.set(loadingScreen.current, { visibility: "visible" });

      //   Master timeline for this page
      const tl = gsap.timeline({ delay: 1 });

      // Animation for bouncing dots
      tl.from(".dot", {
        opacity: 0,
        y: -50,
        duration: 0.5,

        ease: CustomEase.create(
          "custom",
          "M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.354,0.963 0.362,1 0.366,0.992 0.54,0.6 0.7,0.6 0.855,0.599 0.996,0.991 1,1 "
        ),
        stagger: 0.25,
      });

      //   Animation to slide the loading screen to the side
      tl.to(loadingScreen.current, {
        delay: 1.5,
        xPercent: 100,
        duration: 1,
      });
    }, loadingScreen);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={loadingScreen}
      className="invisible fixed top-0 left-0 z-50 h-screen w-screen bg-white dark:bg-black"
    >
      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-8 md:gap-24">
        <div className={circleStyles}></div>
        <div className={circleStyles}></div>
        <div className={circleStyles}></div>
        <div className={circleStyles}></div>
      </div>

      <p className="absolute left-1/2 bottom-[40%] flex w-full -translate-x-1/2 animate-pulse items-center justify-center text-[8px] uppercase text-white md:bottom-[35%] lg:bottom-[20%]">
        <span>
          This site has a hidden section, so be on the lookout for clues to
          access it!
        </span>
      </p>
    </section>
  );
};

export default LoadingScreen;

// ------------------------------ Styling ------------------------------
const circleStyles =
  "dot aspect-square h-12 rounded-full bg-black dark:bg-white md:h-24 lg:h-32";
