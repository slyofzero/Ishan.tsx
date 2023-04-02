import type { NextPage } from "next";
import Head from "next/head";

import Hero from "../components/Hero";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import SecondSection from "../components/SecondSection";
import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
  useEffect(() => {
    // The "hide-section" class hides the section when it is out of viewport, can be helpful in avoiding conflicting elements during animations and styling
    const sections = document.querySelectorAll(".hide-section");

    sections.forEach((section) => {
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

      {/* <LoadingScreen /> */}
      <Navbar />
      <main>
        <Hero />
        <SecondSection />
      </main>
    </>
  );
};

export default Home;
