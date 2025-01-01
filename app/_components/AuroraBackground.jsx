"use client";
import React from "react";
import { cn } from "../../utils/cn";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <main className="rounded-[36px]">
      <div
        className={cn(
          "relative flex flex-col max-md:max-w-[90%] mx-auto h-[500px] max-md:h-[600px] max-xl:h-[550px] items-center justify-center bg-[#13093b] rounded-[36px] text-primary-900 transition-bg mb-48",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 rounded-[36px] overflow-hidden">
          <div
            style={{
              "--aurora":
                "repeating-linear-gradient(100deg, #fff 10%, var(--indigo-300) 15%, #2E1780 20%, var(--violet-200) 25%, #2E1780 30%)",
            }}
            className={cn(
              `
          [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
          [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
          [background-image:var(--white-gradient),var(--aurora)]
          dark:[background-image:var(--dark-gradient),var(--aurora)]
          [background-size:300%,_200%]
          [background-position:50%_50%,50%_50%]
          filter blur-[10px] invert dark:invert-0
          after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
          after:dark:[background-image:var(--dark-gradient),var(--aurora)]
          after:[background-size:200%,_100%] 
          after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
          pointer-events-none
          absolute -inset-[10px] opacity-50 will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_90%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
