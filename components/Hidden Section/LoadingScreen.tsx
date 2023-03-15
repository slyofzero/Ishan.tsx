import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

const LoadingScreen = () => {
  // ------------------------------ Ref ------------------------------
  const loadingScreen = useRef<HTMLDivElement>(null);

  // ------------------------------ Animations ------------------------------
  // Loading text rotating animation
  useEffect(() => {
    gsap.to("#loading-txt", { rotate: 360, duration: 120, ease: "none" });
  }, []);

  // Countdown and slide transition animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const numberStagger = 1;
      const appearDelay = 0.3;
      const disappearDelay = appearDelay + numberStagger;

      tl.to(".number", {
        opacity: 1,
        stagger: numberStagger,
        duration: 0,
        delay: appearDelay,
      });
      tl.to(
        ".number",
        {
          opacity: 0,
          stagger: numberStagger,
          duration: 0,
        },
        disappearDelay
      );
    }, loadingScreen);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={loadingScreen}
      className="fixed top-0 left-0 z-[51] flex h-screen w-screen select-none flex-col items-center justify-center gap-12 bg-white bg-[url(/images/loading-screen/bg.jpg)] bg-cover bg-center text-black"
    >
      <div className="relative">
        <div className="flex aspect-square h-[70vmin] items-center justify-center">
          {/* "Loading" circuluar text */}
          <Image
            src="/images/loading-screen/loading-txt.svg"
            height={450}
            width={450}
            alt="Loading please wait"
            className="absolute top-0 left-0 h-full w-full"
            id="loading-txt"
          />

          {/* Numbers 4 3 2 1 0 */}
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
            <h1 className={`${numberStyles} opacity-100`}>3</h1>
            <h1 className={`${numberStyles}`}>2</h1>
            <h1 className={`${numberStyles}`}>1</h1>
            <h1 className={`${numberStyles}`}>0</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingScreen;

// ------------------------------ Styling  ------------------------------
const numberStyles =
  "number font-ebGaramond opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22.5rem]";
