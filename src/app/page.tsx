import { Hero } from "@/components/Hero";
import { Card } from "@/components/Card";
import { CarouselComp } from "@/components/CarouselComp";
import { FAQ } from "@/components/FAQ";

import Image from "next/image";
import { Section } from "@/components/Section";
import { Import } from "lucide-react";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <main>
      <Hero />

      <hr className="my-30 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <Stats />
      <Section
        title="We fixed remote access"
        description="Seamless integration with your existing tools and workflows. No more command lines or complicated setups."
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
        description="Wave goodbye to exposing your home network to the internet. Access your devices and transfer files from anywhere in the world, conveniently inside Discord."
        images={[
          "/screenshots/bot-1.png",
          "/screenshots/bot-2.png",
          "/screenshots/bot-3.png",
          "/screenshots/bot-4.png",
        ]}
      />
      <hr className="my-12 mt-20 mb-20 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

      <FAQ />
    </main>
  );
}
