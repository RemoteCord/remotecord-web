import Link from "next/link";
import * as React from "react";
import type { SVGProps } from "react";
export const WindowsLogo = () => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4.5H11.5848V12.0815H4V4.5ZM12.4152 4.5H20V12.0815H12.4152V4.5ZM4 12.9152H11.5848V20.5H4V12.9152ZM12.4152 12.9152H20V20.5H12.4152"
      fill="black"
    />
  </svg>
);

export const DiscordLogo = (props: SVGProps<SVGSVGElement>) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  <svg
    viewBox="0 0 256 199"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path
      d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
      fill="black"
    />
  </svg>
);

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
