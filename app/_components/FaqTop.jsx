import React from "react";
import { SparklesCore } from "./Sparkles";

export default function SkillsTop() {
  return (
    <section
      id="faq"
      className="relative mt-[-30px] pt-4 max-w-[1600px] mx-auto pb-12"
    >
      <div className="flex flex-col max-md:px-4 justify-center items-center text-center">
        <span className="border text-center text-primary-100 mb-3 py-2 px-5 rounded-full border-[#fff]/15">
          FAQ
        </span>
        <h3 className="text-[36px] max-md:leading-10 max-md:mb-6 2xl:text-[42px] font-bold">
          Frequently Asked Questions
        </h3>
        <p className="max-lg:text-lg text-xl max-w-[450px] mt-2 mx-auto text-white/50">
          Clear answers to questions about my work, approach, and skills.
        </p>
      </div>
    </section>
  );
}
