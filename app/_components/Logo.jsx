"use client";
import Link from "next/link";
import logo from "../../public/logo.svg";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 font-bold">
      <Image
        src={logo}
        alt="Saiber Logo"
        width={38}
        height={38}
        className="cursor-pointer"
      />
      <span className="text-[21px]"> Saiber</span>
    </Link>
  );
}
