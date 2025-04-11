"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
export const Details: React.FC<{
  title: string;
  description: string;
}> = ({ title, description, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [openHeight, setOpenHeight] = useState(0);

  useEffect(() => {
    if (isOpen && descriptionRef.current) {
      const height = descriptionRef.current.scrollHeight;
      setOpenHeight(height + 40); // Add some padding
    }
  }, [isOpen, description]);

  return (
    <div {...props} className="">
      <motion.details
        initial={{ height: 0 }}
        animate={isOpen ? { height: openHeight } : { height: 45 }}
        transition={{ duration: 0.5 }}
        className="group overflow-hidden"
      >
        <summary
          onClick={() => setIsOpen(!isOpen)}
          className="flex cursor-pointer list-none items-center justify-between font-medium border-b pb-2 border-neutral-700 "
        >
          <span className="select-none">{title}</span>
          <span
            className={`transition-all duration-500 ${
              !isOpen && "group-hover:rotate-90"
            } group-open:rotate-180`}
          >
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>

        <p
          ref={descriptionRef}
          className="pt-3 text-neutral-400 whitespace-pre-line"
        >
          {description}
        </p>
      </motion.details>
    </div>
  );
};
