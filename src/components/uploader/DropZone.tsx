"use client";
import { cn } from "@/lib/utils";
import { IconCheck, IconFileUpload, IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import type React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "motion/react";
import { useSearchParams } from "next/navigation";
const baseStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "200px",
  borderWidth: 2,
  borderRadius: 8,
  borderColor: "transparent",
  color: "#bdbdbd",
  outline: "none",
  transitionDuration: "0.24s",
  margin: "0 auto",
};

const focusedStyle = { borderColor: "#2196F3" };
const acceptStyle = { borderColor: "#00e676" };
const rejectStyle = { borderColor: "#ff1744" };

const isImageMimeType = /^image\/(jpeg|png|gif|bmp|webp|svg\+xml|x-icon)$/i;

type FileWithPreview = File & { preview: string };

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box" as const,
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "150px",
  height: "auto",
};

export const DropZone: React.FC = () => {
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const formRef = useRef<HTMLFormElement>(null);
  const [file, setFile] = useState<FileWithPreview | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [willPreview, setWillPreview] = useState(false);
  const {
    getRootProps,
    getInputProps,
    open,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    multiple: false,
    onDragLeave: () => {
      console.log("Drag leave");
    },
    onDrop: (incomingFiles) => {
      if (incomingFiles.length > 0) {
        const f = incomingFiles[0];
        setFile(Object.assign(f, { preview: URL.createObjectURL(f) }));
      }
    },
  });

  useEffect(() => {
    return () => {
      if (file) URL.revokeObjectURL(file.preview);
    };
  }, [file]);

  const handleSubmitFile = useCallback(async () => {
    if (!file) return;
    console.log("Submitting file:", file);

    const buff = await file.arrayBuffer();
    console.log("Buffer:", buff);

    const formData = new FormData();
    formData.append(
      "file",
      new File([file], file.name, { type: "application/octet-stream" })
    );
    formData.append("fileName", file.name);

    const api_url = `${process.env.NEXT_PUBLIC_CDN_URL}/api/upload-large/${code}`;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", api_url);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(percent);
        console.log(`Upload progress: ${percent}%`);
      }
    };

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        console.log("File uploaded successfully:", data);
        setSuccess(true);
      } else {
        console.error("Error uploading file:", xhr.statusText);
      }
    };

    xhr.onerror = () => {
      console.error("Error uploading file:", xhr.statusText);
    };

    xhr.send(formData);
    // Add your submit logic here
  }, [file, code]);

  const handleClearFiles = useCallback(() => {
    formRef.current?.reset();
    setFile(null);
    setWillPreview(false);
  }, []);

  const style = useMemo(() => {
    // Calculate gradient stop based on uploadProgress (0-100)
    const progress = Math.max(0, Math.min(uploadProgress, 100));
    const gradient = `linear-gradient(90deg, #18181b ${progress}%, #27272a ${progress}%)`;

    return {
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
      background: gradient,
    };
  }, [isFocused, isDragAccept, isDragReject, uploadProgress]);

  useEffect(() => {
    console.log("File changed:", file);

    if (!file) return;
    const isImage = isImageMimeType.test(file.type);

    if (isImage) {
      setWillPreview(true);
    } else {
      setWillPreview(false);
    }
  }, [file]);

  if (!code) {
    return (
      <div className="px-8 h-96 flex items-center justify-center">
        <p className="text-red-500">You're not allowed.</p>
      </div>
    );
  }

  return (
    <div className="px-8 group hover:cursor-pointer">
      <div
        {...getRootProps({
          style,
        })}
        className="upload-area"
        onClick={open}
      >
        <input
          name="my-file"
          ref={hiddenInputRef}
          onChange={(e) => console.log(e)}
          {...getInputProps()}
        />
        <div className="flex gap-4 items-center transition-all duration-200">
          <p>
            {uploadProgress <= 0 ? (
              <IconFileUpload
                className="group-hover:scale-110 transition-all duration-300"
                size={96}
              />
            ) : success ? (
              <IconCheck
                className="group-hover:scale-110 transition-all duration-300"
                size={96}
              />
            ) : (
              <motion.span className="text-4xl font-[500]">
                {uploadProgress}%
              </motion.span>
            )}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-2 gap-2">
        <button
          className="bg-zinc-900 px-4 py-2 rounded-lg disabled:opacity-50"
          type="button"
          disabled={!file || uploadProgress > 0}
          onClick={() => handleSubmitFile()}
        >
          Submit
        </button>

        <button
          type="button"
          className="bg-red-900 px-2 py-2 rounded-lg disabled:opacity-50"
          disabled={!file || uploadProgress > 0}
          onClick={handleClearFiles}
        >
          <IconTrash />
        </button>
      </div>
    </div>
  );
};
