"use client";
import { PiRowsFill } from "react-icons/pi";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-4 max-w-5xl mx-auto py-5">
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
        </div>

        <div className="flex justify-center items-center space-x-2.5">
          {/* Layout Toggle Button */}
          <button
            className="p-2 rounded-full border text-gray-300 dark:text-gray-300 hover:bg-slate-900/10 dark:hover:bg-slate-50/10"
            aria-label="Toggle editor layout"
          >
            <PiRowsFill size={18} />
          </button>
          <Link
            href={"/play-ground"}
            className="px-4 py-2 text-sm font-medium text-gray-400 dark:text-gray-200 rounded-lg border hover:bg-slate-900/10 dark:hover:bg-slate-50/10"
          >
            PlayGround
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
