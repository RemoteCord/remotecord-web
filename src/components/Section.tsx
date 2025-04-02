"use client";

import Image from "next/image";

export const Section: React.FC<{
  title: string;
  description: string;
  id?: string;
  image: string;

  width?: number;
  height?: number;
}> = ({ title, description, id, image, width = 1100, height = 1100 }) => {
  return (
    <div>
      <div
        id={id}
        className="place-self-center md:lg:w-fit w-[80%] text-center mt-20"
      >
        <h2 className="text-5xl font-bold mb-2 drop-shadow-lg">{title}</h2>
        <p className="mb-4 text-gray-400">{description}</p>
        <Image
          src={image}
          alt="App screenshot"
          width={width}
          height={height}
          className="aspect-auto h-auto rounded-2xl drop-shadow-2xl border-2 border-[#00000011] transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};
