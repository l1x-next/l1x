"use client";

import Link from "next/link";

import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import { useTranslations } from "next-intl";

import { items, socialLinks } from "@/utils/footer";

import { TbArrowRight } from "react-icons/tb";

const Footer = () => {
  const t = useTranslations("Footer");

  const [hovered, setHover] = useState<string>("");

  return (
    <footer className="flex flex-col gap-10 px-10 py-20 mt-20 bg-linear-to-tl from-orange-100 via-transparent">
      <div className="w-full flex items-center justify-center gap-4 text-center text-nowrap text-lg md:text-2xl font-semibold">
        {items(t as (key: string) => string).map((item, i) => (
          <Link key={i} href={item.link}>
            {/* link container */}
            <div className="group h-[40px] p-2 overflow-hidden">
              {/* labels container */}
              <div className="flex flex-col items-center justify-center group-hover:-translate-y-10 transition duration-700 text-zinc-700">
                <span>{item.name}</span>
                <span>{item.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6" dir="ltr">
        {socialLinks.map((item, i) => (
          <Link
            key={i}
            href={item.link || "#"}
            className="flex bg-gradient-to-br from-zinc-600 hover:from-zinc-100 to-50% to-zinc-700 p-px rounded-xl overflow-hidden"
            onMouseEnter={() => setHover(item.name)}
            onMouseLeave={() => setHover("")}
          >
            <div className="w-full flex justify-center items-center text-white bg-gradient-to-br from-neutral-900/60 from-35% to-white/5 py-1.5 px-2 md:py-2 md:px-3 rounded-[11px]">
              <AnimatePresence initial={false}>
                {hovered !== item.name && (
                  <motion.div
                    key={i}
                    initial={{ x: -80, width: 0 }}
                    animate={{ x: 0, width: 20 }}
                    exit={{ x: -80, width: 0 }}
                    transition={{ duration: 0.4 }}
                    className="h-5 flex items-center"
                  >
                    <item.icon />
                  </motion.div>
                )}
              </AnimatePresence>
              <p className="text-xs md:text-base font-medium capitalize px-2">
                {item.name}
              </p>
              <AnimatePresence>
                {hovered === item.name && (
                  <motion.div
                    key="circle-arrow"
                    initial={{ x: 80, width: 0 }}
                    animate={{ x: 0, width: 20 }}
                    exit={{ x: 80, width: 0 }}
                    transition={{ duration: 0.4 }}
                    className="h-5 flex items-center"
                  >
                    <TbArrowRight />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
