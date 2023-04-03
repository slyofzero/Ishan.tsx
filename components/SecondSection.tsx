import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SectionSection = () => {
  // ------------------------------ Refs ------------------------------
  const secondSection = useRef<HTMLDivElement>(null);

  const sectionMainText = useRef<HTMLDivElement>(null);
  const intro = useRef<HTMLParagraphElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const sectionTransition = useRef<HTMLDivElement>(null);
  const transitionTrigger = useRef<HTMLDivElement>(null);

  const scrollDownGuiderContainer = useRef<HTMLDivElement>(null);
  const scrollDownGuider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heading.current, {
        y: 150,
        opacity: 0,
        scrollTrigger: {
          trigger: secondSection.current,
          start: "0% 50%",
          end: "0% 0%",
          scrub: 5,
        },
      });
      gsap.from(intro.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: secondSection.current,
          start: "0% 30%",
          end: "0% 0%",
          scrub: 5,
        },
      });

      gsap.to(sectionMainText.current, {
        scrollTrigger: {
          trigger: sectionMainText.current,
          start: "0% 0%",
          end: "+=9999999",
          pin: true,
          scrub: true,
        },
      });

      gsap.to(sectionTransition.current, {
        width: "100vmax",
        scrollTrigger: {
          trigger: transitionTrigger.current,
          start: "100% 100%",
          end: "100% 0%",
          scrub: 2,
        },
      });

      // Scroll down guider animation
      gsap.from(scrollDownGuiderContainer.current, {
        autoAlpha: 0,
        delay: 5,
        scrollTrigger: { trigger: scrollDownGuiderContainer.current },
      });

      gsap.to(scrollDownGuider.current, {
        yPercent: 1000,
        duration: 1,
        ease: "sine.out",
        repeat: -1,
        repeatRefresh: false,
        repeatDelay: 1,
      });
    }, secondSection);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={secondSection}
      className="hide-section flex h-[200vh] flex-col overflow-hidden bg-white dark:bg-black"
    >
      <div
        ref={sectionMainText}
        className="flex h-screen flex-col-reverse items-center justify-center gap-24 uppercase lg:flex-row"
      >
        <p
          ref={intro}
          className="flex w-1/2 flex-col gap-4 text-center text-xs font-bold lg:w-72 lg:text-base"
        >
          <span>
            Hello there! I&apos;m Ishan, a{" "}
            <span className="whitespace-nowrap">full-stack</span> developer
            dedicated to creating beautiful, reponsive, and functional websites
            to boost your business.
          </span>
          <span>
            I create awesome looking interactive websites, in a style you&apos;d
            fall for.
          </span>
        </p>

        <h1
          ref={heading}
          className="flex flex-col gap-4 font-morganite text-4xl font-extrabold tracking-[0.1em] lg:gap-8 lg:text-[70px]"
        >
          <span>Coding is art,</span>
          <span className="lg:ml-32">and coders are artists</span>
        </h1>

        {/* Keep Scrolling guider */}
        <div
          ref={scrollDownGuiderContainer}
          className="absolute bottom-4 right-1/4 flex items-center gap-8"
        >
          <div className="h-24 w-[3px] overflow-hidden  bg-transparent">
            <div
              ref={scrollDownGuider}
              className="aboslute top-0 left-0 h-[12px] w-[3px] -translate-y-full bg-black dark:bg-white"
            ></div>
          </div>
          <h3 className="select-none text-xs font-extrabold">Keep Scrolling</h3>
        </div>

        {/* Transition box */}
        {/* <div
          ref={sectionTransition}
          className="absolute aspect-square w-0 bg-black dark:bg-white"
        ></div> */}
      </div>

      <div ref={transitionTrigger} className="h-[150vh]"></div>
    </section>
  );
};

export default SectionSection;
