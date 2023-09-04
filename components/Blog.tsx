"use client";

import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

const Blog = () => {
  return (
    <>
      <Parallax translateY={[-40, 40]} id="blog">
        <div className="title">
          <h2 className="text-center min-[290px]:text-5xl md:text-8xl font-black">
            Blog
          </h2>
        </div>
      </Parallax>
      <section className="blog overflow-hidden py-6">
        <div className="content max-w-7xl px-6 py-10 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <div className="relative">
                <Image
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src="/assets/post1.webp"
                  alt="logo"
                  width={400}
                  height={400}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
                />

                <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                  <Image
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="/assets/icon-512x512.png"
                    alt="logo"
                    width={80}
                    height={80}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
                  />

                  <div className="mx-4">
                    <h2 className="text-sm text-gray-700 dark:text-gray-200">
                      Seif Eldin Sameh
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      CTO
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="topic-title mt-6 text-2xl font-semibold">
                The Beginning of Web Development
              </h2>

              <hr className="w-32 my-6 text-blue-500" />

              <p className="topic-content text-sm">
                The World Wide Web has become an essential part of our lives,
                but it wasn't always so.
              </p>

              <Link
                href="https://www.linkedin.com/pulse/beginning-web-development-seif-eldin-sameh"
                target="_blank"
                className="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
              >
                Read more
              </Link>
            </div>

            <div>
              <div className="relative">
                <Image
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src="/assets/post2.webp"
                  alt="logo"
                  width={400}
                  height={400}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
                />

                <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                  <Image
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="/assets/icon-512x512.png"
                    alt="logo"
                    width={80}
                    height={80}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
                  />

                  <div className="mx-4">
                    <h2 className="text-sm text-gray-700 dark:text-gray-200">
                      Seif Eldin Sameh
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      CTO
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="topic-title mt-6 text-2xl font-semibold">
                What is the difference between front-end and back-end web
                developments?
              </h2>

              <hr className="w-32 my-6 text-blue-500" />

              <p className="topic-content text-sm">
                Web development refers to the process of creating websites. It
                is a broad field encompassing many different skills and
                technologies. The two main branches of web development are
                front-end and back-end.
              </p>

              <Link
                href="https://www.linkedin.com/pulse/what-difference-between-front-end-back-end-web-seif-eldin-sameh"
                target="_blank"
                className="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
