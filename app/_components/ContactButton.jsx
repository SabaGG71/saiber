"use client";
import { twMerge } from "tailwind-merge";
export default function ContactButton({ children, type, className }) {
  return (
    <button
      type={type}
      className={twMerge(
        `bg-accent-500 buttonHover hover:bg-[#4027df] text-sm transition duration-200 md:inline-flex items-center rounded-full py-2 px-4 font-medium`,
        className
      )}
    >
      {children}
    </button>
  );
}
