import Image from "next/image";
import playBtn from "../../public/play-btn.svg";
import bgAbout from "../../public/bgAbout.svg";
import arrowRight from "../../public/arrow-right.svg";
import Link from "next/link";
import ContactButton from "./ContactButton";
import SecButton from "./SecButton";
export default function About() {
  return (
    <section className="relative xl:mb-[280px] mt-[141px]">
      <div className="w-[100px] top-0 z-[-1] left-0 h-[400px] blur-[200px] bg-accent-500 absolute"></div>
      <div className="w-[100px]  z-[-1] top-0 right-0 h-[400px] blur-[200px] bg-[#b3b3b3] absolute"></div>
      <div className="container-nav flex flex-col items-center text-center justify-center">
        <span className="bg-primary-900 z-10 rounded-full text-xl py-2 px-4 font-bold">
          About Me
        </span>
        <div className="line hidden lg:block mt-[-21.5px]"></div>
      </div>
      <div className="container-nav mt-7 justify-center bg-[#171721] z-[0] rounded-3xl max-xl:max-w-[90%]  max-lg:max-w-[90%] items-center mb-48 relative">
        <div className="grid grid-cols-2 border-[1px] rounded-3xl border-[#ffffff0e] relative overflow-hidden xl:gap-12 gap-6 justify-center items-center z-30">
          <div className="left col-span-2 lg:col-span-1 relative z-30">
            <Link href="https://youtube.com/shorts/XjmgmHfbmHI" target="_blank">
              <div className="aboutImage h-[300px] lg:h-[400px] hover:scale-95 transition-all duration-200 rounded-[24px] ">
                <Image
                  className="absolute hover:bg-accent-600 hover:scale-95 bg-accent-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 playBtn cursor-pointer rounded-full py-4 w-[80px] h-[80px]"
                  src={playBtn}
                  alt="play-btn"
                />
              </div>
            </Link>
          </div>
          <Image
            className="absolute  no-select opacity-[0.08] w-full lg:w-[55%] top-4 none lg:block z-[-2] lg:right-4"
            src={bgAbout}
            alt="bgAbout"
          />
          <Image
            className="absolute w-full lg:w-[55%] no-select opacity-[0.08] bottom-4 z-[-2] lg:right-4"
            src={bgAbout}
            alt="bgAbout"
          />
          <div className="right px-6 col-span-2 lg:col-span-1  relative">
            <h2 className="max-sm:text-[25px] max-2xl:text-[38px] text-[30px] leading-[30px] text-white lg:text-[35px] xl:text-[42px] mt-4 relative z-30 lg:leading-[44px] font-bold">
              Driven by Code and Creativity
            </h2>
            <p className="mt-5  text-lg max-lg:max-w-[80%] max-md:max-w-full lg:text-xl relative z-30 text-white/70">
              I&apos;m a front-end developer passionate about building
              intuitive, user-friendly websites with clean, efficient code.
            </p>
            <div className="flex text-center flex-col md:w-full lg:flex-row lg:items-center gap-4 py-8">
              <Link href="/about">
                <ContactButton className="bg-accent-600 flex text-center justify-center py-[10px] items-center gap-3 px-5 text-lg w-full lg:w-auto">
                  Learn More
                  <Image
                    width={19}
                    height={19}
                    src={arrowRight}
                    alt="arrowRight"
                  />
                </ContactButton>
              </Link>
              <Link href="/#skills">
                <SecButton className="text-center justify-center  flex items-center gap-3 py-[10px] px-5 text-lg w-full lg:w-auto">
                  My Skills
                  <Image
                    width={19}
                    height={19}
                    src={arrowRight}
                    alt="arrowRight"
                  />
                </SecButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
