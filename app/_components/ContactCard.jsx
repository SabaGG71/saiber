import React from "react";
import email from "../../public/email.svg";
import linkedin from "../../public/linkedIn.svg";
import resume from "../../public/resume.svg";
import bgAbout from "../../public/bgVertical.svg";
import arrowRight from "../../public/arrow-right.svg";
import Image from "next/image";
import Link from "next/link";
export default function ContactCard() {
  return (
    <section className="container-nav mt-[180px]">
      <div className="grid max-lg:max-w-[80%] max-xl:max-w-[80%] max-md:max-w-[85%] mx-auto items-center gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <div className="contact-box overflow-hidden hover:translate-y-[-10px]  transition-all duration-300 hover:bg-primary-900 py-9 px-6 relative border group border-white/10 rounded-3xl bg-[#0f0d1f] cursor-pointer">
          <a href="mailto:sgachechiladze881@gmail.com">
            <Image
              className="w-[45px] transition-all duration-300 group-hover:rotate-90 border border-accent-600 group-hover:border-white/20 h-[45px] bg-accent-900 group-hover:bg-primary-800 py-[10px] rounded-full absolute top-[40px] right-[40px]"
              src={arrowRight}
              alt="arrow-svg"
            />
            <Image
              className="absolute top-0 left-0 no-select opacity-[0.1] w-full  "
              src={bgAbout}
              alt="bgAbout"
            />
            <Image
              className="w-[55px] h-[55px] group-hover:bg-white border border-white/10 mb-5 rounded-2xl bg-accent-500/10 p-3"
              src={email}
              alt="email"
            />
            <span className="font-bold text-xl">Email Me</span>
            <p className="mt-1 group-hover:text-white text-[17px] text-primary-200">
              sgachechiladze881@gmail.com
            </p>
          </a>
        </div>
        <div className="contact-box overflow-hidden hover:translate-y-[-10px] transition-all duration-300 hover:bg-primary-900 group relative border border-white/10 py-9 px-6 rounded-3xl bg-[#0f0d1f] group-hover:bg-white cursor-pointer">
          <Link
            href="https://www.linkedin.com/in/saba-gachechiladze/"
            target="_blank"
          >
            <Image
              className="w-[45px]  transition-all duration-300 group-hover:rotate-90 group-hover:bg-primary-800 group-hover:border-white/20 border border-accent-600 h-[45px] bg-accent-900 py-[10px] rounded-full absolute top-[40px] right-[40px]"
              src={arrowRight}
              alt="arrow-svg"
            />
            <Image
              className="absolute top-0 left-0 no-select opacity-[0.08] w-full  "
              src={bgAbout}
              alt="bgAbout"
            />
            <Image
              className="w-[55px] h-[55px] group-hover:bg-white  border border-white/10 mb-5 rounded-2xl bg-accent-500/10 p-3"
              src={linkedin}
              alt="linkedin"
            />
            <span className="font-bold text-xl">Find Me on LinkedIn</span>
            <p className="mt-1 text-[17px] group-hover:text-white text-primary-200">
              Saba Gachechiladze
            </p>
          </Link>
        </div>
        <div className="contact-box overflow-hidden hover:translate-y-[-10px] transition-all duration-300 hover:bg-primary-900 group relative border border-white/10 py-9 px-6 rounded-3xl bg-[#0f0d1f] cursor-pointer">
          <Link
            target="_blank"
            href="/Saba-Gachechiladze.pdf"
            download="Saba-Gachechiladze"
          >
            <Image
              className="w-[45px]  transition-all duration-300 group-hover:rotate-90 group-hover:bg-primary-800 group-hover:border-white/20 border border-accent-600 h-[45px] bg-accent-900 py-[10px] rounded-full absolute top-[40px] right-[40px]"
              src={arrowRight}
              alt="arrow-svg"
            />
            <Image
              className="absolute top-0 left-0 no-select opacity-[0.08] w-full  "
              src={bgAbout}
              alt="bgAbout"
            />
            <Image
              className="w-[50px] h-[50px] group-hover:bg-white  mb-5 rounded-2xl bg-accent-500/10 p-3 border border-white/10"
              src={resume}
              alt="resume"
            />
            <span className="font-bold text-xl">View My CV</span>
            <p className="mt-1 group-hover:text-white text-[17px] text-primary-200">
              {" "}
              See my experience and skills.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
