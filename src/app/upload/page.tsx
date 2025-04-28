import { DropZone } from "@/components/uploader/DropZone";
import { Suspense } from "react";
export default function Upload() {
  return (
    <div className="pt-24 h-screen">
      <div className="md:lg:w-[40%] w-full mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <DropZone />
        </Suspense>
      </div>
    </div>
  );
}
