import React from "react";
import Image from "next/image";
import { SparklesCore } from "../_components/Sparkles";
import bgSvg from "../../public/bg-svg.svg";
import bgLeftSvg from "../../public/bg-svg-left.svg";
import { projects } from "./projectsData";
import Link from "next/link";

export const metadata = {
  title: "Saiber | Projects 💼",
};

export default function Page() {
  return (
    <section className="relative mt-[140px] pt-4 max-w-[1650px] mx-auto">
      <div className="container py-[20px]">
        <SparklesCore
          id="contact-project"
          background="transparent"
          minSize={1.1}
          maxSize={1.1}
          particleDensity={80}
          className="w-[65%] opacity-70 overflow-hidden mask-project left-1/2 top-[-3%] -translate-x-1/2 h-[240px] -z-50 absolute"
          particleColor={["#402BC9", "#fff"]}
          animation={{
            direction: "top",
            speed: 1,
            loop: true,
            easing: "linear",
          }}
        />
        <Image
          className="absolute hidden lg:block max-xl:w-[48%] max-lg:w-[52%] max-xl:mt-24 no-select maski z-[-1] top-[-250px] right-0"
          src={bgSvg}
          alt="Rightstick-svg"
        />
        <Image
          className="absolute hidden lg:block max-xl:w-[48%] max-lg:w-[52%] max-xl:mt-24 no-select maski-2 z-[-1] top-[-250px] left-0"
          src={bgLeftSvg}
          alt="leftStick-svg"
        />
      </div>
      <div className="flex flex-col max-md:px-4 justify-center items-center text-center">
        <div className="absolute top-0 z-[-1] w-[200px] h-[200px] blur-[140px] bg-[#402BC9]"></div>
        <span className="text-center button-shadow bg-[#402BC9] text-white py-2 px-5 mb-5 rounded-full mt-[65px]">
          <span>👉</span> My Works
        </span>
        <h3 className="max-md:text-[27px] text-[36px] max-md:leading-10 2xl:text-[42px] mt- font-bold">
          My Creative Projects
        </h3>
        <p className="max-lg:text-lg text-[19px] max-lg:max-w-[500px] max-lg:px-8 leading-6 lg:max-w-[500px] mt-3 mx-auto text-white/50">
          Explore a showcase of my diverse projects and creations
        </p>
      </div>
      <div className="container-nav mt-36">
        <section className="container max-lg:max-w-[80%] max-md:max-w-[95%] pb-48">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 max-xl:max-w-[80%] max-xl:mx-auto gap-12">
              {projects.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`}>
                  <div className="item hover:bg-[#111219] transition-all duration-300 cursor-pointer p-2 bg-primary-800 rounded-[34px]">
                    <div className="border-radial-2 p-[5px] rounded-[30px]">
                      <Image
                        quality={80}
                        width={500}
                        height={350}
                        className="rounded-[29px] image-project-mask mb-9"
                        src={project.image}
                        alt={project.alt}
                      />
                      <div className="px-4">
                        <span className="font-bold text-2xl">
                          {project.title}
                        </span>
                        <p className="text-white/70 mt-2 max-w-[90%] leading-7 text-lg">
                          {project.description}
                        </p>
                        {project.note && (
                          <span className="text-[#ffffff]/30">
                            {project.note}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
