import { Hero } from "@/components/Hero";
import { Card } from "@/components/Card";
import { CarouselComp } from "@/components/CarouselComp";
import { FAQ } from "@/components/FAQ";

import Image from "next/image";
import { Section } from "@/components/Section";
import { Import } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Hero />

      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <Section
        title="We fixed remote access"
        description="Seamless integration with your existing tools and workflows. No more FTP, no more RDP, no more SSH."
        image="/screenshots/app.webp"
      ></Section>
      {/* <Section
        title="Secure, convenient & fast"
        description="Access your devices and transfer files from anywhere in the world, conveniently inside Discord."
        image="/screenshots/bot-2.png"
        height={800}
        width={800}
      ></Section> */}
      <CarouselComp
        title="Secure, convenient & fast"
        description="Access your devices and transfer files from anywhere in the world, conveniently inside Discord."
        images={[
          "/screenshots/bot-1.png",
          "/screenshots/bot-2.webp",
          "/screenshots/bot-3.png",
          "/screenshots/bot-4.webp",
        ]}
      />
      <hr className="my-12 mt-20 mb-20 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

      <Card
        title="How does it work?"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        icon="help"
      />

      <FAQ />
    </main>
  );
}
