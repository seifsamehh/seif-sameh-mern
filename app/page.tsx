"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CircularProgress } from "@nextui-org/react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/shared/Header"));
const LeftBar = dynamic(() => import("@/shared/LeftBar"));
const BottomBar = dynamic(() => import("@/shared/BottomBar"));
const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/About"));
const Experience = dynamic(() => import("@/components/Experience"));
const Projects = dynamic(() => import("@/components/Projects"));
const Cooperate = dynamic(() => import("@/components/Cooperate"));
const Blog = dynamic(() => import("@/components/Blog"));
const Cta = dynamic(() => import("@/components/Cta"));
const Footer = dynamic(() => import("@/shared/Footer"));
import "../styles/app.scss";

export default function Home() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 250);

    return () => clearInterval(interval);
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <section
          className="loading-page min-h-screen flex justify-center items-center flex-col gap-4 relative z-20 bg-[#0f172a] overflow-hidden"
          id="loading"
        >
          <Image
            src="/assets/miniLogo-white.svg"
            alt="logo"
            width={100}
            height={100}
            priority={true}
          />
          <CircularProgress
            aria-label="Loading..."
            size="lg"
            value={value}
            color="primary"
            showValueLabel={true}
          />
        </section>
      ) : (
        <>
          <Header />
          <main>
            <LeftBar />
            <BottomBar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Cooperate />
            <Blog />
            <Cta />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
