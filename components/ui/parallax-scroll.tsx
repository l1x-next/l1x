"use client";

import Image from "next/image";

import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("relative w-full overflow-hidden py-2", className)}
      ref={containerRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 pb-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              {el && (
                <Image
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height={400}
                  width={400}
                  alt="Image"
                />
              )}
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              {el && (
                <Image
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height={400}
                  width={400}
                  alt="Image"
                />
              )}
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              {el && (
                <Image
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height={400}
                  width={400}
                  alt="Image"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
