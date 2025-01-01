"use client";
import { twMerge } from "tailwind-merge";
export default function DropDownButton({ children, type, onClick, className }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={twMerge(
        `bg-accent-500 hover:bg-accent-600 sec text-sm transition duration-200 flex items-center rounded-full py-3 px-3 font-medium`,
        className
      )}
    >
      {children}
    </button>
  );
}
