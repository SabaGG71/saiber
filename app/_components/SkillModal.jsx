"use client";
import Image from "next/image";
import add from "../../public/add.svg";
import bgCode from "../../public/bgVertical.svg";

export default function SkillModal({ skill, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-primary-900/75 flex justify-center items-center">
      <div className="bg-[#0f1016] overflow-hidden shadow-bg rounded-3xl p-8 py-6 relative max-sm:max-w-[350px] max-[376px]:max-w-[326px] lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl max-w-md w-full">
        <Image
          src={bgCode}
          className="absolute spark-mask left-0 top-0 w-full opacity-[0.03]"
          alt="bg"
        />
        <div className="flex flex-col ">
          <div className="flex gap-4  items-center justify-between ">
            <div className="flex bg-primary-900 hover:bg-primary-800 cursor-pointer duration-300 transition-all   shadow-bg  py-3 px-7 rounded-e-3xl gap-4 mt-[20px]  ml-[-45px] items-center">
              <Image
                src={skill.icon}
                alt={`${skill.name}-icon`}
                className="w-[50px] h-[50px] "
              />
              <h2 className="text-xl z-10 lg:text-2xl font-bold">
                {skill.name}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="relative bg-accent-900 shadow-bg  py-3 px-5 rounded-s-3xl mt-[20px] mr-[-45px] text-white text-xl hover:bg-accent-700 duration-300 transition-all hover:px-7 z-10"
            >
              <Image
                src={add}
                className="rotate-45 w-[40px] h-[40px]"
                alt="cancel"
              />
            </button>
          </div>
          <p className="text-white/70 text-base lg:text-[17px] leading-[27px] mt-9 z-10 mb-8">
            {skill.modalText}
          </p>
        </div>
      </div>
    </div>
  );
}
