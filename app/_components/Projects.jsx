import Image from "next/image";
import stick from "../../public/stick.svg";
import leftStick from "../../public/leftStick.svg";
import { SparklesCore } from "./Sparkles";

export default function Projects() {
  return (
    <section className="relative pt-4 max-w-[1600px] mx-auto pb-48">
      <div className="container py-[20px]">
        <SparklesCore
          id="sparkle-project"
          background="transparent"
          minSize={1}
          maxSize={1}
          particleDensity={50}
          className="w-[65%] opacity-70 overflow-hidden mask-project left-1/2 top-[-30%] -translate-x-1/2 h-[240px] -z-50 absolute"
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
          src={stick}
          alt="Rightstick-svg"
        />
        <Image
          className="absolute hidden lg:block max-xl:w-[48%] max-lg:w-[52%] max-xl:mt-24   no-select maski-2 z-[-1] top-[-250px] left-0"
          src={leftStick}
          alt="leftStick-svg"
        />
      </div>
      <div className="flex flex-col max-md:px-4 justify-center items-center text-center">
        <div className="absolute top-0 z-[-1] w-[200px] h-[200px] blur-[140px] bg-[#361572]"></div>
        <span className="border text-center text-primary-100 py-2 px-5 mb-5 rounded-full border-[#fff]/15">
          Innovate. Design. Deliver.
        </span>
        <h3 className="text-[36px] max-md:leading-10 max-md:mb-6 2xl:text-[42px] mt- font-bold">
          Explore My Recent Projects
        </h3>
        <p className="max-lg:text-lg text-xl max-w-[500px] mt-3 mx-auto text-white/50">
          Take a look at some of the websites and applications I&apos;ve built,
          showcasing creativity, functionality, and user-focused design.
        </p>
      </div>
    </section>
  );
}
