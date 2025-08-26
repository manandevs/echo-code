"use client";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full pb-4 pt-7">

          {/* Logo */}
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

          {/* Navigation Links */}
          <nav className="flex items-center gap-6">
            <Link href="/code-clips" className="text-gray-700 hover:text-blue-600 font-medium">
              CodeClips
            </Link>
            <Link href="/play-ground" className="text-gray-700 hover:text-blue-600 font-medium">
              Playground
            </Link>

            {/* Internal Section Links */}
            <Link href="#features" className="text-gray-700 hover:text-blue-600 font-medium">
              Features
            </Link>
            <Link href="#demo" className="text-gray-700 hover:text-blue-600 font-medium">
              Demo
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium">
              Pricing
            </Link>
            <Link href="#cta" className="text-gray-700 hover:text-blue-600 font-medium">
              Get Started
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
