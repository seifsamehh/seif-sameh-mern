"use client";

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

const Cooperate = () => {
  return (
    <>
      <Parallax translateY={[-40, 40]}>
        <div className="title">
          <h2 className="text-center min-[290px]:text-5xl md:text-8xl font-black">
            Cooperated With
          </h2>
        </div>
      </Parallax>
      <section className="cooperate overflow-hidden py-6">
        <div className="content flex justify-center items-center">
          <div className="images flex justify-center items-center gap-4 flex-wrap max-w-4xl">
            <Image
              src="/assets/dips.webp"
              alt="dips"
              aria-label="dips"
              width={150}
              height={150}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/assets/dir.webp"
              alt="dir"
              aria-label="dir"
              width={150}
              height={150}
              className="rounded-full"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/assets/exception.webp"
              alt="exception"
              aria-label="exception"
              width={150}
              height={150}
              className="rounded-full"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/assets/golden.webp"
              alt="golden"
              aria-label="golden"
              width={150}
              height={150}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/assets/pathfinder.webp"
              alt="pathfinder"
              aria-label="pathfinder"
              width={150}
              height={150}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/assets/ieee.webp"
              alt="ieee"
              aria-label="ieee"
              width={150}
              height={150}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/assets/enggam.webp"
              alt="enggam"
              aria-label="enggam"
              width={150}
              height={150}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/assets/FinalTouchLogo.webp"
              alt="FinalTouchLogo"
              aria-label="FinalTouchLogo"
              width={150}
              height={150}
              className="rounded-full"
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

export default Cooperate;
