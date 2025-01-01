import React from "react";
import Image from "next/image";
import { SparklesCore } from "../_components/Sparkles";
import ContactCard from "../_components/ContactCard";
import Form from "../_components/Form";
import bgSvg from "../../public/bg-svg.svg";
import bgLeftSvg from "../../public/bg-svg-left.svg";

export const metadata = {
  title: "Saiber | Contact 🤙",
};

export default function ContactPage() {
  return (
    <section className="relative mx-auto mt-[140px] max-w-[1650px] pb-48 pt-4">
      <div className="container py-5">
        <SparklesCore
          id="contact-project"
          background="transparent"
          minSize={1.1}
          maxSize={1.1}
          particleDensity={80}
          className="absolute left-1/2 top-[-7%] h-[240px] w-[65%] -translate-x-1/2 overflow-hidden opacity-70 mask-project -z-10"
          particleColor={["#402BC9", "#fff"]}
          animation={{
            direction: "top",
            speed: 1,
            loop: true,
            easing: "linear",
          }}
        />

        <div className="relative hidden lg:block">
          <Image
            className="absolute right-[-70px] top-[-250px] z-[-1] max-xl:mt-24 max-xl:w-[48%] max-lg:w-[52%] no-select maski"
            src={bgSvg}
            alt="Decorative right background"
            priority
          />
          <Image
            className="absolute left-[-70px] top-[-250px] z-[-1] max-xl:mt-24 max-xl:w-[48%] max-lg:w-[52%] no-select maski-2"
            src={bgLeftSvg}
            alt="Decorative left background"
            priority
          />
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center text-center max-md:px-4">
        <div className="absolute top-0 z-[-1] h-[200px] w-[200px] bg-[#402BC9] blur-[140px]" />

        <span className="mb-5 mt-5 rounded-full bg-accent-500 px-5 py-2 text-center text-white button-shadow">
          <span className="opacity-90">💬</span> Contact Me
        </span>

        <h3 className="font-bold max-md:text-[27px] max-md:leading-10 text-[36px] 2xl:text-[42px]">
          Get In Touch With Me
        </h3>

        <p className="mx-auto mt-3 text-white/50 max-lg:max-w-[500px] max-lg:px-8 max-lg:text-lg lg:max-w-[500px] text-[19px]">
          Have a question or want to work together? Feel free to get in touch
          through any of the options below.
        </p>
      </div>

      <ContactCard />
      <Form />
    </section>
  );
}
