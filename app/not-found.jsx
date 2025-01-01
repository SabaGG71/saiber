import Image from "next/image";
import Link from "next/link";
import right from "../public/arrow-right.svg";
import ContactButton from "./_components/ContactButton";
import { SparklesCore } from "./_components/Sparkles";

export default function notFound() {
  return (
    <main className="flex flex-col justify-center items-center text-center py-[250px] space-y-6 mt-4">
      <SparklesCore
        id="error-project"
        background="transparent"
        minSize={1}
        maxSize={1}
        particleDensity={100}
        className="container z-[-20] mask-error h-[500px] absolute"
        particleColor="#402BC9"
        animation={{
          direction: "bottom",
          speed: 1,
          loop: true,
          easing: "linear",
        }}
      />
      <h1 className="text-[42px] font-semibold">🌌 Destination Unknown</h1>
      <p className="w-[40%] relative mb-6 text-xl">
        🌠 Oops! This part of the universe seems uncharted. The stars may have
        shifted, or the planet you're looking for is light-years away. 🪐💫
      </p>
      <Link href="/" className="relative mt-10 inline-block">
        <ContactButton className="flex mt-6 gap-3 items-center bg-accent-500 text-white font-bold rounded-full px-6 py-3 text-lg">
          <Image src={right} className="rotate-180" alt="left-SVG" />
          Go back to Saiber
        </ContactButton>
      </Link>
    </main>
  );
}
