import Link from "next/link";
import { FiUsers } from "react-icons/fi";
import AnimatedEditorMockup from "../shear-ui/AnimatedEditorMockup";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="text-center lg:text-left pt-16 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full border border-blue-200">
              <FiUsers />
              Trusted by 50K+ developers
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-gray-900 leading-tight">
              CODE FASTER.
              <br />
              DEBUG SMARTER.
              <br />
              BUILD BETTER.
            </h1>
            
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-600">
              The intelligent code editor that thinks like you do. Lightning-fast performance meets AI-powered development.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/code-clips"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:opacity-90 transition-opacity"
              >
                Code Clips Free
              </Link>
              <Link
                href="/play-ground"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-gray-500">
              <span>✓ 2-second startup</span>
              <span>✓ AI autocomplete</span>
              <span>✓ Cross-platform</span>
            </div>
          </div>
          
          {/* Right Side: Animated Mockup with Floating Elements */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Floating Elements for Parallax Effect */}
            <div className="absolute -top-3 -left-12 w-48 p-3 bg-white/50 backdrop-blur-md rounded-lg shadow-lg text-xs border border-gray-200 z-50">
              <strong>Performance:</strong>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                <div className="bg-green-500 h-2 rounded-full w-[95%]"></div>
              </div>
            </div>
            <div className="absolute bottom-12 -right-12 w-40 p-3 bg-white/50 backdrop-blur-md rounded-lg shadow-lg text-xs border border-gray-200 z-50">
              <pre>&lt;Button primary /&gt;</pre>
            </div>

            <AnimatedEditorMockup />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;