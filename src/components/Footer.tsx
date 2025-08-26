import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => (
  <footer className="bg-[#161B22] border-t border-white/10 text-gray-400">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

        {/* Column 1: Brand & Socials */}
        <div className="col-span-2 md:col-span-4 lg:col-span-2">
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
          <p className="mt-4 text-sm max-w-xs">
            A lightning-fast, modern code playground for developers to test, share, and collaborate.
          </p>
          <div className="mt-6 flex space-x-4">
            <a href="#" aria-label="GitHub" className="hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="#" aria-label="Discord" className="hover:text-white transition-colors">
              <FaDiscord size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Product Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Product</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="/play-ground" className="text-sm hover:text-white transition-colors">Playground</Link></li>
            <li><Link href="/code-clips" className="text-sm hover:text-white transition-colors">CodeClips</Link></li>
            <li><Link href="#features" className="text-sm hover:text-white transition-colors">Features</Link></li>
            <li><Link href="#pricing" className="text-sm hover:text-white transition-colors">Pricing</Link></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="#demo" className="text-sm hover:text-white transition-colors">Interactive Demo</Link></li>
            <li><Link href="#cta" className="text-sm hover:text-white transition-colors">Get Started</Link></li>
            <li><a href="#" className="text-sm hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="text-sm hover:text-white transition-colors">About</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Stay Updated</h3>
          <p className="mt-4 text-sm">Get the latest news, updates, and tips directly in your inbox.</p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#2D333B] px-3 py-2 text-sm text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" aria-label="Subscribe" className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <FiSend size={18} />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} EchoCode. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
