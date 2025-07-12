import { FaPlay } from "react-icons/fa";
import { MdDarkMode, MdLightMode, MdOutlineExpandMore } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="fixed top-4 inset-x-4 max-w-5xl mx-auto z-50">
      <div
        className="
        flex items-center justify-between
        p-3
        bg-white/60 dark:bg-gray-800/60
        backdrop-blur-xl
        saturate-150
        rounded-2xl
        border border-white/20 dark:border-gray-700/20
        shadow-lg
    "
      >
        {/* <!-- Left Side: Logo & Main Navigation --> */}
        <div className="flex items-center gap-6">
          {/* <!-- Logo --> */}
          <a href="#" className="flex items-center gap-2">
            <svg
              className="w-8 h-8 text-sky-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 8L3 12L7 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 8L21 12L17 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 4L10 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-bold text-gray-800 dark:text-white hidden sm:inline">
              CodeQuill
            </span>
          </a>

          {/* <!-- Snippets Button (NEW STYLE) --> */}
          <a
            href="#"
            className="
                px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200
                rounded-lg
                border border-slate-900/10 dark:border-slate-50/10
                hover:bg-slate-900/10 dark:hover:bg-slate-50/10
                hover:text-gray-900 dark:hover:text-white
                shadow-sm
                transition-all duration-200
            "
          >
            Snippets
          </a>
        </div>

        {/* <!-- Right Side: Controls --> */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* <!-- Theme Toggle (NEW STYLE) --> */}
          <button
            id="theme-toggle"
            className="
                p-2 rounded-full text-gray-600 dark:text-gray-300
                border border-slate-900/10 dark:border-slate-50/10
                hover:bg-slate-900/10 dark:hover:bg-slate-50/10
                hover:text-gray-900 dark:hover:text-white
                shadow-sm
                transition-all duration-200
            "
          >
            <span className="material-symbols-outlined dark:hidden">
              <MdLightMode />
            </span>
            <span className="material-symbols-outlined hidden dark:inline">
              <MdDarkMode />
            </span>
          </button>

          {/* <!-- Language Selector (NEW STYLE) --> */}
          <div className="relative" id="lang-dropdown-container">
            <button
              id="lang-toggle-button"
              className="
                    flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200
                    rounded-lg
                    border border-slate-900/10 dark:border-slate-50/10
                    hover:bg-slate-900/10 dark:hover:bg-slate-50/10
                    hover:text-gray-900 dark:hover:text-white
                    shadow-sm
                    transition-all duration-200
                "
            >
              <span id="current-lang">JavaScript</span>
              <span className="material-symbols-outlined text-base">
                <MdOutlineExpandMore />
              </span>
            </button>
            {/* <!-- Dropdown Panel --> */}
            <div
              id="lang-dropdown"
              className="
                    hidden
                    absolute right-0 mt-2 w-48
                    bg-white/70 dark:bg-gray-800/70
                    backdrop-blur-xl saturate-200
                    rounded-lg shadow-xl border border-white/20 dark:border-gray-700/20
                    overflow-hidden
                    "
            >
              <a
                href="#"
                className="lang-option block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-sky-500/20"
              >
                JavaScript
              </a>
              <a
                href="#"
                className="lang-option block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-sky-500/20"
              >
                Python
              </a>
              <a
                href="#"
                className="lang-option block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-sky-500/20"
              >
                HTML
              </a>
              <a
                href="#"
                className="lang-option block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-sky-500/20"
              >
                CSS
              </a>
            </div>
          </div>

          {/* <!-- Run Button (NEW "GEMSTONE" STYLE) --> */}
          <button
            className="
                flex items-center gap-2
                px-4 py-2
                font-bold text-sm text-white
                bg-gradient-to-br from-sky-500 to-cyan-400
                rounded-lg
                border border-sky-400/50
                shadow-lg shadow-sky-500/20
                hover:shadow-xl hover:shadow-cyan-400/40
                hover:-translate-y-px
                transform
                transition-all duration-300
                "
          >
            <span className="material-symbols-outlined text-base">
              <FaPlay />
            </span>
            Run
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
