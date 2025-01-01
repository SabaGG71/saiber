"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import PhoneCall from "../../public/PhoneCall.svg";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import ContactButton from "./ContactButton";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <section className="py-5 px-4 lg:py-6 fixed w-full top-0 z-50">
      <div className="container-nav">
        <div
          className={`shadow backdrop-blur ${
            isOpen ? "rounded-[20px]" : "rounded-full"
          }`}
        >
          <div className="flex justify-between py-2 px-3 items-center sm:pr-3">
            <Logo />
            <div className="lg:flex flex-1 justify-left text-sm items-center hidden">
              <nav className="flex text-primary-50/90 mt-[2px] gap-7 font-medium">
                <Link
                  href="/"
                  className="hover:text-white ml-12 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  className="hover:text-white transition duration-300"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="hover:text-white transition duration-300"
                  href="/projects"
                >
                  Projects
                </Link>
                <Link
                  onClick={() => {
                    const skillsSection = document.getElementById("skills");
                    if (skillsSection) {
                      skillsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-white transition duration-300"
                  href="/#skills"
                >
                  Skills
                </Link>
                <Link
                  href="/#faq"
                  className="hover:text-white transition duration-300"
                >
                  FAQ
                </Link>
              </nav>
            </div>
            <div className="flex justify-end gap-2 lg:mr-[-6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather cursor-pointer feather-menu lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={twMerge(
                    "origin-left transition",
                    isOpen && "rotate-45 -translate-y-1"
                  )}
                ></line>
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={twMerge("transition", isOpen && "opacity-0")}
                ></line>
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={twMerge(
                    "origin-left transition",
                    isOpen && "-rotate-45 translate-y-1"
                  )}
                ></line>
              </svg>
              <div className="lg:flex gap-6 hidden items-center">
                <span className="w-2 h-2 bg-[#f9c23c] animate-pulse mr-[-15px] rounded-full"></span>
                <span className="font-bold text-sm">Active</span>

                <Link href="/contact">
                  <ContactButton className="group mr-1 hover:bg-accent-600 duration-300 transition-all max-xl:mr-1">
                    <Image
                      src={PhoneCall}
                      width={19}
                      height={19}
                      alt="lightning-icon"
                      className="mr-2 animate group-hover:animate-pulse transition-all duration-300"
                    />
                    Contact
                  </ContactButton>
                </Link>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-col xl:hidden items-center gap-4 py-4">
                  <Link href="/" className="py-2">
                    Home
                  </Link>
                  <Link href="/about" className="py-2">
                    About
                  </Link>
                  <Link href="/projects" className="py-2">
                    Projects
                  </Link>
                  <Link href="/#faq" className="py-2">
                    FAQ
                  </Link>
                  <Link href="/#skills" className="py-2">
                    Skills
                  </Link>
                  <Link href="/contact">
                    <ContactButton className="mr-1 flex items-center">
                      <Image
                        src={PhoneCall}
                        width={19}
                        height={19}
                        alt="lightning-icon"
                        className="mr-2 animate group-hover:animate-pulse transition-all duration-300"
                      />
                      Contact
                    </ContactButton>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
