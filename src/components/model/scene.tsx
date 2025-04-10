import dynamic from "next/dynamic";

export const Scene = dynamic(() => import("./model").then((mod) => mod.Model), {
  ssr: false,
});
