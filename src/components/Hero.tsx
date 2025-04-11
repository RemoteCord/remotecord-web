"use client";

import Image from "next/image";

import { Scene } from "./model/scene";
import { Suspense } from "react";
import { Model } from "./model/model";
import { Charm, Noto_Serif } from "next/font/google";
import useWindow from "@/hooks/useWindow";

const words = "Ditch TeamViewer & AnyDesk — Welcome to the".split(" ");
const words2 = "to remote desktop.".split(" ");
const font = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto",
  style: ["normal", "italic"], // Add italic style
});

import { motion } from "motion/react";
export const Hero: React.FC = () => {
  const { isDesktop } = useWindow();
  return (
    <div className="md:lg:pt-0 pt-45">
      <div className="relative  h-150 w-full grid md:lg:grid-cols-[1fr_600px] grid-cols-1 md:lg:px-0 px-2 items-center justify-start md:flex-row ">
        <h1 className="lg:text-7xl font-[700] w-full md:lg:ml-[5%] ml-0 drop-shadow-lg md:text-5xl text-4xl md:w-200 text-center md:text-left ">
          <motion.span className="">
            {words.map((word, index) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                }}
                key={index}
                className=""
              >
                {word} {index < words.length - 1 && <span> </span>}
              </motion.span>
            ))}
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 1 }}
            className={`${font.className} font-[400] italic`}
          >
            {!isDesktop && <br />}new way
          </motion.span>{" "}
          <motion.span className="">
            {words2.map((word, index) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1,
                }}
                key={index}
                className=""
              >
                {word} {index < words.length - 1 && <span> </span>}
              </motion.span>
            ))}
          </motion.span>
        </h1>
        {/* <Image
          className="w-[40%] sm:w-[40%] lg:w-[600px] aspect-square"
          src="/icons/newlogo.png"
          width={600}
          height={600}
          alt="hero"
        /> */}

        {/* <Lights /> */}

        <Model />
      </div>

      <div className="flex flex-col md:flex-row mx-15 md:mx-0 justify-center gap-4">
        <button
          type="button"
          className="py-5 px-18 text-base bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
        >
          Get Started
        </button>
        <button
          type="button"
          className="py-5 px-8 text-base bg-indigo-50 text-indigo-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-100"
        >
          Support
        </button>
      </div>
    </div>
  );
};
