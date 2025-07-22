import Link from "next/link";

const Footer = () => (
  <footer className="bg-[#161B22] border-t border-white/10 py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <Link href="/" className="relative flex items-center group">
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
      <div>
        <p className="text-center text-gray-500">
          © 2024 ThinkingThoughts. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
