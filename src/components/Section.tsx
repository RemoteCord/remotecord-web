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
        <h2 className="mx-auto text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg md:w-[70%] w-fit">
          {title}
        </h2>
        <p className="mx-auto mb-7 text-gray-400 text-lg md:w-[80%] w-fit">
          {description}
        </p>
        <Image
          src={image}
          alt="App screenshot"
          width={width}
          height={height}
          className="aspect-auto mx-auto h-auto rounded-2xl drop-shadow-2xl border-2 border-[#00000011] transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};
