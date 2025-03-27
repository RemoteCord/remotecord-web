"use client";

import Image from "next/image";

export const Section: React.FC<{
  title: string;
  description: string;
  id?: string;
}> = ({ title, description, id }) => {
  return (
    <div>
      <div id={id} className="place-self-center w-fit text-center">
        <h2 className="text-4xl font-bold mb-2 drop-shadow-lg">{title}</h2>
        <p className="mb-4">{description}</p>
        <Image
          src="/screenshots/app.png"
          alt="App screenshot"
          width={1100}
          height={1100}
          className="aspect-auto h-auto rounded-2xl drop-shadow-2xl border-2 border-[#00000011]"
        />
      </div>
    </div>
  );
};
