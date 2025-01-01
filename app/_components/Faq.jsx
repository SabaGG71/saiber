"use client";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FaqTop from "../_components/FaqTop";
import Image from "next/image";
import bg from "../../public/bgAbout.svg";
import ContactButton from "./ContactButton";
import faqSVG from "../../public/faqSvg.svg";
import Link from "next/link";

const faqs = [
  {
    id: 1,
    question: "What drives your passion for web development?",
    answer:
      "Web development is like solving a puzzle with endless possibilities 🧩✨. It's about creating meaningful experiences that connect people and ideas 🌍💡. Every line of code can transform into something interactive 💻🔄, and the constant learning keeps me motivated to shape how users interact with the digital world 🌐📱. Each project is an opportunity to push boundaries and make a difference 🚀🌟.",
  },
  {
    id: 2,
    question: "how do you imagine yourself in 5 years?",
    answer:
      "In five years, I see myself as a skilled web developer with expertise in both front-end and back-end technologies 🌐💻. I envision leading projects 🚀, collaborating with teams 🤝, and mentoring others 👩‍🏫. I aim to master React Native 📱 and stay ahead of emerging technologies 🔮, contributing to meaningful projects that solve real-world problems 🌍 and provide seamless digital experiences ✨.",
  },
];

const faqs2 = [
  {
    id: 5,
    question: "What about team work?",
    answer:
      "I work well in a team by focusing on clear communication and supporting others. I break down tasks to align with each persons strengths and keep the team updated on my progress. I am always open to feedback and ready to offer help when needed. During my time at university, I worked on several group projects and learned the importance of collaboration for success.",
  },
  {
    id: 6,
    question: "How do you ensure a positive UX? Example?",
    answer:
      "I ensure a positive user experience by focusing on simplicity, usability, and accessibility. In a recent cabin reservation system project, I optimized the user flow, navigation, and mobile responsiveness. After gathering user feedback, I made adjustments that improved the experience, leading to higher satisfaction and conversion rates.",
  },
];

export default function Faqs() {
  const [selectedFaqIndex, setSelectedFaqIndex] = useState(null);
  const [selectedFaq2Index, setSelectedFaq2Index] = useState(null);

  const toggleFaq = (index, isFaq2 = false) => {
    if (isFaq2) {
      setSelectedFaq2Index(index === selectedFaq2Index ? null : index);
    } else {
      setSelectedFaqIndex(index === selectedFaqIndex ? null : index);
    }
  };

  return (
    <section className="px-4 relative">
      <FaqTop />
      <div className="w-[200px] top-[-100px] z-[-1] right-0 h-[350px] mt-[150px] blur-[200px] bg-[#9568e8] absolute"></div>
      <div className="w-[100px]  z-[-1] top-[-100px] left-0 h-[350px] hidden md:block mt-[150px] blur-[200px] bg-[#b3b3b3] absolute"></div>
      <div className="container relative">
        <div className="mx-auto overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-5 mb-[50px]">
          <div className="left overflow-hidden flex flex-col gap-5">
            {faqs.map((faq, index) => (
              <div key={faq.id}>
                <div
                  className={`bg-[#111219] relative  hover:bg-primary-800 overflow-hidden transition-all duration-300 cursor-pointer rounded-2xl border border-white/10 py-5`}
                  onClick={() => toggleFaq(index)}
                >
                  <Image
                    src={bg}
                    alt="bg"
                    className="opacity-[0.07] absolute top-0 left-0"
                  />
                  <div className="flex max-sm:gap-6 justify-between items-center group pr-6 relative overflow-hidden">
                    <h3 className="leading-[37px] ml-9 font-normal max-xl:max-w-[70%] text-lg max-w-[500px] max-lg:max-w-[300px] max-xl:leading-6">
                      {faq.question}
                    </h3>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={twMerge(
                        "flex-shrink-0 w-[35px] h-[35px] border border-[#a3a3a335] transition duration-300 bg-[#1a1b26] group-hover:bg-[#111219] p-1 rounded-full ",
                        selectedFaqIndex === index && "rotate-45"
                      )}
                    >
                      <path
                        d="M6 12H18"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 18V6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <AnimatePresence>
                    {selectedFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, marginTop: 0 }}
                        animate={{ height: "auto", marginTop: 24 }}
                        exit={{ height: 0, marginTop: 0 }}
                        className={twMerge("overflow-hidden")}
                      >
                        <p className="text-white/50 mx-9 border-t border-white/[0.05] pt-6 lg:text-[18px] lg:max-w-[90%]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
          <div className="right flex flex-col gap-5">
            {faqs2.map((faq2, index) => (
              <div key={faq2.id}>
                <div
                  className={`bg-[#111219] duration-300 transition-all group hover:bg-primary-800  relative overflow-hidden cursor-pointer rounded-2xl border border-white/10 px-6 py-5`}
                  onClick={() => toggleFaq(index, true)}
                >
                  <Image
                    src={bg}
                    alt="bg"
                    className="opacity-[0.07] absolute top-0 left-0"
                  />
                  <div className="flex max-sm:gap-6 justify-between items-center">
                    <h3 className="leading-[37px] max-xl:max-w-[70%] ml-4 font-normal text-lg max-w-[500px] max-lg:max-w-[300px] max-xl:leading-6">
                      {faq2.question}
                    </h3>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={twMerge(
                        "flex-shrink-0 w-[35px] h-[35px] border border-[#a3a3a335] transition duration-300 bg-[#1a1b26] group-hover:bg-[#111219] p-1 rounded-full",
                        selectedFaq2Index === index && "rotate-45"
                      )}
                    >
                      <path
                        d="M6 12H18"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 18V6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <AnimatePresence>
                    {selectedFaq2Index === index && (
                      <motion.div
                        initial={{ height: 0, marginTop: 0 }}
                        animate={{ height: "auto", marginTop: 24 }}
                        exit={{ height: 0, marginTop: 0 }}
                        className={twMerge("overflow-hidden")}
                      >
                        <p className="text-white/50 ml-4 pt-6 border-t border-white/[0.05] lg:text-[18px] lg:max-w-[90%]">
                          {faq2.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex  items-center justify-center text-center mb-48">
          <span className="bg-[#111219] border border-[#cccccc2c] max-lg:p-8 relative flex flex-col lg:flex lg:flex-row items-center p-2 rounded-3xl lg:rounded-full">
            <Image
              src={faqSVG}
              alt="faq-svg"
              className="bg-primary-200 max-lg:mb-4 ml-3 p-1 rounded-2xl w-[25px] h-[25px]"
            />
            <span className="text-lg ml-3 font-medium">
              Still Have a Question
            </span>
            <Link href="/contact">
              <ContactButton className="font-medium max-lg:mt-4 lg:ml-12 py-3 px-6 text-lg">
                Ask Question
              </ContactButton>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
