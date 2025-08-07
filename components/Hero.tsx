"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import ChangeLang from "./ChangeLang";

import { images } from "@/utils/hero";

const Hero = () => {
  const t = useTranslations("Hero");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [cursorPosition, setCursorPosition] = useState({ x: 0 });
  const [gradientOpacity, setGradientOpacity] = useState({ left: 1, right: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;

    setCursorPosition({ x });

    // Calculate gradient opacity based on cursor position
    const leftOpacity = Math.max(0, Math.min(1, 1 - x / (rect.width / 2)));
    const rightOpacity = Math.max(
      0,
      Math.min(1, (x - rect.width / 2) / (rect.width / 2))
    );

    setGradientOpacity({ left: leftOpacity, right: rightOpacity });
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setCursorPosition({ x: 0 });
      setGradientOpacity({ left: 1, right: 0 });

      // Clear the timeout after it executes
      clearTimeout(timeoutId);
    }, 2000);
  };

  return (
    <section
      id="hero"
      className="lg:min-h-screen bg-linear-to-t from-orange-100 via-transparent "
    >
      <ChangeLang className="m-4 md:m-8 min-w-13" />

      <div className="flex flex-col justify-center items-center max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40">
        <svg
          viewBox="0 0 100 100"
          version="1.1"
          width="480"
          height="480"
          xmlns="http://www.w3.org/2000/svg"
          className="size-40 lg:size-120"
        >
          <clipPath id="shapeMask">
            <path
              d="M 0.005522,87.928655 V 12.154177 h 15.169253 v 62.896898 h 15.611022 v 12.87758 H 0 Z"
              id="path1"
            />
            <path
              d="M 59.6002,87.928655 70.63891,47.70556 61.2734,12.071345 h 14.82136 l 3.9704,18.797283 3.44028,-18.797283 H 98.41515 L 88.96129,47.70556 100,87.928655 H 84.64852 l -4.76559,-22.32592 -4.85394,22.32592 H 59.59468 Z"
              id="path2"
            />
            <path
              d="M 52.72516,12.154177 V 87.928655 H 37.555911 V 25.031751 c 0,0 -15.611022,0 -15.611022,0 V 12.154177 H 52.73069 Z"
              id="path3"
            />
          </clipPath>
          {images.length > 0 && (
            <image
              href={images[currentImageIndex]}
              width={100}
              height={100}
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#shapeMask)"
            />
          )}
        </svg>
        <h1 className="text-2xl lg:text-5xl text-zinc-500">CREATIVE AGENCY</h1>

        <Link href="/#services" className="w-full max-w-xs mt-20 px-14 md:px-4">
          <button
            className="relative rounded-full flex items-center w-full text-zinc-700 cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Left gradient */}
            <div
              style={{ opacity: gradientOpacity.left }}
              className="absolute -left-2 h-[125%] w-1/2 bg-gradient-to-r from-orange-600 to-transparent blur-sm rounded-full pointer-events-none duration-100"
            />
            <div
              style={{ opacity: gradientOpacity.left }}
              className="absolute -left-2 h-[125%] w-2/5 bg-gradient-to-r from-orange-600 to-transparent blur-sm rounded-full pointer-events-none duration-100"
            />

            {/* Right gradient */}
            <div
              style={{ opacity: gradientOpacity.right }}
              className="absolute -right-2 h-[125%] w-1/2 bg-gradient-to-r from-transparent to-orange-600 blur-sm rounded-full pointer-events-none duration-100"
            />
            <div
              style={{ opacity: gradientOpacity.right }}
              className="absolute -right-2 h-[125%] w-2/5 bg-gradient-to-r from-transparent to-orange-600 blur-sm rounded-full pointer-events-none duration-100"
            />

            <div className="relative flex justify-center items-center border border-white/60 bg-[#d1d1d1] w-full py-2 md:py-2.5 rounded-full overflow-hidden">
              <motion.div
                animate={{
                  left: `${cursorPosition.x - 102}px`,
                }}
                transition={{ duration: 0.15 }}
                className="absolute flex w-[204px] h-[103px] items-center justify-center pointer-events-none"
              >
                <div className="absolute h-full w-full bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#FFFFF7_29%,_#FFFACD_48.5%,_#F4D2BF_60.71%,rgba(214,211,210,0.00)_100%)] blur-[5px]" />
              </motion.div>
              <span className="font-medium z-10">{t("button")}</span>
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
