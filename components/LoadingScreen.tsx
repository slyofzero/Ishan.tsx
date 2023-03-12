import gsap from "gsap";
import React, { useRef, useEffect } from "react";

const LoadingScreen = () => {
  // ------------------------------ Ref ------------------------------
  const loadingScreen = useRef<HTMLDivElement>(null);

  // ------------------------------ Animations ------------------------------
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
      tl.to(
        loadingScreen.current,
        {
          x: "100%",
          duration: 1,
        },
        "-=0.3"
      );
    }, loadingScreen);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={loadingScreen}
      className="fixed top-0 left-0 z-[51] flex h-screen w-screen select-none flex-col items-center justify-center bg-red-500 text-black"
    >
      {/* "Loading" circuluar text */}
      <div className="absolute left-1/2 aspect-square h-[300px] -translate-x-1/2 -translate-y-1/2 md:top-[29%] md:h-[450px] lg:top-[15%]">
        {Array.from(Array(4).keys()).map((index) => (
          <div
            key={index}
            className="loading-text absolute top-0 left-1/2 flex aspect-square h-full origin-bottom-left overflow-hidden font-mono text-xl font-bold uppercase"
            style={{ transform: `rotate(-${45 + 90 * index}deg)` }}
          >
            {"·Loading·".split("").map((letter, key) => {
              return (
                <span
                  key={key}
                  className={`absolute bottom-0 left-0 block h-1/2 origin-bottom`}
                  style={{ transform: `rotate(${7 * key}deg)` }}
                >
                  {letter}
                </span>
              );
            })}
          </div>
        ))}
      </div>

      {/* Numbers 4 3 2 1 0 */}
      <div className="absolute top-1/2 left-1/2 flex h-96 w-96 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
        <h1 id="four" className={`${numberStyles} opacity-100`}>
          4
        </h1>
        <h1 id="3" className={`${numberStyles} -translate-x-[40%]`}>
          3
        </h1>
        <h1 id="2" className={`${numberStyles} -translate-x-[40%]`}>
          2
        </h1>
        <h1 id="1" className={`${numberStyles}`}>
          1
        </h1>
        <h1 id="1" className={`${numberStyles}`}>
          0
        </h1>
      </div>
    </section>
  );
};

export default LoadingScreen;

// ------------------------------ Styling  ------------------------------
const numberStyles =
  "number opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-ogg text-6xl text-[15rem] md:text-[22.5rem]";
