import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // ------------------------------ Refs ------------------------------
  const heroSection = useRef<HTMLDivElement>(null);
  const heroText = useRef<HTMLDivElement>(null);
  const scrollDownGuider = useRef<HTMLDivElement>(null);

  // ------------------------------ Animations ------------------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation to pan the background image by 10% as the user scrolls when the user has scrolled 10% of its height
      gsap.fromTo(
        ".bg",
        { backgroundPosition: "50% 5%" },
        {
          backgroundPosition: "50% 25%",
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
          // Not adding anything would result in an identical background image positioning, by adding some numbers it gives the feel of refraction
          gsap.set(".bg", { x: -(rect?.left + 10), y: -(rect.top + 10) });
        }, heroText);
      }

      // Scroll down guider animation
      gsap.to(scrollDownGuider.current, {
        yPercent: 1000,
        duration: 1,
        ease: "sine.out",
        repeat: -1,
        repeatRefresh: false,
        repeatDelay: 1,
      });
    }, heroSection);

    return () => ctx.revert();
  }, []);

  // Function to repeat certain JSX text
  const repeatText = (length: number, text: React.ReactNode) => {
    return Array.from(Array(length).keys()).map(() => {
      return <>{text}</>;
    });
  };

  // ------------------------------ JSX ------------------------------
  return (
    <section
      ref={heroSection}
      className="hide-section relative -z-10 h-[200vh] overflow-hidden text-xs font-bold uppercase lg:h-[300vh] lg:text-base"
    >
      {/* Main background image */}
      <div className={`${backgroundImage}`}></div>

      {/* Main repeating text
              Sm - Invisible
              Md - Visible, left side*/}
      <p className="absolute top-0 left-0 h-full w-72 text-2xl leading-6 opacity-0 md:opacity-100">
        {repeatText(
          4,
          <>
            Thou shalt not have a hidden section the user won&apos;t be able to
            find. Thou shalt not use the default font in thy hero section. Thou
            shalt not use a black texture you found on Unsplash as the
            background image. Thou shalt not overload the viewer&apos;s mind
            with too much text and colors. Thou shalt not write gibberish. Thou
            shalt not meet deadlines. Thou shalt not have good github commits.
          </>
        )}
      </p>

      {/* Hero text and hero text background image
              Sm - width 13rem (w-52)
              Md - width 16rem (w-64)
        Lg - width 18rem (w-72)*/}
      <div
        ref={heroText}
        className="fixed top-1/2 left-1/2 z-50 aspect-[18/20] w-52 -translate-x-1/2 -translate-y-1/2 overflow-hidden md:w-64 lg:w-72"
      >
        {/* Hero text */}
        <h1 className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 select-none font-morganite text-2xl tracking-[0.3em] lg:text-3xl">
          Portfolio of Ishan Shishodiya
        </h1>

        {/* Hero text background image */}
        <div className={`${backgroundImage} blur-[0.8px]`}></div>
      </div>

      {/* Design decision text
              Sm - top right (partially hidden)
              Md - top right (not hidden)
              Lg - top center left (partially hidden)*/}
      <p className="absolute top-[200px] right-[24px] w-48 text-xs md:right-[20%] md:w-64 lg:top-[5%] lg:left-[35%]">
        The whole website is designed to respond on scroll so just keep
        scrolling, just keep scrolling, just keep scrolling &#9834; &#127901;
        &#9834; &#127901;
      </p>

      {/* Creating Learning Designing
              Sm - middle left (partially hidden)
              Md - middle right (partially hidden)
              Lg - middle right (not hidden)*/}
      <p className="absolute top-[512px] right-[30%] h-full w-64 text-right text-sm leading-5 md:right-[15%] lg:right-[25%]">
        {repeatText(
          20,
          <>
            Creating <span className="text-yellow-300">Learning</span> Designing{" "}
          </>
        )}
      </p>

      <p className="absolute bottom-[150px] right-2 flex w-[250px] flex-col items-end gap-16 text-right text-xs md:bottom-[300px] md:right-12 md:w-[350px] lg:right-52 lg:w-[450px]">
        The hidden section of the website just goes over the whole building
        process of the website along with the various ideas I had when I was
        designing the website, many of the ideas that I put into code but
        rejected at the last moment for a better one, and my personal comments
        and praises about my ideas... So yeah, it&apos;s the most important
        section of the whole website. You&apos;d need a keyboard to access it
        (huge clue tbh) so sorry mobile or tablet users, just hop on over to a
        PC.
      </p>
    </section>
  );
};

export default Hero;

// ------------------------------ Styling ------------------------------
const backgroundImage =
  "bg fixed top-0 left-0 -z-50 h-screen w-screen select-none bg-[url(/images/hero-bg.jpg)] bg-[length:1693px_2540px] invert dark:invert-0 dark:brightness-[1.8] dark:lg:brightness-150 lg:bg-cover";
