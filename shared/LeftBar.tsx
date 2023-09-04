"use client";

import Link from "next/link";
import { Tooltip } from "@nextui-org/react";

const LeftBar = () => {
  return (
    <section className="left-bar">
      <nav className="flex flex-col items-center gap-4">
        <div className="line"></div>
        <Tooltip placement="right" color="primary" content="GitHub">
          {/* github */}
          <Link href="https://github.com/seifsamehh" target="_blank">
            <svg
              width={35}
              height={35}
              fill="#f5f5fa"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.246c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.475 0-.238-.013-1.025-.013-1.863C7 19.86 6.35 18.784 6.15 18.221c-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.012 1.35.725 1.538 1.025.9 1.513 2.338 1.088 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.087.387-1.987 1.025-2.687-.1-.25-.45-1.275.1-2.65 0 0 .837-.263 2.75 1.025a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.113 2.5.338 1.912-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.575.688.475A10.015 10.015 0 0 0 22 12.246c0-5.525-4.475-10-10-10Z" />
            </svg>
          </Link>
        </Tooltip>
        <Tooltip placement="right" color="primary" content="LinkedIn">
          {/* linkedIn */}
          <Link
            href="https://www.linkedin.com/in/seif-eldin-sameh-81b8661b7/"
            target="_blank"
          >
            <svg
              width={35}
              height={35}
              fill="#f5f5fa"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 3.433C2 2.64 2.658 2 3.469 2H20.53c.813 0 1.47.641 1.47 1.433v17.134C22 21.36 21.343 22 20.531 22H3.47C2.658 22 2 21.359 2 20.567V3.433Zm6.179 15.31V9.71H5.177v9.031H8.18Zm-1.5-10.265c1.046 0 1.697-.693 1.697-1.56-.018-.887-.65-1.56-1.677-1.56C5.67 5.357 5 6.032 5 6.918c0 .867.651 1.56 1.659 1.56h.02Zm6.135 10.264V13.7c0-.27.02-.54.1-.733.216-.538.71-1.097 1.54-1.097 1.086 0 1.52.827 1.52 2.042v4.832h3.001v-5.18c0-2.776-1.48-4.066-3.455-4.066-1.592 0-2.306.876-2.706 1.492v.031h-.02l.02-.031V9.71h-3c.037.848 0 9.031 0 9.031h3Z" />
            </svg>
          </Link>
        </Tooltip>
        <Tooltip placement="right" color="primary" content="Whatsapp">
          {/* whatsapp */}
          <Link href="https://wa.me/+201060865699" target="_blank">
            <svg
              width={35}
              height={35}
              fill="#f5f5fa"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z" />
            </svg>
          </Link>
        </Tooltip>
        <Tooltip placement="right" color="primary" content="Instagram">
          {/* Instagram */}
          <Link
            href="https://instagram.com/seiffsameh?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
            target="_blank"
          >
            <svg
              width={35}
              height={35}
              fill="#f5f5fa"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
              <path
                fillRule="evenodd"
                d="M12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM8.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M17.258 2.833a47.721 47.721 0 0 0-10.516 0c-2.012.225-3.637 1.81-3.873 3.832a45.922 45.922 0 0 0 0 10.67c.236 2.022 1.86 3.607 3.873 3.832a47.77 47.77 0 0 0 10.516 0c2.012-.225 3.637-1.81 3.873-3.832a45.914 45.914 0 0 0 0-10.67c-.236-2.022-1.86-3.607-3.873-3.832Zm-10.35 1.49a46.22 46.22 0 0 1 10.184 0c1.33.15 2.395 1.199 2.55 2.517a44.421 44.421 0 0 1 0 10.32 2.89 2.89 0 0 1-2.55 2.516 46.217 46.217 0 0 1-10.184 0 2.89 2.89 0 0 1-2.55-2.516 44.421 44.421 0 0 1 0-10.32 2.89 2.89 0 0 1 2.55-2.516Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </Tooltip>
        <Tooltip placement="right" color="primary" content="Facebook">
          {/* Facebook */}
          <Link
            href="https://instagram.com/seiffsameh?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
            target="_blank"
          >
            <svg
              width={35}
              height={35}
              fill="#f5f5fa"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.488 3.788A5.25 5.25 0 0 1 14.2 2.25h2.7a.75.75 0 0 1 .75.75v3.6a.75.75 0 0 1-.75.75h-2.7a.15.15 0 0 0-.15.15v1.95h2.85a.75.75 0 0 1 .728.932l-.9 3.6a.75.75 0 0 1-.728.568h-1.95V21a.75.75 0 0 1-.75.75H9.7a.75.75 0 0 1-.75-.75v-6.45H7a.75.75 0 0 1-.75-.75v-3.6A.75.75 0 0 1 7 9.45h1.95V7.5a5.25 5.25 0 0 1 1.538-3.712ZM14.2 3.75a3.75 3.75 0 0 0-3.75 3.75v2.7a.75.75 0 0 1-.75.75H7.75v2.1H9.7a.75.75 0 0 1 .75.75v6.45h2.1V13.8a.75.75 0 0 1 .75-.75h2.114l.525-2.1H13.3a.75.75 0 0 1-.75-.75V7.5a1.65 1.65 0 0 1 1.65-1.65h1.95v-2.1H14.2Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </Tooltip>
        <Tooltip placement="right" color="primary" content="Gmail">
          {/* gmail */}
          <Link href="mailto:seiffsameh00@gmail.com" target="_blank">
            <svg
              width={35}
              height={35}
              fill="#f5f5fa"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.4 7.2a2.4 2.4 0 0 1 2.4-2.4h14.4a2.4 2.4 0 0 1 2.4 2.4v9.6a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V7.2ZM4.8 6a1.2 1.2 0 0 0-1.2 1.2v.26L12 12.5l8.4-5.04V7.2A1.2 1.2 0 0 0 19.2 6H4.8Zm15.6 2.86-5.65 3.39 5.65 3.476V8.859Zm-.04 8.25-6.768-4.165L12 13.9l-1.59-.954-6.77 4.164A1.2 1.2 0 0 0 4.8 18h14.4a1.2 1.2 0 0 0 1.159-.888ZM3.6 15.727l5.65-3.477L3.6 8.86v6.867Z" />
            </svg>
          </Link>
        </Tooltip>
      </nav>
    </section>
  );
};

export default LeftBar;