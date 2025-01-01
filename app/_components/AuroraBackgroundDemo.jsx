"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../_components/AuroraBackground";
import vectorIcon from "../../public/vector-check.svg";
import phone from "../../public/call-calling.svg";
import Image from "next/image";
import Link from "next/link";

export function AuroraBackgroundDemo() {
  return (
    <>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-2 md:gap-4 items-center justify-center px-4"
        >
          <div className="text-[35px] max-md:max-w-[80%] mx-auto max-md:text-center md:text-[30px] lg:text-[42px] leading-[43px] font-bold text-white text-center">
            Let&apos;s Bring Ideas to Life
          </div>
          <div className=" max-md:text-center font-extralight max-md:text-[21px] md:text-xl text-white/70 max-lg:mt-3 max-w-[80%] max-lg:max-w-full mx-auto text-center items-center lg:mb-4">
            Let's create something amazing together. Get in touch! I'm excited
            to bring your ideas to life.
          </div>
          <div>
            <div className="check-contact hidden md:flex flex-row max-md:flex-col items-center gap-5 ">
              <span className="flex border border-white/20 p-2 rounded-full max-md:px-3 px-4 items-center gap-3 text-white">
                <Image
                  className="p-[6px] w-[25px] h-[25px] rounded-full bg-accent-500 border border-primary-700"
                  src={vectorIcon}
                  alt="check"
                />
                <p className="text-base lg:text-lg">Innovative Solutions</p>
              </span>
              <span className="flex  border border-white/20 p-2 rounded-full max-md:px-3 px-4  items-center gap-3 text-white">
                <Image
                  className="p-[6px] w-[25px] h-[25px] rounded-full bg-accent-500 border border-primary-700"
                  src={vectorIcon}
                  alt="check"
                />
                <p className="text-base lg:text-lg">Modern Web Design</p>
              </span>
              <span className="flex  border border-white/20 p-2 rounded-full max-md:px-3 px-4 items-center gap-3 text-white">
                <Image
                  className="p-[6px] w-[25px] h-[25px] rounded-full bg-accent-500 border border-primary-700"
                  src={vectorIcon}
                  alt="check"
                />
                <p className="text-base lg:text-lg">Reliable Collaboration</p>
              </span>
            </div>
          </div>
          <Link
            href="/contact"
            className="rounded-full flex bg-accent-200 text-primary-900 font-medium text-lg py-3 px-6 mt-9 outline-none hover:scale-105 transition-all duration-300"
          >
            <Image
              src={phone}
              width={20}
              height={20}
              alt="phone-svg"
              className="mr-3"
            />
            Get In Touch
          </Link>
        </motion.div>
      </AuroraBackground>
    </>
  );
}
