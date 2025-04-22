import Link from "next/link";
import * as React from "react";
import { WindowsLogo, DiscordLogo } from "@/components/Icons";

export default function GetStarted() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Get Started</h1>
      <p className="mt-4 text-lg text-center">
        Follow the instructions to get started with our application.
      </p>
      <div className="flex md:lg:flex-row flex-col gap-4 mt-8">
        <Link
          href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL as string}
          className="bg-white hover:bg-gray-300 transition-all duration-300 w-55 justify-center text-black flex  px-4 py-2 rounded-lg items-center gap-4"
        >
          <span>
            <DiscordLogo />
          </span>
          <span className="font-[600]">Control a client</span>
        </Link>
        <Link
          href={""}
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
