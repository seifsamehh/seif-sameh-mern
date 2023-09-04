import "./globals.css";
import { Parallax } from "./Parallax";
import { Providers } from "./providers";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Phudu } from "next/font/google";

const phudu = Phudu({
  weight: ["400", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seif Eldin Sameh | MERN Stack Developer",
  description:
    "A creative MERN Stack Developer creating beautiful and functional websites with delightful user experiences.",
  generator: "Next.js",
  applicationName: "Seif Eldin Sameh",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "portfoilo",
    "MERN Stack",
    "Web Developer",
    "frontend",
    "backend",
    "node.js",
    "express.js",
    "html",
    "css",
  ],
  authors: [{ name: "Seif", url: "https://seif-eldin-sameh.vercel.app/" }],
  colorScheme: "dark",
  creator: "Seif Eldin Sameh",
  publisher: "Vercel",
  formatDetection: {
    email: true,
    address: true,
    telephone: false,
  },
  metadataBase: new URL("https://seif-eldin-sameh.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ar-EG": "/ar-EG",
    },
  },
  openGraph: {
    title: "Seif Eldin Sameh | MERN Stack Developer",
    description:
      "A creative MERN Stack Developer creating beautiful and functional websites with delightful user experiences.",
    url: "https://seif-eldin-sameh.vercel.app/",
    siteName: "Seif Eldin Sameh | MERN Stack Developer",
    images: [
      {
        url: "/assets/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "logo",
      },
      {
        url: "/assets/icon-384x384.png",
        width: 384,
        height: 384,
        alt: "logo",
      },
      {
        url: "/assets/icon-192x192.png",
        width: 192,
        height: 192,
        alt: "logo",
      },
      {
        url: "/assets/icon-152x152.png",
        width: 152,
        height: 152,
        alt: "logo",
      },
      {
        url: "/assets/icon-144x144.png",
        width: 144,
        height: 144,
        alt: "logo",
      },
      {
        url: "/assets/icon-128x128.png",
        width: 128,
        height: 128,
        alt: "logo",
      },
      {
        url: "/assets/icon-96x96.png",
        width: 96,
        height: 96,
        alt: "logo",
      },
      {
        url: "/assets/icon-72x72.png",
        width: 72,
        height: 72,
        alt: "logo",
      },
      {
        url: "/assets/icon-48x48.png",
        width: 48,
        height: 48,
        alt: "logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/icon-512x512.png",
    apple: "/assets/apple-touch-icon.png",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${phudu.className} dark bg-[#0f172a] text-[#f5f5fa] dark:bg-[#f5f5fa] dark:text-[#0f172a]`}
      >
        <Providers>
          <Parallax>{children}</Parallax>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
