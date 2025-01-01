"use client";
import { cn } from "../../utils/cn";
import React, { useState, useEffect } from "react";

export const Meteors = ({ number = 20, className }) => {
  const [meteorData, setMeteorData] = useState([]);

  // Generate random values for meteors after the component mounts (client-side)
  useEffect(() => {
    const distanceBetweenMeteors = 5; // Adjust this value for spacing between meteors
    const generatedMeteors = new Array(number).fill(true).map((_, idx) => ({
      left: Math.floor(Math.random() * (400 - -400) + -400), // Random horizontal position
      top: idx * distanceBetweenMeteors + Math.random() * 20, // Spread along Y-axis with added randomness
      animationDelay: Math.random() * (2.5 - 0.2) + 0.6 + "s",
      animationDuration: Math.floor(Math.random() * (24 - 2) + 2) + "s",
    }));
    setMeteorData(generatedMeteors);
  }, [number]);

  return (
    <>
      {meteorData.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute left-1/2 h-1 w-0.5 rounded-[9999px] bg-accent-600 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[120px] before:h-[2px] before:bg-gradient-to-r before:from-[#ffffff25] before:to-transparent",
            className
          )}
          style={{
            left: `${el.left}px`,
            top: `${el.top}%`, // Adjusted Y-axis positioning
            animationDelay: el.animationDelay,
            animationDuration: el.animationDuration,
            animationIterationCount: "infinite", // Allow it to repeat indefinitely
          }}
        ></span>
      ))}
    </>
  );
};
