"use client";

import Image from "next/image";
import ContactButton from "./ContactButton";
import circle from "../../public/circle.png";
import light from "../../public/light.svg";
import download from "../../public/download.svg";
import shining from "../../public/shining.svg";
import heroPic from "../../public/hero-pic.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pb-[105px] max-w-[95%] mx-auto relative pt-[250px] px-4"
    >
      <Image
        className="absolute hidden lg:block top-[-60%] z-[-1] opacity-80 right-[-30%]"
        width={900}
        height={900}
        src={shining}
        alt="shining"
      />
      <Image
        className="absolute hidden lg:block top-[-60%] z-[-1] opacity-80 left-[-27%]"
        width={900}
        height={900}
        src={shining}
        alt="shining"
      />
      <Image
        className="absolute animate-pulse hidden lg:block left-[70px] top-48"
        width={150}
        height={150}
        src={light}
        alt="light"
      />
      <Image
        className="absolute animate-pulse  right-[80px] top-24"
        width={180}
        height={180}
        src={light}
        alt="green"
      />
      <Image
        className={`absolute z-[2] image top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2`}
        src={circle}
        alt="circle"
      />
      <div className="container relative custom-container">
        <div className="flex justify-center relative"></div>
        <div className="absolute top-[-30%] left-[10%] blur-[120px] bg-[#5a16f8]  size-36 rounded-full"></div>
        <div className="absolute top-[-30%] right-[10%] blur-[120px] bg-[#5a16f8] size-36 rounded-full"></div>

        <div className="relative z-[10] -mt-9 ">
          <div className="flex flex-col items-center">
            <Image
              className="bg-[#ffffffd4] max-lg:bg-white z-[0] shadowForImage rounded-full flex justify-center items-center text-center"
              width={120}
              quality={100}
              height={120}
              src={heroPic}
              alt="hero-picture"
            />

            <span className="bg-white z-[2] text-primary-900 shadowForSpan tex-white py-1 px-3 rounded-full -mt-6 font-[700] flex text-[15px] items-center gap-2">
              ✨ Front-End Developer
            </span>
          </div>
          <h1
            className={`text-center max-sm:max-w-[100%] max-sm:mb-8 mt-[40px] md:text-6xl lg:max-w-3xl xl:text-[58px] mx-auto leading-[30px] xl:max-w-4xl max-md:text-3xl   max-[627px]:text-[25px] font-[700]`}
          >
            Turning Creative Ideas Into Interactive Experiences
          </h1>
          <p className="text-center max-w-2xl max-lg:max-w-xl text-[22px] max-lg:text-xl mx-auto max-sm:text-lg text-white/70 mt-8 max-sm:mt-6">
            Crafting responsive, user-friendly websites with clean code and
            intuitive design, delivering seamless digital experiences.
          </p>
          <div className="flex justify-center text-center items-center">
            <Link
              target="_blank"
              href="/Saba-Gachechiladze.pdf"
              download="Saba-Gachechiladze"
            >
              <ContactButton className="inline-flex buttonHover max-md:py-[9px] max-md:px-5 buttonHover gap-4 py-[11px] px-7 text-lg mt-12 hover:bg-accent-600">
                <Image
                  width={28}
                  height={28}
                  src={download}
                  alt="download-svg"
                />
                Download CV
              </ContactButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
