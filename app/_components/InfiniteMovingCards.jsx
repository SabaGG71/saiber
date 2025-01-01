"use client";
import { cn } from "../../utils/cn";
import React, { useEffect, useState, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = 5,
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);
  const animationRef = useRef(null);

  const cleanup = () => {
    if (containerRef.current) {
      containerRef.current.style.removeProperty("--animation-duration");
      containerRef.current.style.removeProperty("--animation-direction");
    }
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  useEffect(() => {
    addAnimation();
    return () => cleanup();
  }, [speed, direction]);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      if (scrollerRef.current.children.length > items.length) {
        scrollerRef.current.innerHTML = "";
        items.forEach((item, idx) => {
          const listItem = createListItem(item, idx);
          scrollerRef.current?.appendChild(listItem);
        });
      }

      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      animationRef.current = requestAnimationFrame(() => {
        setAnimationProperties();
        setStart(true);
      });
    }
  }

  const setAnimationProperties = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      const animationDuration = Math.min(Math.max(5, Math.abs(speed)), 30);
      containerRef.current.style.setProperty(
        "--animation-duration",
        `${animationDuration}s`
      );
    }
  };

  const createListItem = (item, idx) => {
    const li = document.createElement("li");
    li.className = "max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6";
    li.innerHTML = `
      <blockquote>
        <div 
          aria-hidden="true" 
          class="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
        ></div>
        <div class="flex items-center justify-center gap-6">
          <div class="relative z-20 flex justify-center flex-row items-center">
            <span class="flex flex-col justify-center gap-1">
              <span class="text-[22px] leading-[1.6] text-white whitespace-nowrap font-bold">
                ${item.title}
              </span>
            </span>
          </div>
        </div>
      </blockquote>
    `;
    return li;
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 container mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_40%,white_75%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-2 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6"
            key={`${item.title}-${idx}`}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="flex items-center justify-center gap-6">
                <div className="relative z-20 flex justify-center flex-row items-center">
                  <span className="flex flex-col justify-center gap-1">
                    <span className="text-[22px] leading-[1.6] text-white whitespace-nowrap font-bold">
                      {item.title}
                    </span>
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
