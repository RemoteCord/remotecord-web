"use client";

import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <div>
      <div className="mt-30 mb-30 h-100 w-full flex place-self-center items-center justify-center">
        <h1 className="lg:text-7xl font-bold w-200 ml-[5%] md:text-2xl text-xl drop-shadow-lg ">
          Ditch TeamViewer & AnyDesk — Welcome to the <i>new way</i> to remote
          desktop.
        </h1>
        <Image src="/icons/newlogo.png" width={600} height={600} alt="hero" />
      </div>
    </div>
  );
};
