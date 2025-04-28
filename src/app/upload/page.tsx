import { DropZone } from "@/components/uploader/DropZone";
export default async function Upload() {
  return (
    <div className="pt-24 h-screen">
      <div className="md:lg:w-[40%] w-full mx-auto">
        <DropZone />
      </div>
    </div>
  );
}
