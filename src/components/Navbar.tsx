"use client";
import { Icon, Scroll } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import { ConfigMenu } from "../config/ConfigMenu";
// import { TitleBar } from "./TitleBar";
import {
  IconHelpHexagonFilled,
  IconHomeFilled,
  IconBrandGithubFilled,
  IconBrandDiscordFilled,
  IconFileDownloadFilled,
} from "@tabler/icons-react";
import useWindow from "@/hooks/useWindow";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Home",
    url: "/",
    icon: IconHomeFilled,
    mobile: true,
  },
  {
    title: "FAQ",
    url: "/#faq",
    icon: IconHelpHexagonFilled,
    mobile: true,
  },
  {
    title: "Download",
    url: "/get-started",
    icon: IconFileDownloadFilled,
    mobile: true,
  },
  // {
  //   title: "Get Started",
  //   url: "#get-started",
  //   icon: IconBoltFilled,
  // },
  {
    title: "GitHub",
    url: "https://github.com/RemoteCord",
    icon: IconBrandGithubFilled,
    mobile: false,
  },
  {
    title: "Discord",
    url: process.env.NEXT_PUBLIC_DISCORD_INVITE_URL as string,
    icon: IconBrandDiscordFilled,
    mobile: true,
  },
];

export const NavBar: React.FC = () => {
  const { isDesktop } = useWindow();
  return (
    <div className=" h-20 fixed z-50  py-2 w-full px-2" data-tauri-drag-region>
      <div className="flex md:lg:gap-8 gap-4 justify-center items-center bg-[#1e1f22]/50 md:lg:w-fit w-full md:lg:px-2 px-0 mx-auto py-1 rounded-lg backdrop-blur-[1px]">
        {/* <Image src={"/icon.png"} width={30} height={30} alt="icon" /> */}
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.url}
            target={item.url.startsWith("http") ? "_blank" : ""}
            className={cn(
              "flex gap-2 hover:bg-zinc-900 transition-all duration-300 py-1 h-fit rounded-lg items-center justify-end md:lg:text-base text-xs",
              !isDesktop && !item.mobile ? "hidden" : "flex"
            )}
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
