import React from "react";
import { Building2, ChevronDown } from "lucide-react";
import Video from "../../components/Video";

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navOffset = 72;
    const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-[95vh] min-h-[750px] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Video />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="hero-animate hero-animate-delay-1 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>

            <span className="text-white text-xs font-medium tracking-[0.2em] uppercase">
              Premium Real Estate 2024
            </span>
          </div>

          <div className="max-w-5xl">
            <h1 className="hero-animate hero-animate-delay-2 text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-[-0.04em] mb-8">
              Elevate Your
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                Living Experience
              </span>
            </h1>

            <p className="hero-animate hero-animate-delay-3 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
              Discover a lifestyle defined by luxury. We offer exclusive access
              to the world's most prestigious properties and architectural
              masterpieces.
            </p>
          </div>

          <div className="hero-animate hero-animate-delay-4 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Browse Properties
            </button>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-bold rounded-full border border-white/30 hover:bg-white/20 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      {/* Real-estate explore cue — scrolls to projects */}
      <button
        type="button"
        onClick={() => scrollTo("projects")}
        className="hero-explore-cue absolute bottom-8 left-1/2 -translate-x-1/2 z-10 group flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer"
        aria-label="Explore our properties"
      >
        <span className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-4 py-2 group-hover:bg-white/20 group-hover:border-white/40 transition-all">
          <Building2 size={16} className="text-blue-300" />
          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase">
            Explore Properties
          </span>
        </span>
        <ChevronDown
          size={22}
          strokeWidth={2}
          className="hero-explore-chevron text-white/70 group-hover:text-white"
        />
      </button>
    </section>
  );
};

export default Hero;
