import { Hero } from "@/components/Hero";
import { Card } from "@/components/Card";

import Image from "next/image";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <main>
      <Hero />

      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 mb-20" />

      <Section
        title="We fixed remote access"
        description="With a seamless"
      ></Section>
      {/* <Card
        title="Why"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        icon="help"
      /> */}
    </main>
  );
}
