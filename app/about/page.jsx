import Image from "next/image";
import aboutPageImage from "../../public/aboutPage.jpeg";
import linked from "../../public/Linked.svg";
import sparkles from "../../public/light.svg";
import arrowAbout from "../../public/arrowAbout.svg";
import { DotBackgroundDemo } from "../_components/DotBackgroundDemo";
import Link from "next/link";
import ContactButton from "../_components/ContactButton";
import SecButton from "../_components/SecButton";

export const metadata = {
  title: "Saiber | About 💻",
};
export default function page() {
  return (
    <section>
      <div>
        <DotBackgroundDemo />
      </div>

      <div className="container max-xl:flex max-xl:flex-col-reverse  relative mt-48 mb-24 grid  grid-cols-1 xl:grid-cols-2 max-md:max-w-[85%]  max-sm:max-w-[90%] max-md:mx-auto">
        <div className="relative">
          <Image
            className=" w-full xl:w-[700px] border border-white/10 rounded-3xl relative object-cover h-[500px]"
            src={aboutPageImage}
            alt="about-page-image"
          />
        </div>
        <div className="relative">
          <Image
            className="hidden xl:block absolute top-[21%] -rotate-[15deg] left-[-6%] z-40"
            src={arrowAbout}
            width={100}
            height={50}
            alt="arrowAbout-svg"
          />
          <div className="scale-[0.88] mt-[-25px] max-xl:w-full bg-[#0d0d13] border border-white/10 rounded-3xl p-9 pt-[40px]">
            <div className="flex flex-col">
              <span className="font-bold  max-sm:text-[24px]  text-[28px] text-white/70">
                About the Creator
              </span>
            </div>
            <h1 className="text-[48px] max-sm:text-[32px] font-bold">
              Saba ✨
            </h1>

            <p className="text-[19px]  max-sm:text-[18px]  mt-4 text-white/70 leading-8">
              Hi, I'm Saba Gachechiladze! 👋 I'm a student at Kutaisi
              International University (KIU) with a passion for web development.
              Over the past year, I've embarked on a self-taught programming
              journey, building projects and bringing ideas to life on the web.
              I'm driven by the endless possibilities of web technologies.
              Through dedicated self-study and hands-on practice, I focus on
              creating responsive, user-friendly websites with clean code and
              engaging experiences.
            </p>
            <div className="flex text-center flex-col md:w-full lg:flex-row xl:items-center gap-4 py-8">
              <ContactButton className="justify-center py-3 text-xl px-7 rounded-full">
                <Link href="/contact">👉 Let&apos;s Talk </Link>
              </ContactButton>

              <SecButton className="py-3 text-xl flex items-center justify-center gap-3 pr-7 pl-4 rounded-full">
                <Link
                  href="https://www.linkedin.com/in/saba-gachechiladze/"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Image
                    width={28}
                    height={28}
                    src={linked}
                    alt="linkedIn-icon"
                  />{" "}
                  LinkedIn
                </Link>
              </SecButton>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative">
        <div className="absolute top-[30%] left-[20%] blur-[170px] bg-[#5a16f8]  size-48 rounded-full"></div>
        <div className="absolute top-[60%] right-[20%] blur-[170px] bg-[#5a16f8] size-48 rounded-full"></div>
        <Image
          src={sparkles}
          className="absolute w-full hidden lg:block h-[250px] animate-pulse top-[10%] right-[-48%]"
          alt="sparkles"
        />

        <Image
          src={sparkles}
          className="absolute w-full h-[200px] animate-pulse bottom-[20%] left-[-50%] "
          alt="sparkles"
        />
        <div className="flex items-center relative text-center flex-col">
          <h3 className="max-sm:text-[28px] max-xl:text-[36px] text-[42px] relative font-bold mt-[70px]">
            <span className=" z-30">😇 My journey</span>
          </h3>

          <p className="max-sm:max-w-[85%] max-md:max-w-[95%]  max-sm:mt-4 max-w-[65%] max-sm:text-xl max-sm:px-0 p-5 leading-10 mx-auto mt-12 opacity-70 text-[26px] font-regular">
            At heart, I'm a web developer who thrives on turning ideas into
            functional, stunning digital experiences 🚀. My journey began with
            HTML and CSS, building the foundation for my craft. I then delved
            into JavaScript and embraced React and Next.js to explore
            server-side rendering and dynamic web solutions 💻. Currently,
            I&apos;m expanding my expertise by learning PHP and MySQL to deepen
            my backend knowledge 📚.
          </p>
          <p className="max-sm:max-w-[85%] max-md:max-w-[95%] max-sm:mt-4 max-w-[65%] max-sm:text-xl max-sm:px-0 p-5 leading-10 mx-auto mt-12 opacity-70 text-[26px] font-regular ">
            {" "}
            I also have a passion for design 🎨, blending creativity with
            technical skills to craft visually striking, user-friendly websites.
            I&apos;m committed to delivering exceptional quality and ensuring
            every project reflects both innovation and precision 🏆.
          </p>
          <p className="max-sm:max-w-[85%] max-md:max-w-[95%] max-sm:mt-4 max-w-[65%] max-sm:text-xl max-sm:px-0 p-5 leading-10 mx-auto mt-12 opacity-75 text-[26px] text-white/80 italic font-regular mb-24 xl:mb-[155px]">
            <span className="text-accent-200 hover:text-accent-400 duration-300 transition-all underline font-bold cursor-pointer">
              <Link
                href="https://youtube.com/shorts/XjmgmHfbmHI"
                target="_blank"
              >
                Want to see more?
              </Link>
            </span>{" "}
            Check out my{" "}
            <span className="text-accent-200 font-bold hover:text-accent-400 duration-300 transition-all underline">
              <Link
                href="https://youtube.com/shorts/XjmgmHfbmHI"
                target="_blank"
              >
                daily life video
              </Link>
            </span>{" "}
            to see the behind-the-scenes of my development journey and what
            inspires me! 🎥
          </p>
        </div>
      </div>
    </section>
  );
}
