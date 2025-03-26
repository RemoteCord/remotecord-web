"use client";

import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <div>
      <div className="h-150 w-full flex place-self-center items-center">
        <h1 className="lg:text-5xl font-bold w-200 ml-[13%] md:text-2xl text-xl drop-shadow-lg ">
          Ditch TeamViewer & AnyDesk — RemoteCord is the <i>new way</i> to
          remote desktop.
        </h1>
        <Image src="/icons/newlogo.png" width={600} height={600} alt="hero" />
      </div>
    </div>
  );
};
