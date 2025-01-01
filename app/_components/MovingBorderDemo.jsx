"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../_components/MovingBorder";
import Image from "next/image";
import arrowTop from "../../public/arrow-right.svg";
import Link from "next/link";

export function MovingBorderDemo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when the user scrolls down by 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      href="/"
      className={`fixed z-50 right-[50px] text-2xl bottom-[50px] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Button
        borderRadius="1.75rem"
        className="hover:bg-accent-600 duration-300 transition-all bg-accent-800 text-white"
      >
        <Image className="-rotate-90" src={arrowTop} alt="top" />
      </Button>
    </Link>
  );
}
