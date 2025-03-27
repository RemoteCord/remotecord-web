"use client";

import Image from "next/image";

import {
  IconHelpHexagonFilled,
  IconArticleFilled,
  IconBrandGithubFilled,
} from "@tabler/icons-react";

export const Card: React.FC<{
  title: string;
  body: string;
  icon: "help" | "article" | "github";
}> = ({ title, body, icon }) => {
  return (
    <div>
      <div
        id="why"
        className="bg-[#1213148a] self-center p-4 rounded-lg place-self-center w-[50%]"
      >
        <h2 className="text-3xl font-bold mb-2 w-fit flex items-center gap-1.5 drop-shadow-lg">
          {icon === "help" && <IconHelpHexagonFilled />}
          {icon === "article" && <IconArticleFilled />}
          {icon === "github" && <IconBrandGithubFilled />}
          {title}
        </h2>

        <p>{body}</p>
      </div>
    </div>
  );
};
