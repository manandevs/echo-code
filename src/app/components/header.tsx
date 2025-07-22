"use client"; // Required in Next.js 13/14 (App Router) if using useState

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-gray-900/70 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          {/* --- Logo and Brand --- */}
          <div className="inline-flex gap-3.5 items-center">
            <Link
              href="/"
              className="relative flex items-center group"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="z-40 flex items-center space-x-1">
                <div className="w-10 h-10 rounded-[43%_57%_43%_57%_/_29%_71%_29%_71%] bg-gradient-to-br from-fuchsia-500 via-red-500 to-yellow-500"></div>
                <div className="flex flex-col text-start pl-1">
                  <span className="text-2xl font-semibold leading-[24px]">
                    EchoCode
                  </span>
                  <span className="text-sm">Fast. Light. Easy.</span>
                </div>
              </div>

              {/* Decorative Blurs */}
              <div className="absolute w-40 h-8 rounded-full bg-cyan-500 -left-1.5 blur-lg opacity-70 group-hover:opacity-90 group-hover:blur-[18px] transition-all duration-300"></div>
              <div className="absolute w-40 h-8 rounded-full bg-purple-500 -right-5 blur-lg opacity-70 group-hover:opacity-90 group-hover:blur-[18px] transition-all duration-300"></div>
            </Link>

            <span className="cursor-pointer hidden sm:inline-flex text-xs font-medium text-[#9F70FD] bg-[#9F70FD]/10 px-2.5 py-1 rounded-full border border-[#9F70FD]/50 animate-pulse">
              experimental
            </span>
          </div>

          {/* --- Desktop Navigation --- */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/code-clips"
              className="relative group text-gray-300 hover:text-white transition-colors duration-300"
            >
              <span>CodeClips</span>
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00BFFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </Link>

            <Link
              href="/play-ground"
              className="relative group text-gray-300 hover:text-white transition-colors duration-300"
            >
              <span>PlayGround</span>
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00BFFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </Link>

            <Link
              href="#"
              className="px-4 py-2 text-sm font-semibold text-[#00BFFF] border border-[#00BFFF]/50 rounded-lg transition-all duration-300 hover:bg-[#00BFFF]/10 hover:border-[#00BFFF]"
            >
              Sign In
            </Link>
          </div>

          {/* --- Mobile Menu Button --- */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle main menu</span>
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0 shadow-2xl" : "-translate-y-[150%]"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 py-8 px-4">
          <Link
            href="/code-clips"
            className="text-lg text-gray-300 hover:text-white transition"
            onClick={() => setIsMenuOpen(false)}
          >
            CodeClips
          </Link>
          <Link
            href="/play-ground"
            className="text-lg text-gray-300 hover:text-white transition"
            onClick={() => setIsMenuOpen(false)}
          >
            PlayGround
          </Link>
          <Link
            href="#"
            className="w-full text-center px-6 py-2.5 text-lg font-semibold text-[#00BFFF] border border-[#00BFFF]/50 rounded-lg transition hover:bg-[#00BFFF]/10 hover:border-[#00BFFF]"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
