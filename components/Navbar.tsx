import Link from "next/link";
import React, { useEffect, useRef } from "react";

import { cva } from "class-variance-authority";
import gsap from "gsap";

const Navbar = () => {
  // ------------------------------ Refs ------------------------------
  const navBar = useRef<HTMLDivElement>(null);

  // ------------------------------ Animations ------------------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(navBar.current, { visibility: "visible" });
    }, navBar);
  }, []);

  return (
    <nav ref={navBar} className="invisible fixed top-8 right-8 z-40">
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
  );
};

export default Navbar;

// ------------------------------ Styling ------------------------------
const navItemStyle = cva(
  "px-2 border-gray-500 dark:border-black border-solid border-1 uppercase font-morganite tracking-widest text-base md:text-2xl font-extrabold",
  {
    variants: {
      isActive: {
        true: " bg-white text-black dark:bg-black dark:text-white",
        false: "bg-black text-white dark:bg-white dark:text-black",
      },
    },
    defaultVariants: { isActive: false },
  }
);
