import Image from "next/image";
import logo from "../../public/logo.svg";
import aboutPic from "../../public/hero-pic.svg";
import Link from "next/link";
import ContactButton from "./ContactButton";

export default function Footer() {
  return (
    <footer className="bg-primary-900 overflow-hidden border-t border-white/10 w-full relative">
      <div className="absolute top-[-10%] left-[10%] blur-[120px] bg-[#5a16f8]  size-36 rounded-full"></div>
      <div className="absolute top-[-10%] right-[10%] blur-[120px] bg-[#5a16f8] size-36 rounded-full"></div>
      <div className="container relative z-10 flex flex-col items-center text-center justify-center">
        <div className="logo-div flex flex-col items-center text-center justify-center mt-4">
          <Link href="/" className="flex items-center mt-12 gap-4 font-bold">
            <Image
              src={logo}
              alt="Saiber Logo"
              width={45}
              height={45}
              className="cursor-pointer"
            />
            <span className="text-3xl">Saiber</span>
          </Link>
          <p className="max-w-[90%] lg:max-w-[70%] text-white/70 mt-7 lg:mb-2 text-lg">
            Crafting intuitive digital experiences with passion and expertise.
            Let's build something great together.
          </p>
        </div>
        <ul className="flex max-lg:flex-col items-center text-[17px] text-white lg:border lg:border-white/10 gap-6 lg:gap-10 mt-5 lg:mt-8 lg:shadow-footer lg:bg-primary-900 py-3 lg:pl-7 lg:pr-3 rounded-full ">
          <div className="hidden lg:flex max-sm:flex-col max-sm:items-center max-sm:text-base gap-7 max-lg:mt-7 text-white/70 px-5 rounded-full">
            <Link href="/" className="hidden md:flex  items-center gap-2">
              <span className="hidden lg:block lg:text-2xl text-accent-500">
                ✶
              </span>
              Home
            </Link>
            <Link href="/about" className="hidden md:flex items-center gap-2">
              <span className="text-2xl text-accent-500">✶</span>
              About
            </Link>
            <Link
              href="/projects"
              className="hidden md:flex items-center gap-2"
            >
              <span className="hidden lg:block text-2xl text-accent-500">
                ✶
              </span>
              Projects
            </Link>
            <Link href="/#skills" className="hidden md:flex items-center gap-2">
              <span className="hidden lg:block text-2xl text-accent-500">
                ✶
              </span>
              Skills
            </Link>
            <Link href="/#faq" className="hidden md:flex items-center gap-2">
              <span className="hidden lg:block text-2xl text-accent-500">
                ✶
              </span>
              FAQ
            </Link>
          </div>
          <div>
            <Link href="/contact" className="flex items-center gap-2">
              <ContactButton className="bg-accent-500 shadow-footer px-5 rounded-full py-2 text-lg">
                Contact
              </ContactButton>
            </Link>
          </div>
        </ul>
        <div className="line opacity-[0.4] my-[48px]"></div>
        <div className="flex flex-col lg:flex-row mb-12 items-center">
          <p className="text-white/70 ">Made In &#169; 2024 </p>
          <div className="hidden lg:flex items-center">
            <span className="text-4xl mx-3 text-accent-300">·</span>
            <Image
              src={logo}
              alt="Saiber Logo"
              width={45}
              height={45}
              className="cursor-pointer"
            />
            <span className="text-4xl mx-3 text-accent-300">·</span>
          </div>
          <div className="flex max-lg:mt-5 text-white/70 items-center gap-3">
            <p>Created By </p>
            <Image
              src={aboutPic}
              className="w-[35px] border border-accent-500 bg-primary-800 rounded-full h-[35px]"
              alt="saba-profile"
            />
            <Link
              href="https://www.linkedin.com/in/saba-gachechiladze/"
              target="_blank"
            >
              @Saba Gachechiladze
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
