import Image from "next/image";
import project1 from "../../public/wild.jpg";
import project2 from "../../public/project3.jpg";
import project3 from "../../public/medico.jpg";
import project4 from "../../public/project4.jpg";
import arrowRight from "../../public/arrow-right.svg";
import Link from "next/link";
import ContactButton from "./ContactButton";

export default function ProjectItem() {
  return (
    <section className="container max-lg:max-w-[80%] max-md:max-w-[95%] pb-48">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-xl:max-w-[90%] max-xl:mx-auto gap-12">
          <div className="item cursor-pointer hover:bg-[#111219] transition-all duration-300 p-2 pb-9 bg-primary-800 rounded-[34px]">
            <Link href="/projects/1">
              <div className="border-radial-1 rounded-[30px] p-[5px]">
                <Image
                  quality={90}
                  className="rounded-[29px] image-project-mask mb-9"
                  src={project1}
                  alt="project-1 | Wild Oasis"
                />
                <div className="px-4">
                  <span className="font-bold text-2xl">
                    Wild Oasis - Hospitality
                  </span>
                  <p className="text-white/70 max-w-[85%] mt-2 leading-7 text-lg">
                    A platform for booking cabins with intuitive navigation and
                    modern design.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="item hover:bg-[#111219] transition-all duration-300 cursor-pointer p-2 bg-primary-800 rounded-[34px]">
            <Link href="/projects/2">
              <div className="border-radial-2 p-[5px] rounded-[30px]">
                <Image
                  quality={90}
                  className="rounded-[29px] image-project-mask mb-9"
                  src={project2}
                  alt="project-2 | SaiberNext"
                />
                <div className="px-4">
                  <span className="font-bold text-2xl">SaiberNext - SaaS</span>
                  <p className="text-white/70 mt-2 max-w-[90%] leading-7 text-lg">
                    A modern SaaS platform that simplifies business operations
                    with powerful tools and an intuitive interface.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="item hover:bg-[#111219] transition-all duration-300 cursor-pointer p-2 bg-primary-800 rounded-[34px]">
            <Link href="/projects/3">
              <div className="border-radial-2 p-[5px] rounded-[30px]">
                <Image
                  quality={90}
                  className="rounded-[29px] image-project-mask mb-9"
                  src={project3}
                  alt="project-3 | Medico"
                />
                <div className="px-4">
                  <span className="font-bold text-2xl">
                    Medico - Dental Clinic
                  </span>
                  <p className="text-white/70 mt-2 max-w-[90%] leading-7 text-lg">
                    Medico - A dental clinic providing expert care with advanced
                    treatments in a patient-friendly environment.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="item hover:bg-[#111219] transition-all duration-300 cursor-pointer p-2 bg-primary-800 rounded-[34px]">
            <Link href="/projects/4">
              <div className="border-radial-2 p-[5px] rounded-[30px]">
                <Image
                  quality={90}
                  className="rounded-[29px] image-project-mask mb-9"
                  src={project4}
                  alt="project-4 | Worldwise"
                />
                <div className="px-4">
                  <span className="font-bold text-2xl">
                    Worldwise - Travel Tracking
                  </span>
                  <p className="text-white/70 mt-2 mb-4 max-w-[90%] leading-7 text-lg">
                    Worldwise - An app that lets you track your travels,
                    document destinations, and relive your journeys with ease.
                  </p>
                  <span className="text-[#ffffff]/30">* Not Responsive</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Link
        href="/projects"
        className="flex justify-center items-center text-center"
      >
        <ContactButton className="text-xl flex items-center mt-[95px]">
          View All Works
          <Image
            className="w-[18px] ml-2 h-[18px]"
            src={arrowRight}
            alt="svg-arrow"
          />
        </ContactButton>
      </Link>
    </section>
  );
}
