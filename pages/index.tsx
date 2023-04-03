import type { NextPage } from "next";
import Head from "next/head";

import Hero from "../components/Hero";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import SecondSection from "../components/SecondSection";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ThirdSection from "../components/ThirdSection";
gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
  const main = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Each section in the DOM is invisible (visibility: hidden) by default and is later on made visible using GSAP set function to avoid any of that section's element flashing before its predecessors are rendered.
    // const sections = document.querySelectorAll("section");
    gsap.set(main.current, { visibility: "visible" });
    // sections.forEach((section) => gsap.set(section, { visibility: "visible" }));

    // The "hide-section" class hides the section when it is out of viewport, can be helpful in avoiding conflicting elements during animations and styling
    const toHideSections = document.querySelectorAll(".hide-section");

    toHideSections.forEach((section) => {
      gsap.to(section, {
        autoAlpha: 0,
        stagger: 0,
        scrollTrigger: {
          trigger: section,
          start: "100% 0%",
          end: "100% 0%",
          toggleActions: "restart none restart reset",
        },
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Ishan.tsx</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <LoadingScreen />
      <Navbar />
      <main ref={main} className="invisible">
        <Hero />
        <SecondSection />
        <ThirdSection />
      </main>
    </>
  );
};

export default Home;
