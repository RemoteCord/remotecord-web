"use client";
import { Icon, Scroll } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import { ConfigMenu } from "../config/ConfigMenu";
// import { TitleBar } from "./TitleBar";
import {
  IconHelpHexagonFilled,
  IconArticleFilled,
  IconBrandGithubFilled,
} from "@tabler/icons-react";

const items = [
  {
    title: "Why",
    url: "#why",
    icon: IconHelpHexagonFilled,
  },
  {
    title: "How",
    url: "#how",
    icon: IconArticleFilled,
  },
  {
    title: "GitHub",
    url: "https://github.com/RemoteCord",
    icon: IconBrandGithubFilled,
  },
];

export const NavBar: React.FC = () => {
  return (
    <div className=" h-fit py-2 w-full px-2" data-tauri-drag-region>
      <div className="flex gap-2 justify-center items-center">
        {/* <Image src={"/icon.png"} width={30} height={30} alt="icon" /> */}
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.url}
            target={item.url.startsWith("http") ? "_blank" : ""}
            className="flex gap-2 hover:bg-zinc-900 transition-all duration-300 p-3 h-[50px] rounded-lg items-center justify-end aspect-square"
          >
            <item.icon size={20} />
            {item.title}
          </Link>
        ))}
        {/* <ConfigMenu /> */}
      </div>
      <div className="flex gap-4 items-center">
        {/* <TitleBar /> */}
        {/* <Image
          src={session?.user.user_metadata.picture}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        /> */}
      </div>
    </div>
  );
};
