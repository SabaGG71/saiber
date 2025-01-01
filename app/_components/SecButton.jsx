"use client";
import { twMerge } from "tailwind-merge";
export default function SecButton({ children, type, className }) {
  return (
    <button
      type={type}
      className={twMerge(
        `bg-primary-800 hover:bg-primary-900 sec text-sm transition duration-200 md:inline-flex items-center rounded-full py-2 px-4 font-medium`,
        className
      )}
    >
      {children}
    </button>
  );
}
