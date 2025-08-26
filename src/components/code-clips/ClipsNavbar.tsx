"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTerminal } from "react-icons/fa6";

const ClipsNavbar = () => {
  return (
    <header className="w-full flex items-center justify-between px-4 py-2 bg-[#f0f4f8] text-gray-800 border-b border-gray-300">
      {/* Left Side: Logo and Title */}
      <Link href="/" className="flex items-center">
        <div className="flex items-center gap-2">
          <Image src={"/svg/logo.svg"} alt="logo" width={30} height={30} />
          <div className="flex space-x-1 text-3xl font-bold relative">
            <span className="text-red-200">e</span>
            <span className="text-orange-300">c</span>
            <span className="text-blue-200">h</span>
            <span className="text-red-300">o</span>
            <div className="bg-red-400 w-2 h-2 absolute right-0.5 top-0.5 rounded-full"></div>
          </div>
        </div>
      </Link>

      {/* Right Side: Call to Action */}
      <div className="flex items-center">
        <Link
          href="/play-ground"
          className="flex items-center gap-2 px-4 py-2 font-semibold text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          <FaTerminal size={14} /> Go to Playground
        </Link>
      </div>
    </header>
  );
};

export default ClipsNavbar;
