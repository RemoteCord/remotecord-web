import Link from "next/link";
import * as React from "react";
import { WindowsLogo, DiscordLogo } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started",
};

export default function GetStarted() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Get Started</h1>
      <p className="mt-4 text-lg text-center">
        Follow{" "}
        <Link
          href={"https://docs.remotecord.app/docs/getting-started/installation"}
          target="_blank"
          className="border-b-neutral-300 border-b-2 "
        >
          the guide
        </Link>{" "}
        to get started with our application.
      </p>
      <div className="flex md:lg:flex-row flex-col gap-4 mt-8">
        <Link
          target="_blank"
          href={"/discord"}
          className="bg-white hover:bg-gray-300 transition-all duration-300 w-55 justify-center text-black flex  px-4 py-2 rounded-lg items-center gap-4"
        >
          <span>
            <DiscordLogo />
          </span>
          <span className="font-[600]">Control a client</span>
        </Link>
        <Link
          target="_blank"
          href={"https://download.remotecord.app/windows-x86_64"}
          className="bg-white hover:bg-gray-300 transition-all duration-300 text-black w-55 justify-center flex  px-4 py-2 rounded-lg items-center gap-4"
        >
          <span>
            <WindowsLogo />
          </span>
          <span className="font-[600]">Download</span>
        </Link>
      </div>
    </div>
  );
}
