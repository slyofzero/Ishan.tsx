import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // ------------------------------ Refs ------------------------------
  const heroSection = useRef<HTMLDivElement>(null);
  const heroText = useRef<HTMLDivElement>(null);

  // ------------------------------ Animations ------------------------------
  useEffect(() => {
    // Animation to pan the background image by 10% as the user scrolls when the user has scrolled 10% of its height
    gsap.fromTo(
      ".bg",
      { backgroundPosition: "50% 0%" },
      {
        backgroundPosition: "50% 20%",
        ease: "none",
        scrollTrigger: {
          trigger: heroSection.current,
          start: "10% 0%",
          end: "90% 0%",
          scrub: 1.5,
        },
      }
    );

    // Translating the hero text bg image by the number of pixels the hero text is positioned to left by
    const rect = heroText.current?.getBoundingClientRect();

    if (rect?.left) {
      gsap.context(() => {
        gsap.set(".bg", { x: -rect?.left });
      }, heroText);
    }
  }, []);

  // Function to repeat certain JSX text
  const repeatText = (length: number, text: React.ReactNode) => {
    return Array.from(Array(length).keys()).map(() => {
      return <>{text}</>;
    });
  };

  return (
    <section
      ref={heroSection}
      className="relative -z-10 h-[150vh] overflow-hidden font-bold uppercase text-white lg:h-[300vh] lg:text-xl"
    >
      <div className={`${backgroundImage}`}></div>

      <div
        ref={heroText}
        className="fixed top-1/2 left-1/2 z-50 aspect-[18/20] w-52 -translate-x-1/2 -translate-y-1/2 overflow-hidden lg:w-72"
      >
        <h1 className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 select-none font-morganite text-2xl tracking-[0.3em] lg:text-3xl">
          Portfolio for Ishan Shishodiya
        </h1>

        <div className={`${backgroundImage} lg:blur-[2px]`}></div>
      </div>

      <p className="invisible absolute top-0 left-0 h-full w-64 leading-5 lg:visible">
        {repeatText(
          8,
          <>
            Thou shalt <span className={heroNOTStyle}>not</span> use the default
            font in thy hero section. Thou shalt{" "}
            <span className={heroNOTStyle}>not</span> use DALLE to generate the
            background image. Thou shalt{" "}
            <span className={heroNOTStyle}>not</span> overload the viewer's mind
            with too much text and colors. Thou shalt{" "}
            <span className={heroNOTStyle}>not</span> write gibberish. Thou
            shalt <span className={heroNOTStyle}>not</span> meet deadlines. Thou
            shalt <span className={heroNOTStyle}>not</span> have good github
            commits.
          </>
        )}
      </p>

      <p className="absolute top-[512px] right-2 h-full w-64 text-right text-xs leading-5 lg:right-[25%] lg:text-sm">
        {repeatText(12, <>Creating Learning Designing </>)}
      </p>
    </section>
  );
};

export default Hero;

// ------------------------------ Styling ------------------------------
const backgroundImage =
  "bg fixed top-0 left-0 -z-50 h-screen w-screen select-none bg-[url(/images/hero-bg.jpg)] bg-[length:1693px_2540px] brightness-200 lg:bg-cover";
const heroNOTStyle = "line-through decoration-gray-500 decoration-4";
