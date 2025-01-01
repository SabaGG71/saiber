"use client";

import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[10rem] cursor-pointer mt-[-16px] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed={500}
        gap={30}
      />
    </div>
  );
}
const testimonials = [
  {
    title: "💡 Creative",
  },
  {
    title: "🪄 Detail-oriented",
  },
  {
    title: "🤩 Passionate",
  },
  {
    title: "👽 Innovative",
  },
  {
    title: "🤠 Communicative",
  },
  {
    title: "✨ Goal-oriented",
  },
];
