import { Hero } from "@/components/Hero";
import { Card } from "@/components/Card";
import { CarouselComp } from "@/components/CarouselComp";
import { FAQ } from "@/components/FAQ";

import Image from "next/image";
import { Section } from "@/components/Section";
import { Import } from "lucide-react";
import { Stats } from "@/components/Stats";
import { GridBackground } from "@/components/GridBg";

export default function Home() {
  return (
    <main>
      <GridBackground>
        <Hero />
      </GridBackground>

      <hr className="my-30 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <Stats />
      <Section
        title="We fixed remote access"
        description="Accessing your devices & transfering files has never been simpler. Securely and conveniently, from anywhere in the world."
        image="/screenshots/app.webp"
      ></Section>

      <Section
        title="Built from the ground up with your security in mind"
        description="Never expose your home network to the internet again. Enjoy a blazingly fast & secure experience."
        image="/screenshots/app.webp"
      ></Section>

      <CarouselComp
        title="A feature-set that needs no compromises"
        description="When using RemoteCord, you don't compromise on anything. Run commands, transfer files, take screenshots & more, all inside Discord."
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
