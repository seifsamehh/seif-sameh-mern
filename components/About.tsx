"use client";

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

const About = () => {
  return (
    <>
      <Parallax translateY={[-40, 40]} id="about">
        <div className="title">
          <h2 className="text-center min-[290px]:text-5xl md:text-8xl font-black">
            About me
          </h2>
        </div>
      </Parallax>
      <section className="about-me overflow-hidden py-6">
        <div className="content flex justify-center items-center gap-6 flex-col">
          <div className="left">
            <p className="max-w-2xl leading-8 text-center min-[290px]:px-4 md:px-0">
              I am a MERN stack web developer with 3+ years of experience in
              building scalable and user-friendly web applications. I have a
              strong understanding of JavaScript, MongoDB, Express, React, Next,
              and Node.js. I am also proficient in using web development tools
              and technologies such as Git, GitHub, and Strapi. I am a highly
              motivated and results-oriented individual with a proven track
              record of success. I am confident that I can use my skills and
              experience to make a significant contribution to your company.
            </p>
          </div>
          <div className="right">
            <Image
              src="/assets/emoji.webp"
              alt="emoji"
              aria-label="emoji"
              width={200}
              height={200}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
