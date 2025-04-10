import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-[#1e1f22]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          // "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "[background-image:linear-gradient(to_right,#2e2e2e_1px,transparent_1px),linear-gradient(to_bottom,#2e2e2e_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] bg-[#1e1f22]"></div>
      <div className="relative z-20 bg-gradient-to-b from-neutral-50 to-neutral-100 bg-clip-text py-8 text-4xl font-bold sm:text-7xl">
        {children}
      </div>
    </div>
  );
}
