"use client";
import localFont from "next/font/local";
const myFont = localFont({
  src: "../public/fonts/BrittanySignature.ttf",
  display: "swap",
});
import { Parallax } from "react-scroll-parallax";
import "../styles/app.scss";
const Hero = () => {
  return (
    <section
      className="hero min-h-screen flex justify-center items-center flex-col gap-12 overflow-hidden"
      id="hero"
    >
      <Parallax speed={6}>
        <p className="min-[290px]:text-xl md:text-2xl">Hello, I'm</p>
      </Parallax>
      <Parallax scale={[1, 1.5]}>
        <h1
          className={`${myFont.className} min-[290px]:text-4xl md:text-9xl my-4 text-center`}
        >
          Seif Eldin Sameh
        </h1>
      </Parallax>
      <p className="min-[290px]:text-xl md:text-2xl">
        MERN Stack Web Developer
      </p>
      <div className="box">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
