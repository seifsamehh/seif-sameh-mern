"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import ThemeSwitchSm from "@/components/ThemeSwitchSm";
const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  // scroll to sections
  const handleClickScrollHome = () => {
    const element = document.getElementById("hero");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickScrollAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickScrollProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickScrollBlog = () => {
    const element = document.getElementById("blog");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickScrollContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar shouldHideOnScroll height="6rem" className="bg-[#0f172a]">
      <NavbarContent>
        <NavbarBrand>
          <Image
            src="/assets/logo-white.svg"
            alt="logo"
            width={200}
            height={200}
            priority={true}
            className="lg-image cursor-pointer"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          />
          <Image
            src="/assets/miniLogo-white.svg"
            alt="logo"
            width={70}
            height={70}
            priority={true}
            className="sm-image cursor-pointer"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:flex gap-4 lg-menu" justify="center">
        <NavbarItem>
          <p
            className="text-[#f5f5fa] flex justify-center items-center cursor-pointer"
            aria-current="page"
            aria-label="home"
            onClick={handleClickScrollHome}
          >
            <svg
              width={25}
              height={25}
              fill="#f5f5fa"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M13.558 5.534a2.25 2.25 0 0 0-3.116 0l-4.626 4.44a.748.748 0 0 0-.218.405 27.344 27.344 0 0 0-.121 9.15l.112.721h2.977v-6.211a.75.75 0 0 1 .75-.75h5.368a.75.75 0 0 1 .75.75v6.211h2.977l.112-.72a27.38 27.38 0 0 0-.12-9.152.748.748 0 0 0-.219-.404l-4.626-4.44ZM9.404 4.452a3.75 3.75 0 0 1 5.192 0l4.627 4.44c.34.326.57.752.655 1.216a28.86 28.86 0 0 1 .127 9.653l-.18 1.157a.983.983 0 0 1-.972.832h-4.169a.75.75 0 0 1-.75-.75v-6.211h-3.868V21a.75.75 0 0 1-.75.75H5.147a.983.983 0 0 1-.971-.832l-.181-1.157a28.86 28.86 0 0 1 .127-9.653 2.26 2.26 0 0 1 .655-1.217l4.627-4.44Z"
                clipRule="evenodd"
              />
            </svg>
            Home
          </p>
        </NavbarItem>
        <NavbarItem>
          <p
            className="text-[#f5f5fa] flex justify-center items-center cursor-pointer"
            aria-label="about"
            onClick={handleClickScrollAbout}
          >
            <svg
              width={25}
              height={25}
              fill="#f5f5fa"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" />
              <path d="M11 12.5a3 3 0 0 0-3 3 1 1 0 0 0 1 1h6a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-2Z" />
              <path
                fillRule="evenodd"
                d="M7.543 2.883a31.331 31.331 0 0 1 8.913 0 3.196 3.196 0 0 1 2.73 2.874l.126 1.396c.293 3.225.293 6.47 0 9.694l-.127 1.396a3.197 3.197 0 0 1-2.729 2.874 31.334 31.334 0 0 1-8.913 0 3.197 3.197 0 0 1-2.728-2.874l-.127-1.396a53.504 53.504 0 0 1 0-9.694l.127-1.396a3.197 3.197 0 0 1 2.728-2.874Zm8.7 1.484a29.832 29.832 0 0 0-8.486 0 1.697 1.697 0 0 0-1.448 1.526l-.127 1.396a52.003 52.003 0 0 0 0 9.422l.127 1.396c.07.783.67 1.414 1.448 1.526a29.86 29.86 0 0 0 8.486 0 1.696 1.696 0 0 0 1.448-1.526l.127-1.396a52.009 52.009 0 0 0 0-9.422l-.127-1.396a1.697 1.697 0 0 0-1.448-1.526Z"
                clipRule="evenodd"
              />
            </svg>
            About
          </p>
        </NavbarItem>
        <NavbarItem>
          <p
            className="text-[#f5f5fa] flex justify-center items-center cursor-pointer"
            aria-label="projects"
            onClick={handleClickScrollProjects}
          >
            <svg
              width={25}
              height={25}
              fill="#f5f5fa"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.25 6.631v-1.17a1.75 1.75 0 0 1 1.49-1.73l1.22-.183a13.75 13.75 0 0 1 4.08 0l1.22.183a1.75 1.75 0 0 1 1.49 1.73v1.17l1.714.138a2.86 2.86 0 0 1 2.593 2.394 27.128 27.128 0 0 1 0 8.674 2.86 2.86 0 0 1-2.593 2.394l-1.872.15a57.078 57.078 0 0 1-9.184 0l-1.872-.15a2.86 2.86 0 0 1-2.593-2.394 27.129 27.129 0 0 1 0-8.674A2.86 2.86 0 0 1 5.536 6.77l1.714-.138Zm2.933-1.6a12.25 12.25 0 0 1 3.634 0l1.22.183a.25.25 0 0 1 .213.247v1.065a57.078 57.078 0 0 0-6.5 0V5.46a.25.25 0 0 1 .213-.247l1.22-.183ZM7.529 8.113c2.976-.24 5.966-.24 8.942 0l1.872.152a1.36 1.36 0 0 1 1.234 1.138c.062.385.115.77.16 1.158a17.517 17.517 0 0 1-15.474 0c.044-.387.098-.773.16-1.158a1.36 1.36 0 0 1 1.234-1.138l1.872-.152Zm-3.4 4.044a19.018 19.018 0 0 0 15.742 0 25.628 25.628 0 0 1-.294 5.44 1.36 1.36 0 0 1-1.234 1.139l-1.872.15c-2.976.24-5.966.24-8.942 0l-1.872-.15a1.36 1.36 0 0 1-1.234-1.139c-.291-1.8-.39-3.624-.294-5.44Z"
                clipRule="evenodd"
              />
            </svg>
            Projects
          </p>
        </NavbarItem>
        <NavbarItem>
          <p
            className="text-[#f5f5fa] flex justify-center items-center cursor-pointer"
            aria-label="blog"
            onClick={handleClickScrollBlog}
          >
            <svg
              width={25}
              height={25}
              fill="#f5f5fa"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.25 8A.75.75 0 0 1 9 7.25h7a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 8Z" />
              <path d="M9 10.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H9Z" />
              <path
                fillRule="evenodd"
                d="M8.5 3.25A4.75 4.75 0 0 0 3.75 8v10a3.75 3.75 0 0 0 3.75 3.75h11A1.75 1.75 0 0 0 20.25 20V5a1.75 1.75 0 0 0-1.75-1.75h-10Zm10.25 11V5a.25.25 0 0 0-.25-.25h-10A3.25 3.25 0 0 0 5.25 8v7a3.734 3.734 0 0 1 2.25-.75h11.25Zm0 1.5H7.5a2.25 2.25 0 0 0 0 4.5h11a.25.25 0 0 0 .25-.25v-4.25Z"
                clipRule="evenodd"
              />
            </svg>
            Blog
          </p>
        </NavbarItem>
        <NavbarItem>
          <p
            className="text-[#f5f5fa] flex justify-center items-center cursor-pointer"
            aria-label="contact"
            onClick={handleClickScrollContact}
          >
            <svg
              width={25}
              height={25}
              fill="#f5f5fa"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2.804 8.353c-.28 2.603-.268 5.605.122 8.197a3.138 3.138 0 0 0 2.831 2.66l1.51.131c3.15.274 6.317.274 9.466 0l1.51-.13a3.138 3.138 0 0 0 2.831-2.66c.39-2.593.402-5.595.122-8.198a30.68 30.68 0 0 0-.122-.904 3.138 3.138 0 0 0-2.831-2.66l-1.51-.13a54.647 54.647 0 0 0-9.465 0l-1.51.13a3.138 3.138 0 0 0-2.832 2.66 31.1 31.1 0 0 0-.122.904Zm4.593-2.2a53.146 53.146 0 0 1 9.206 0l1.51.131a1.64 1.64 0 0 1 1.478 1.389l.034.233-5.561 3.09a4.25 4.25 0 0 1-4.128 0l-5.56-3.09c.01-.078.022-.156.033-.233a1.638 1.638 0 0 1 1.478-1.389l1.51-.131ZM19.81 9.52a29.099 29.099 0 0 1-.218 6.807 1.638 1.638 0 0 1-1.478 1.389l-1.51.131a53.152 53.152 0 0 1-9.206 0l-1.51-.131a1.638 1.638 0 0 1-1.478-1.389 29.101 29.101 0 0 1-.217-6.807l5.016 2.787a5.75 5.75 0 0 0 5.585 0l5.015-2.787Z"
                clipRule="evenodd"
              />
            </svg>
            Contact
          </p>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="/assets/cv.pdf"
            aria-label="resume"
            download
            color="primary"
            variant="solid"
          >
            Resume
            <svg
              width={25}
              height={25}
              fill="#f5f5fa"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.75 13a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75Z" />
              <path d="M15.75 17a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75Z" />
              <path
                fillRule="evenodd"
                d="M7 2.25A2.75 2.75 0 0 0 4.25 5v14A2.75 2.75 0 0 0 7 21.75h10A2.75 2.75 0 0 0 19.75 19V7.968c0-.381-.124-.751-.354-1.055l-2.998-3.968a1.75 1.75 0 0 0-1.396-.695H7ZM5.75 5c0-.69.56-1.25 1.25-1.25h7.25v4.397c0 .414.336.75.75.75h3.25V19c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25V5Z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
          <div className="theme-switch min-[290px]:block md:hidden">
            <ThemeSwitchSm
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
