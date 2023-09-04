"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CircularProgress } from "@nextui-org/react";

const loading = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 250);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      className="loading-page min-h-screen flex justify-center items-center flex-col gap-4 relative z-20 bg-[#0f172a] overflow-hidden"
      id="loading"
    >
      <Image
        src="/assets/miniLogo-white.svg"
        alt="logo"
        width={100}
        height={100}
        priority={true}
      />
      <CircularProgress
        aria-label="Loading..."
        size="lg"
        value={value}
        color="primary"
        showValueLabel={true}
      />
    </section>
  );
};

export default loading;
