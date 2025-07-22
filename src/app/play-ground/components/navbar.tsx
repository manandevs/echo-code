"use client";

import { FaPlay } from "react-icons/fa";
import { MdOutlineExpandMore } from "react-icons/md";
import { useState } from "react";
import { PiRowsFill } from "react-icons/pi";
import Link from "next/link";

const languages = [
  "JavaScript",
  "Python",
  "Java",
  "C",
  "C++",
  "C#",
  "Go",
  "Rust",
  "TypeScript",
  "Ruby",
  "PHP",
  "Swift",
  "Kotlin",
  "Perl",
  "Lua",
  "Scala",
];

interface NavbarProps {
  onRun: () => void;
  onChangeLanguage: (lang: string) => void;
  currentLanguage: string;
  onToggleLayout: () => void; // Prop for toggling layout
}

const Navbar = ({
  onRun,
  onChangeLanguage,
  currentLanguage,
  onToggleLayout,
}: NavbarProps) => {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <nav className="inset-x-4 max-w-5xl mx-auto py-5">
      <div className="flex items-center justify-between p-3 bg-white/10 dark:bg-gray-800/60 backdrop-blur-2xl saturate-150 rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-lg">
        {/* Left: Logo + Snippets */}
        <div className="flex items-center gap-6">
          <Link
            href={"/"}
            className="w-auto h-11 relative flex justify-center items-center group"
          >
            <div className="z-40 flex justify-center items-center space-x-1">
              <div className="w-10 h-10 rounded-[43%_57%_43%_57%_/_29%_71%_29%_71%] bg-gradient-to-br from-fuchsia-500 via-red-500 to-yellow-500"></div>
              <div className="flex flex-col text-start pl-1">
                <span className="text-2xl leading-[24px] font-semibold">
                  EchoCode
                </span>
                <span className="text-[14px]">Fast. Light. Easy.</span>
              </div>
            </div>
            <div className="absolute w-40 h-10 rounded-full bg-cyan-500 -left-1.5 blur-lg opacity-75 group-hover:opacity-100 group-hover:blur-[18px] transition-all duration-300"></div>
            <div className="absolute w-40 h-10 rounded-full bg-purple-500 -right--left-5 blur-lg opacity-75 group-hover:opacity-100 group-hover:blur-[18px] transition-all duration-300"></div>
          </Link>
          <Link
            href={"/code-clips"}
            className="px-4 py-2 text-sm font-medium text-gray-400 dark:text-gray-200 rounded-lg border hover:bg-slate-900/10 dark:hover:bg-slate-50/10"
          >
            CodeClips
          </Link>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-4">
          {/* Layout Toggle Button */}
          <button
            onClick={onToggleLayout} // Attach the handler here
            className="p-2 rounded-full border text-gray-300 dark:text-gray-300 hover:bg-slate-900/10 dark:hover:bg-slate-50/10"
            aria-label="Toggle editor layout"
          >
            <PiRowsFill size={18} />
          </button>

          {/* Language Selector */}
          <div className="relative z-50">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-400 dark:text-gray-200 rounded-lg border shadow-sm"
            >
              <span>{currentLanguage}</span>
              <MdOutlineExpandMore />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white/95 dark:bg-gray-800/70 backdrop-blur-xl rounded-lg shadow-xl z-50">
                {languages.map((lang) => (
                  <a
                    key={lang}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onChangeLanguage(lang.toLowerCase());
                      setIsLangOpen(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-sky-500/20"
                  >
                    {lang}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Run Button */}
          <button
            onClick={onRun}
            className="flex items-center gap-2 px-4 py-2 font-bold text-sm text-white bg-gradient-to-br from-sky-500 to-cyan-400 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-px transition-all"
          >
            <FaPlay /> Run
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;