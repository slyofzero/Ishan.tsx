import type { NextPage } from "next";
import Head from "next/head";

import Hero from "../components/Hero";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ishan.tsx</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <section className="h-screen bg-black"></section>
      </main>
    </>
  );
};

export default Home;
