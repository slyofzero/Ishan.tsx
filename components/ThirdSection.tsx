import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const ThirdSection = () => {
  const thirdSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // gsap.set(thirdSection.current, { autoAlpha: 0 });
    gsap.to(thirdSection.current, {
      width: "100vw",
      height: "100vh",
      scrollTrigger: {
        trigger: thirdSection.current,
        start: "0% 100%",
        end: "0% 0%",
        scrub: 2,
      },
    });
  }, []);

  return (
    <section
      ref={thirdSection}
      className="h-screen w-0 bg-white text-black" //bg-black text-white dark:bg-white dark:text-black
    >
      Doggie
    </section>
  );
};

export default ThirdSection;
