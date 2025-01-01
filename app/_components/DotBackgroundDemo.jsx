import React from "react";

export function DotBackgroundDemo() {
  return (
    <div className="h-[55rem] z-[-1] about-mask w-full absolute top-0 left-0 flex items-center justify-center">
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.8,
          backgroundImage: `radial-gradient(#402BC9 1px, transparent 1px), radial-gradient(#402BC9 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      />
    </div>
  );
}
