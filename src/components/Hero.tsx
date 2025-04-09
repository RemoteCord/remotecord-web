"use client";

import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <div className="mt-40 mb-30">
      <div className="mt-10 mb-10 h-100 w-full flex flex-col place-self-center items-center justify-center md:flex-row">
        <h1 className="lg:text-7xl font-bold w-full ml-[5%] drop-shadow-lg md:text-5xl text-4xl md:w-200 text-center md:text-left">
          Ditch TeamViewer & AnyDesk — Welcome to the <i>new way</i> to remote
          desktop.
        </h1>
        <Image
          className="w-[40%] sm:w-[40%] lg:w-[600px] aspect-square"
          src="/icons/newlogo.png"
          width={600}
          height={600}
          alt="hero"
        />
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
