"use client";

import Image from "next/image";
import { Link } from "@nextui-org/react";
import { Parallax } from "react-scroll-parallax";

const Projects = () => {
  return (
    <>
      <Parallax translateY={[-40, 40]} id="projects">
        <div className="title">
          <h2 className="text-center min-[290px]:text-5xl md:text-8xl font-black">
            Projects
          </h2>
        </div>
      </Parallax>
      <section className="lg-projects min-[290px]:hidden md:block overflow-hidden py-6">
        <div className="content flex justify-center items-center">
          <div className="grid grid-cols-3 grid-rows-9 gap-4">
            <div className="row-span-3 bg-cyan-600 rounded-lg">
              <div className="card p-4 flex justify-start items-start gap-2 flex-col">
                <Image
                  src="/assets/FinalTouch.webp"
                  alt="final touch"
                  aria-label="final touch"
                  width={300}
                  height={300}
                  className="rounded-lg"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
                />
                <div className="card-content">
                  <h3 className="font-black text-3xl">Final Touch</h3>
                  <Link
                    isExternal
                    href="https://final-touch-design.vercel.app/"
                    showAnchorIcon
                    className="text-[#f5f5fa]"
                  >
                    Preview
                  </Link>
                </div>
              </div>
            </div>
            <div className="row-span-3 bg-cyan-600 rounded-lg">
              <div className="card p-4 flex justify-start items-start gap-2 flex-col">
                <Image
                  src="/assets/GreenArmy.webp"
                  alt="Green Army"
                  aria-label="Green Army"
                  width={300}
                  height={300}
                  className="rounded-lg"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
                />
                <div className="card-content">
                  <h3 className="font-black text-3xl">Green Army</h3>
                  <Link
                    isExternal
                    href="https://green-army.vercel.app/"
                    showAnchorIcon
                    className="text-[#f5f5fa]"
                  >
                    Preview
                  </Link>
                </div>
              </div>
            </div>
            <div className="row-span-6 bg-cyan-600 rounded-lg">
              <div className="card p-4 h-full flex justify-between items-start gap-2 flex-col">
                <Image
                  src="/assets/IEEECommunityWeb.webp"
                  alt="IEEE Community"
                  aria-label="IEEE Community"
                  width={300}
                  height={300}
                  className="rounded-lg h-96 object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
                />
                <div className="card-content">
                  <h3 className="font-black text-3xl">IEEE Community</h3>
                  <Link
                    isExternal
                    href="https://ieee-community.vercel.app/"
                    showAnchorIcon
                    className="text-[#f5f5fa]"
                  >
                    Preview
                  </Link>
                </div>
              </div>
            </div>
            <div className="row-span-3 row-start-4 bg-cyan-600 rounded-lg">
              <div className="card p-4 flex justify-start items-start gap-2 flex-col">
                <Image
                  src="/assets/GoldenHornet.webp"
                  alt="Golden Hornet"
                  aria-label="Golden Hornet"
                  width={300}
                  height={300}
                  className="rounded-lg"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
                />
                <div className="card-content">
                  <h3 className="font-black text-3xl">Golden Hornet</h3>
                  <Link
                    isExternal
                    href="https://golden-hornet-software.vercel.app/"
                    showAnchorIcon
                    className="text-[#f5f5fa]"
                  >
                    Preview
                  </Link>
                </div>
              </div>
            </div>
            <div className="row-span-3 row-start-4 bg-cyan-600 rounded-lg">
              <div className="card p-4 flex justify-start items-start gap-2 flex-col">
                <Image
                  src="/assets/Sneaker.webp"
                  alt="Sneaker"
                  aria-label="Sneaker"
                  width={300}
                  height={300}
                  className="rounded-lg"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
                />
                <div className="card-content">
                  <h3 className="font-black text-3xl">Sneaker</h3>
                  <Link
                    isExternal
                    href="https://sneakers-mauve-beta.vercel.app/"
                    showAnchorIcon
                    className="text-[#f5f5fa]"
                  >
                    Preview
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-3 row-span-3 row-start-7 bg-cyan-600 rounded-lg">
              <div className="card p-4 flex justify-between items-start gap-2">
                <Image
                  src="/assets/halaTechnologyWeb.webp"
                  alt="Hala Technology"
                  aria-label="Hala Technology"
                  width={300}
                  height={300}
                  className="rounded-lg w-[30rem]"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
                />
                <div className="card-content">
                  <h3 className="font-black text-3xl">Hala Technology</h3>
                  <Link
                    isExternal
                    href="https://hala-technology.vercel.app/"
                    showAnchorIcon
                    className="text-[#f5f5fa]"
                  >
                    Preview
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* sm screen */}
      <section className="sm-projects min-[290px]:block md:hidden overflow-hidden py-6">
        <div className="content flex justify-center items-center">
          <div className="cards flex flex-col gap-6">
            <div className="card bg-cyan-600 p-4 m-4 rounded-md">
              <Image
                src="/assets/FinalTouch.webp"
                alt="final touch"
                aria-label="final touch"
                width={300}
                height={300}
                className="rounded-lg"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
              />
              <div className="card-content">
                <h3 className="font-black text-3xl">Final Touch</h3>
                <Link
                  isExternal
                  href="https://final-touch-design.vercel.app/"
                  showAnchorIcon
                  className="text-[#f5f5fa]"
                >
                  Preview
                </Link>
              </div>
            </div>
            <Parallax opacity={[0.3, 2]}>
              <div className="card bg-cyan-600 p-4 m-4 rounded-md">
                <Image
                  src="/assets/GreenArmy.webp"
                  alt="Green Army"
                  aria-label="Green Army"
                  width={300}
                  height={300}
                  className="rounded-lg"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
                />
                <div className="card-content">
                  <h3 className="font-black text-3xl">Green Army</h3>
                  <Link
                    isExternal
                    href="https://green-army.vercel.app/"
                    showAnchorIcon
                    className="text-[#f5f5fa]"
                  >
                    Preview
                  </Link>
                </div>
              </div>
            </Parallax>
            <Parallax opacity={[0.3, 2]}>
              <div className="card bg-cyan-600 p-4 m-4 rounded-md">
                <Image
                  src="/assets/IEEECommunitySm.webp"
                  alt="IEEE Community"
                  aria-label="IEEE Community"
                  width={300}
                  height={300}
                  className="rounded-lg"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
                />
                <div className="card-content">
                  <h3 className="font-black text-3xl">IEEE Community</h3>
                  <Link
                    isExternal
                    href="https://ieee-community.vercel.app/"
                    showAnchorIcon
                    className="text-[#f5f5fa]"
                  >
                    Preview
                  </Link>
                </div>
              </div>
            </Parallax>
            <Parallax opacity={[0.3, 2]}>
              <div className="card bg-cyan-600 p-4 m-4 rounded-md">
                <Image
                  src="/assets/GoldenHornet.webp"
                  alt="Golden Hornet"
                  aria-label="Golden Hornet"
                  width={300}
                  height={300}
                  className="rounded-lg"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
                />
                <div className="card-content">
                  <h3 className="font-black text-3xl">Golden Hornet</h3>
                  <Link
                    isExternal
                    href="https://golden-hornet-software.vercel.app/"
                    showAnchorIcon
                    className="text-[#f5f5fa]"
                  >
                    Preview
                  </Link>
                </div>
              </div>
            </Parallax>
            <Parallax opacity={[0.3, 2]}>
              <div className="card bg-cyan-600 p-4 m-4 rounded-md">
                <Image
                  src="/assets/Sneaker.webp"
                  alt="Sneaker"
                  aria-label="Sneaker"
                  width={300}
                  height={300}
                  className="rounded-lg"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
                />
                <div className="card-content">
                  <h3 className="font-black text-3xl">Sneaker</h3>
                  <Link
                    isExternal
                    href="https://sneakers-mauve-beta.vercel.app/"
                    showAnchorIcon
                    className="text-[#f5f5fa]"
                  >
                    Preview
                  </Link>
                </div>
              </div>
            </Parallax>
            <Parallax opacity={[0.3, 2]}>
              <div className="card bg-cyan-600 p-4 m-4 rounded-md">
                <Image
                  src="/assets/halaTechnologyWeb.webp"
                  alt="Hala Technology"
                  aria-label="Hala Technology"
                  width={300}
                  height={300}
                  className="rounded-lg w-[30rem]"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
                />
                <div className="card-content">
                  <h3 className="font-black text-3xl">Hala Technology</h3>
                  <Link
                    isExternal
                    href="https://hala-technology.vercel.app/"
                    showAnchorIcon
                    className="text-[#f5f5fa]"
                  >
                    Preview
                  </Link>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
