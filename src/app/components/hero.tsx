import Link from "next/link";
import EditorMockup from "./editor-mockup";
import { TbBolt } from "react-icons/tb";

const Hero = () => (
  <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-32">
    <div className="max-w-4xl">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter">
        Code Smarter, Echo Louder
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
        A sleek and powerful environment for developers who code with clarity
        and purpose.
      </p>
      <div className="mt-8 flex justify-center items-center space-x-4">
        <Link
          href="/code-clips"
          className=" relative inline-block p-[2px] rounded-lg bg-gradient-to-r from-[#9F70FD] to-[#00BFFF] transition-all duration-300 hover:shadow-lg hover:shadow-[#00BFFF]/40"
        >
          <span className="block px-8 py-[10px] text-lg font-semibold bg-[#0D1117] text-gray-200 rounded-[6px] transition-colors duration-300   hover:bg-[#161B22] ">
            CodeClips
          </span>
        </Link>
        <Link
          href="/play-ground"
          className=" group flex items-center justify-center gap-2 px-8 py-3 text-lg font-bold text-white  bg-[#00BFFF] rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-[#00BFFF]/30 hover:shadow-xl hover:shadow-[#00BFFF]/50 hover:-translate-y-1"
        >
          <TbBolt className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
          <span>Start Coding</span>
        </Link>
      </div>
    </div>
    <EditorMockup />
  </div>
);

export default Hero;
