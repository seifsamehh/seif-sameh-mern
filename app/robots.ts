import { MetadataRoute } from "next";

interface CustomRule {
  userAgent: string;
  allow: string | string[];
  noindex?: boolean;
  "max-video-preview"?: number;
  "max-image-preview"?: string;
  "max-snippet"?: number;
}

export default function robots(): MetadataRoute.Robots {
  const rules: CustomRule[] = [
    {
      userAgent: "*",
      allow: "/",
    },
    {
      userAgent: "Googlebot",
      allow: "/",
      noindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  ];

  return {
    rules,
    sitemap: "https://seif-eldin-sameh.vercel.app/sitemap.xml",
  };
}
