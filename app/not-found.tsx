import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
            404 error
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            We lost this page
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn't exist.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <Link href="/">
              <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                Take me home
              </button>
            </Link>
          </div>

          {/* <div className="mt-10 space-y-6">
            <div>
              <Link
                href="/projects"
                className="inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
              >
                <span>Projects</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Explore my projects.
              </p>
            </div>

            <div>
              <Link
                href="/blog"
                className="inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
              >
                <span>blog</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Read the latest posts on my blog.
              </p>
            </div>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
              >
                <span>About Me</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Know more about me.
              </p>
            </div>
          </div> */}
        </div>

        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <Image
            className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
            src="/assets/icon-512x512.png"
            alt="logo"
            width={400}
            height={400}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
          />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
