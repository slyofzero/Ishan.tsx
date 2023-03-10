import type { NextPage } from "next";
import Head from "next/head";

import indexCSS from "./index.module.css";
import { cva } from "class-variance-authority";
import Link from "next/link";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ishan.tsx</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <nav className="fixed top-8 right-8 z-50">
        <ul className="flex">
          <li className={navItemStyle()}>
            <Link href={"#intro"}>Intro</Link>
          </li>
          <li className={navItemStyle()}>
            <Link href={"#work"}>Work</Link>
          </li>
          <li className={navItemStyle()}>
            <Link href={"#about"}>About</Link>
          </li>
          <li className={navItemStyle()}>
            <Link href={"#contact"}>Contact</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Hero />
        <section className="h-screen bg-black"></section>
      </main>
    </>
  );
};

export default Home;

// ----------
const navItemStyle = cva(
  "px-2 bg-white text-black border-black border-solid border-1 uppercase font-morganite tracking-widest text-2xl font-extrabold",
  {
    variants: {
      isActive: { true: "bg-black text-white", false: "bg-white text-black" },
    },
    defaultVariants: { isActive: false },
  }
);
