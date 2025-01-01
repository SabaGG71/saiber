"use client";
import React from "react";
import { Meteors } from "../_components/Meteors";

export function MeteorsDemo() {
  return (
    <div className="">
      <div className="w-full hidden lg:block relative max-w-xs">
        <Meteors number={9} />
      </div>
    </div>
  );
}
