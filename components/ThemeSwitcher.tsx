"use client";

import { useTheme } from "next-themes";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <div className="theme-lg min-[290px]:hidden md:block">
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button variant="flat" color="primary" className="text-[#f5f5fa]">
              Theme
              <svg
                width={25}
                height={25}
                fill="#f5f5fa"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M4.323 10.646c-.419.604-.573 1.077-.573 1.354 0 .277.154.75.573 1.354.406.583 1.008 1.216 1.77 1.801C7.62 16.327 9.713 17.25 12 17.25s4.38-.923 5.907-2.095c.762-.585 1.364-1.218 1.77-1.801.419-.604.573-1.077.573-1.354 0-.277-.154-.75-.573-1.354-.406-.583-1.008-1.216-1.77-1.801C16.38 7.673 14.287 6.75 12 6.75s-4.38.923-5.907 2.095c-.762.585-1.364 1.218-1.77 1.801Zm.856-2.991C6.91 6.327 9.316 5.25 12 5.25s5.09 1.077 6.82 2.405c.867.665 1.583 1.407 2.089 2.136.492.709.841 1.486.841 2.209 0 .723-.35 1.5-.841 2.209-.506.729-1.222 1.47-2.088 2.136-1.73 1.328-4.137 2.405-6.821 2.405s-5.09-1.077-6.82-2.405c-.867-.665-1.583-1.407-2.089-2.136C2.6 13.5 2.25 12.723 2.25 12c0-.723.35-1.5.841-2.209.506-.729 1.222-1.47 2.088-2.136Z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem
              textValue="This is a menu item"
              key="light"
              onClick={() => setTheme("light")}
              className="dark:text-[#f5f5fa]"
            >
              <svg
                width={25}
                height={25}
                fill="#f5f5fa"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.08 2.734a.922.922 0 0 1 .096 1.03 8.65 8.65 0 0 0-1.054 4.152c0 4.825 3.934 8.732 8.782 8.732.632 0 1.248-.066 1.84-.192a.945.945 0 0 1 .971.38.88.88 0 0 1-.037 1.071 10.02 10.02 0 0 1-7.785 3.694C7.36 21.6 2.88 17.144 2.88 11.653c0-4.133 2.537-7.678 6.149-9.18a.903.903 0 0 1 1.05.261Zm-1.37 1.24a8.723 8.723 0 0 0-4.6 7.679c0 4.824 3.935 8.73 8.783 8.73a8.78 8.78 0 0 0 6.246-2.594c-.405.05-.816.076-1.235.076-5.532 0-10.012-4.457-10.012-9.948 0-1.4.29-2.734.817-3.943Z" />
              </svg>
              Dark Mode
            </DropdownItem>
            <DropdownItem
              textValue="This is a menu item"
              key="dark"
              onClick={() => setTheme("dark")}
              className="dark:text-[#f5f5fa]"
            >
              <svg
                width={25}
                height={25}
                fill="#f5f5fa"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2Zm0 1.2a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6Zm.6-11.4a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0Zm0 13.2a.6.6 0 1 1-1.199 0 .6.6 0 0 1 1.199 0Zm6-6a.6.6 0 1 1 0-1.199.6.6 0 0 1 0 1.199Zm-13.2 0a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm11.69-4.843a.602.602 0 0 1-1.031-.422.601.601 0 1 1 1.032.422Zm-9.334 9.335a.6.6 0 1 1-.864-.835.6.6 0 0 1 .864.834Zm8.486 0a.603.603 0 0 1-.007-.856.6.6 0 1 1 .007.855ZM6.908 7.756a.6.6 0 1 1 .834-.863.6.6 0 0 1-.834.863Z" />
              </svg>
              Light Mode
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
}
