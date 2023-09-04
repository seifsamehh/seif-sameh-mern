"use client";

import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

const Cta = () => {
  return (
    <>
      <Parallax translateY={[-40, 40]} id="contact">
        <div className="title">
          <h2 className="text-center min-[290px]:text-5xl md:text-8xl font-black">
            Call To Action
          </h2>
        </div>
      </Parallax>
      <section className="cta overflow-hidden py-6">
        <div className="content flex justify-center items-center">
          <div className="box min-[290px]:w-11/12 md:w-3/6 min-[290px]:p-8 md:p-12 flex justify-between items-center min-[290px]:flex-wrap md:flex-nowrap bg-cyan-600 rounded-xl">
            <div className="left md:ml-4 min-[290px]:mb-8 md:mb-0">
              <h3 className="font-black">Find your next dream website</h3>
              <h3 className="text-4xl">Get Started With Me</h3>
            </div>
            <div className="right">
              <Link
                href="mailto:seiffsameh00@gmail.com"
                target="_blank"
                aria-label="mail"
                className="bg-[#f5f5fa] text-[#0f172a] py-4 px-6 font-black rounded-md"
              >
                Let's Start
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
