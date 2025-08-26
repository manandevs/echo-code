import Link from "next/link";

// A small, self-contained component for the geometric pattern background.
const GeometricPattern = () => (
  <div className="absolute inset-0 w-full h-full opacity-5" style={{ zIndex: 0 }}>
    <svg width="100%" height="100%">
      <defs>
        <pattern id="pattern-squares" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <rect width="1" height="30" fill="white" />
          <rect width="30" height="1" fill="white" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-squares)" />
    </svg>
  </div>
);

const FinalCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)]">
      {/* Background Overlays: Pattern and Darkening Layer */}
      <GeometricPattern />
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[400px] py-20 text-center">
        {/* Primary Headline */}
        <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-[#ffffff] md:text-5xl">
          Ready to Transform Your Coding Experience?
        </h2>

        {/* Supporting Subheadline */}
        <p className="mt-4 text-xl text-white/90">
          Join thousands of developers who&apos;ve already made the switch.
        </p>

        {/* Button Group */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Primary Button: Download Free */}

          <Link
            href="/code-clips"
            className="flex items-center justify-center w-full sm:w-52 h-14 bg-white text-gray-900 text-lg font-bold rounded-lg
                       transition-all duration-300 ease-in-out
                       hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(255,255,255,0.3)]"
          >
            Code Clips Free
          </Link>

          {/* Secondary Button: View Pricing */}
          <Link
            href="/play-ground"
            className="flex items-center justify-center w-full sm:w-52 h-14 bg-transparent text-white text-lg font-medium rounded-lg
                       border-2 border-white/50
                       transition-colors duration-300
                       hover:bg-white/10"
          >
            Watch Demo
          </Link>
        </div>

        {/* Micro-copy / Trust Indicator */}
        <p className="mt-6 text-base text-white/80">
          No credit card required • 14-day pro trial
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;